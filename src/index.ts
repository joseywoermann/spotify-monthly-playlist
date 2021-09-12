import dotenv from "dotenv";
dotenv.config();
import puppeteer from "puppeteer";
import { debugLog } from "./util/helpers.js";
import { settings } from "./util/settings.js";

const url = "https://www.statsforspotify.com/track/top";

(async () => {
    debugLog("Starting browser...");
    const browser = await puppeteer.launch({ headless: true, slowMo: 150 });
    debugLog("Done...");

    debugLog("Navigating to login page...");
    const page = await browser.newPage();
    await page.goto("https://www.statsforspotify.com/track/top");
    debugLog("Done...");

    debugLog("Logging in...");
    await page.type("#login-username", settings.email);
    await page.type("#login-password", settings.password);
    await page.click("#login-button");
    await new Promise((r) => setTimeout(r, 2000));
    await page.waitForSelector("#auth-accept");
    await page.click("#auth-accept");
    debugLog("Done...");

    // this is pain
    // sometimes the cookie dialog is there, sometimes it never appears
    debugLog("Accepting cookies...");
    await page.goto("https://www.statsforspotify.com/track/top");
    // await page.waitForXPath(
    //     "/html/body/div[1]/div/div/div/div[2]/div/button[2]"
    // );
    await page.click("button[aria-label=AGREE]");
    debugLog("Done...");

    debugLog("Creating playlist...");
    await page.goto("https://www.statsforspotify.com/track/top");
    await page.click("button[data-v-006ae5b6]");
    debugLog("Done...");

    debugLog("Closing Browser...");
    await browser.close();
    debugLog("Done...");
})();
