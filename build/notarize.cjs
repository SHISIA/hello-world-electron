// build/notarize.cjs
require('dotenv').config();

exports.default = async function notarize(context) {
    const { electronPlatformName, appOutDir } = context;

    if (electronPlatformName !== 'darwin') return;

    const appName = context.packager.appInfo.productFilename;

    return require('electron-notarize').notarize({
        tool: 'notarytool',
        appPath: `${appOutDir}/${appName}.app`,
        appleId: process.env.APPLE_ID,
        appleIdPassword: process.env.APPLE_APP_SPECIFIC_PASSWORD,
        teamId: process.env.APPLE_TEAM_ID,
    });
};