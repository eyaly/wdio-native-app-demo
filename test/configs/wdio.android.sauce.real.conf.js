const {config} = require('./wdio.shared.sauce.conf');

config.maxInstances=2;
// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    deviceName: 'Samsung.*',
    platformVersion: '9',
    platformName: 'Android',
    orientation: 'PORTRAIT',
    automationName: 'UiAutomator2',
    // The path to the app that has been uploaded to the Sauce Storage,
    // see https://wiki.saucelabs.com/display/DOCS/Application+Storage for more information
    app: 'storage:filename=Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
    appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    // Keep the device connected between tests so we don't need to wait for the cleaning process
    cacheId: 'androidReal123',
    noReset: true,
    // You can also provide the Appium version
    // we need to have at least 1.19.0 for the new Android Gesture functions
    appiumVersion: '1.20.1',
    newCommandTimeout: 240,
    // Always default the language to a language you prefer so you know the app language is always as expected
    language: 'en',
    locale: 'en',
    name: 'Sample App Test Name'
  },
  {
    deviceName: 'Samsung.*',
    platformVersion: '11',
    platformName: 'Android',
    orientation: 'PORTRAIT',
    automationName: 'UiAutomator2',
    // The path to the app that has been uploaded to the Sauce Storage,
    // see https://wiki.saucelabs.com/display/DOCS/Application+Storage for more information
    app: 'storage:filename=Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
    appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
    // Keep the device connected between tests so we don't need to wait for the cleaning process
    cacheId: 'androidReal456',
    noReset: true,
    // You can also provide the Appium version
    // we need to have at least 1.19.0 for the new Android Gesture functions
    appiumVersion: '1.20.1',
    newCommandTimeout: 240,
    // Always default the language to a language you prefer so you know the app language is always as expected
    language: 'en',
    locale: 'en',
    name: 'Sample App Test Name New'
  },
];

exports.config = config;