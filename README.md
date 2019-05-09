### Prerequisites

Make sure you have npm installed.
Install the package.json with npm install.

## Running the tests

# Desktop
To run the desktop test execute on the base folder:

npm run desktop

# Mobile 
To run the mobile tests execute on the base folder :

npm run mobile
 
You have to set up the capabilities variable wdio.mobile.config.js with the description of the emulator used in this case we have:

maxInstances: 1,
browserName: 'chrome',
appiumVersion: '1.7.1',
deviceName: 'testBet',
platformVersion: '8.1.0',
platformName: 'android',

The chrome version on the device should correspond to the version specified for the chrome driver at this 2.41, if not you could change the versin of chrome driver in package.json according to:
  
https://github.com/appium/appium/blob/master/docs/en/writing-running-appium/web/chromedriver.md


## Report

Junit report is created in the folder junit_report.


