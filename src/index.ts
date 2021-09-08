import fetch from "node-fetch";
import dotenv from "dotenv";
import { getMonth, getYear } from "./util/helpers.js";
import { settings } from "./util/settings.js";
import { Item, URI } from "./util/interfaces.js";
dotenv.config();

let playlistId = "";
let uris: URI[] = [];

const { token, limit } = settings;

const main = async () => {
    const response = await fetch(
        `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=${limit}`,
        {
            headers: {
                Authorization: token,
            },
        }
    );

    const data = await response.json();
    uris = data["items"].map((item) => item["uri"]);
    await createPlaylist();
};

const createPlaylist = async () => {
    const response = await fetch("https://api.spotify.com/v1/me/playlists", {
        method: "POST",
        headers: {
            Authorization: token,
        },
        body: JSON.stringify({
            name: `Most Played (${getMonth()} ${getYear()})`,
            description: "Most played songs from the past month.",
        }),
    });
    const data = await response.json();
    playlistId = data["id"];
    await addItems();
};

const addItems = async () => {
    const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
            method: "POST",
            headers: {
                Authorization: token,
            },
            body: JSON.stringify({
                uris: uris,
            }),
        }
    );
    const data = await response.json();
    console.log(data);
};

(async () => {
    await main();
})();
