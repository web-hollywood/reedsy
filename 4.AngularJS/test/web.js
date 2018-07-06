const { expect } = require("chai");
const puppeteer = require("puppeteer");
const server = require("../server");
const sleep = require("sleep-promise");

let browser;

describe("Frontend", function() {
    this.timeout(60000);
    before(async function() {
        server.start();
        await sleep(5000);
        browser = await puppeteer.launch({
            headless: true,
            //slowMo: 100,
            timeout: 10000
        });
    });

    describe("Load in the browser", function() {
        let page;

        before(async function() {
            page = await browser.newPage();
            await page.goto("http://localhost:4000");
        });

        after(async function() {
            await page.close();
        });

        it("should have the correct page title", async function() {
            expect(await page.title()).to.contain("app");
        });

        it("should have a heading", async function() {
            let heading;

            await page.waitFor("h2");
            heading = await page.$eval("h2", heading => heading.innerText);

            expect(heading).to.contain("popular books of all the time");
        });

        it("should have books", async function() {
            await page.waitFor("tr.cursor-pointer");
            expect(
                await page.$$eval("tr.cursor-pointer", trs => trs.length)
            ).to.be.greaterThan(0);
        });
    });

    after(async function() {
        server.stop();
        await browser.close();
    });
});
