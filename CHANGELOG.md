## 06.02.2018 - 1.4.2
* Added default splashscreens for Android & iOS.
* Added default icons icons for Android & iOS.
* Added default favicon.
* Added default Cordova plugin configuration.
* Modified the config.xml to match the plugin configurations.

## 30.01.2018 - 1.4.1
* Updated dependencies.
* Rearranged README.md to be more clear.

## 19.01.2018 - 1.4.0
* Updated Framework7 & Framework7-vue dependencies.
* Framework7 is using v2.0.6 and Framework7-vue is using v2.0.0
* Refactor and code formatting.
* Added and connected Framework7-vue's kitchen sink app available on [GitHub](https://github.com/framework7io/framework7-vue)

## 15.01.2018 - 1.3.3
* Updated Vue from v2.2.4 to v2.5.13
* Added axios as a dependency to make API calls.
* Added vue2-google-maps to be able to use google maps inside the apps.
* Made a demo page that is accessible from the main view and that displays a working google map.

## 12.01.2018 - 1.3.2
* Re-arranged existing components into a more modular setup to serve as an example.
* Made a custom style change demonstration on the main-view component. Using the now in place 7-1 pattern for custom scss styles.
* Slight refactor of files and code.

## 11.01.2018 - 1.3.1
* Added support for the 7-1 patter for scss styles although the styles that come with the template haven't been correctly placed in their respective .scss files according to the template, wait until release 1.3.2 for this.
* Added additional npm script `npm run dev:browser` will open un a dashboard for visualizing the webpack build status and other information while in development mode and also opens up a development server that has live-reload capabilities.
* Added the /platforms and /www folders to the .gitignore file for easier commits, these files will only be used for development and production of an app.

## 11.01.2018 - 1.3.0
* Information update for this fork.
* Updated package.json with additional scripts and dependencies.
* Added cordova-plugin-whitelist.

## 29.11.2017 - 1.2.1
* Updated dependencies.
* Fixed device.js related errors.

## 23.07.2017 - 1.2.0
* Updated dependencies.

## 10.05.2017 - 1.1.3
* Changed uglify-js dependency version.
* Removed source-map-loader dependency.

## 04.05.2017 - 1.1.2
* Added support for scss to one page component.
* Chokidar dependency added to template's package.json.

## 25.04.2017 - 1.1.1
* Added whitespace support to command paths. You can use folder names with whitespace now.

## 25.04.2017 - 1.1.0
* Added static folder for static assets. Static folder directly copies to www folder on compile time also static folder automatically sync with www/static when you are using live-reload.
* Directory structure changed.
* Dependency added: `chokidar`

## 25.04.2017 - 1.0.12
* Provided compatibility with latest webpack-dev-server update. Added ip:port to public argument for live reload.
* The double nails were standardized as single nails in `beforedep.js` and `hookers.js`.

## 07.04.2017 - 1.0.11
* Fixed Device_router.html has been made compatible with Android < 4.4.0.
* Fixed key to vue lists
> Thanks for **konstantin-popov** for fixes.
* Added .editorconfig and files edited with this config.

## 14.03.2017 - 1.0.10
* Added epipebomb for linux and mac os.
* Fixed webpack ^2.2.1 support
* Fixed buffer size for webpack outputs
* Updated uglify js version to latest (for ES6 features)

## 17.01.2017 - 1.0.4
* Dev-server supports hot-module-replacement now!

## 16.01.2017 - 1.0.1
* Supports phonegap now!
* Template now uses `webpack-dev-server` for live-reload. So cordova-plugin-browsersync dependency dropped.
* `webpack-dev-server` dependency added.
* You can use `cordova (run|emulate) (ios|android|browser) -- --lr` now. lr means `live-reload`.
* Added `before_deploy` hook. You can check at: [beforedep.js](template_src/hooks/beforedep.js)
* [hookers.js](template_src/hooks/hookers.js) changed.
* [CordovaDeviceRouter.js](template_src/webpack/dev_helpers/CordovaDeviceRouter.js) added. In `live-reload` mode, server injects the `cordova.js` file according to where you are connecting.
* [device_router.html](template_src/webpack/dev_helpers/device_router.html) added. In `live-reload` mode, this file routes you to right location.
