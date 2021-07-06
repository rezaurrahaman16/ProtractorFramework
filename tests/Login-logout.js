
'use strict';
var input = require('./variable.js');
// var API = require('../APIs/login.js');

// describe('login with API', function () {
//     it('Sensity user Login API', function () {
//         var api = API;
//         beforeAll(function () {
//             api.login();
//         });
//     });
// });

describe('login screen', function () {
    it('User login as sensity user', function () {
        // open browser
        browser.waitForAngularEnabled(false);
        browser.get("https://dev.radassist.net/");
        browser.sleep(1000);
        element(by.id('username')).sendKeys(input.username);
        // browser.sleep(1000);
        element(by.id('password')).sendKeys(input.password);
        // browser.sleep(1000);
        element(by.xpath("//input[@id='kc-login']")).click();
        browser.sleep(2000);
    });
});

