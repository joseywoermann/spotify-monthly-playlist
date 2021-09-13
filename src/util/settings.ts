import dotenv from "dotenv";
import { Settings } from "./typings";
dotenv.config();

export const settings: Settings = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
};
