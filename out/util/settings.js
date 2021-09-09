import dotenv from "dotenv";
dotenv.config();
export const settings = {
    token: `Bearer ${process.env.SPOTIFY_TOKEN}`,
    limit: 10,
};
