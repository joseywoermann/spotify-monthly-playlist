import dotenv from "dotenv";
dotenv.config();
import { Settings } from "./typings";

export const settings: Settings = {
    token: `Bearer ${process.env.SPOTIFY_TOKEN}`,
    limit: 10,
};
