import fetch from "node-fetch";
import {
    debugLog,
    errorLog,
    getMonth,
    getYear,
    infoLog,
    warnLog,
} from "./util/helpers.js";
import { settings } from "./util/settings.js";
import { Track, SpotifyResponse, URI } from "./util/typings";

const { token, limit } = settings;

let uris: URI[];
let data: SpotifyResponse;

const main = async () => {
    try {
        const response = await fetch(
            `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=${limit}`,
            { headers: { Authorization: token } }
        );
        data = await response.json();
    } catch (error) {
        errorLog(error);
    }
    if (data.error) return errorLog(`[SPOTIFY] ${data.error.message}`);

    const tracks: Track[] = data.items;

    uris = tracks.map((track) => track.uri);
    infoLog("Data has been retrieved successfully");
    await createPlaylist();
};

const createPlaylist = async () => {
    try {
        const response = await fetch(
            "https://api.spotify.com/v1/me/playlists",
            {
                method: "POST",
                headers: {
                    Authorization: token,
                },
                body: JSON.stringify({
                    name: `Most Played (${getMonth()} ${getYear()})`,
                    description: "Most played songs from the past month.",
                }),
            }
        );
        data = await response.json();
        if (data.error) return errorLog(`[SPOTIFY] ${data.error.message}`);
        infoLog("Playlist has been created successfully");
    } catch (error) {
        errorLog(error);
    }

    await addItems(data["id"], uris);
};

const addItems = async (playlistId: string, uris: URI[]) => {
    try {
        const response = await fetch(
            `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            {
                method: "POST",
                headers: { Authorization: token },
                body: JSON.stringify({ uris: uris }),
            }
        );
        data = await response.json();
        if (data.error) return errorLog(`[SPOTIFY] ${data.error.message}`);
        infoLog("Songs have been added successfully");
    } catch (error) {
        errorLog(error);
    }
};

(async () => {
    await main();
})();
