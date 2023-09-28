# Dashboard Loading Screen
This plugin allows changing the new Sisense dashboard loading screen introduced in L2023.6. This is intended to enable changing or hiding the loading screen.

## Installation
To install this plugin, drop this dashboardLoadingScreen folder into your plugins folder (/opt/sisense/storage/plugins). Enable the plugin on the Addons tab in the Admin section, wait for the build, and you are good to go.

## Customize
To customze the loading screen, first grab the url of an image or gif you want to use. Next, update loadingImg inside of main.6.js with your url and save. I've noticed the update can take a few refreshes before the new image is used. 
Tip - use an image with a transparent background. 