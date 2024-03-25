/** 
Setup:

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

source ~/.bashrc

nvm install 18

nvm use 18

npm install puppeteer puppeteer-extra puppeteer-extra-plugin-stealth
 
=====

Clone:

git clone 

=====

Run:
 
node adressbooker.js

*/

// The puppeteer (from puppeteer-extra)
const puppeteer = require('puppeteer-extra')

// The stealth plugin
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

// Success flag
var isSuccess = false;

// The URL
const url = 'https://bot.sannysoft.com';

// The core of the operation
(async() => {

    // Advise user
    console.log('Running AddressBooker..')

    // The browser
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--start-fullscreen', '--window-size=1920,1040']
    });

    // The page
    const page = await browser.newPage();

    // Set the viewport
    await page.setViewport({
        width: 1920,
        height: 1040
    });

    // Trigger browsing and wait for page load
    await page.goto(url, {
        waitUntil: 'load'
    });

    // Get screenshot
    await page.screenshot({
        path: 'puppeteer-screenshot.png',
        fullPage: true
    });

    // Advise user
    console.log('Webpage saved to puppeteer-screenshot.png');

    // Close the browser
    await browser.close();

    // TODO Set success flag [For further use]
    isSuccess = true;

    // Set exit message
    const exitMessage = isSuccess ? `All actions processed successfully.` : 'There was an error when processing actions.';

    // Advise user on exit
    console.log(exitMessage)
})();
