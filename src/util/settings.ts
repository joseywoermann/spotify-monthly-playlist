import dotenv from "dotenv";
dotenv.config();
import { Settings } from "./typings";

export const settings: Settings = {
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
};
