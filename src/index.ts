import dotenv from "dotenv";
dotenv.config();
import puppeteer from "puppeteer";
import { debugLog } from "./util/helpers.js";
import { settings } from "./util/settings.js";
import { Selectors, URL } from "./util/typings.js";

const url: URL = "https://www.statsforspotify.com/track/top";

const selectors: Selectors = {
    username: "#login-username",
    password: "#login-password",
    button: "#login-button",
    auth: "#auth-accept",
    cookies: "button[aria-label=AGREE]",
    playlist: "button[data-v-006ae5b6]",
};

(async () => {
    debugLog("Starting browser...");
    const browser = await puppeteer.launch({ headless: true, slowMo: 150 });
    debugLog("Done...");

    debugLog("Navigating to login page...");
    const page = await browser.newPage();
    await page.goto(url);
    debugLog("Done...");

    debugLog("Logging in...");
    await page.type(selectors.username, settings.email);
    await page.type(selectors.password, settings.password);
    await page.click(selectors.button);
    await new Promise((r) => setTimeout(r, 2000));
    await page.waitForSelector(selectors.auth);
    await page.click(selectors.auth);
    debugLog("Done...");

    // this is pain
    // sometimes the cookie dialog is there, sometimes it never appears
    debugLog("Accepting cookies...");
    await page.goto(url);
    await page.click(selectors.cookies);
    debugLog("Done...");

    debugLog("Creating playlist...");
    await page.goto(url);
    await page.click(selectors.playlist);
    debugLog("Done...");

    debugLog("Closing Browser...");
    await browser.close();
    debugLog("Done...");
})();
