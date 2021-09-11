import dotenv from "dotenv";
dotenv.config();
import { Settings } from "./typings";

export const settings: Settings = {
    token: `Bearer ${process.env.SPOTIFY_TOKEN}`,
    client_id: process.env.CLIENT_ID,
    limit: 10, // Max number of tracks to return,
    scopes: "user-top-read playlist-modify-public",
};
