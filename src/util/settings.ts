import { Settings } from "./interfaces";

export const settings: Settings = {
    token: `Bearer ${process.env.SPOTIFY_TOKEN}`,
    limit: 10,
};
