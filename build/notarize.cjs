require('dotenv').config(); // Load environment variables

const { notarize } = require('electron-notarize');

exports.default = async function notarizing(context) {
    const { electronPlatformName, appOutDir, packager } = context;

    // Only notarize on macOS
    if (electronPlatformName !== 'darwin') return;

    const appName = packager.appInfo.productFilename;

    console.log(`Notarizing ${appName}.app...`);

    // Use the newer notarytool method
    return await notarize({
        tool: 'notarytool',
        appBundleId: 'com.tester.app',
        appPath: `${appOutDir}/${appName}.app`,
        appleId: process.env.APPLE_ID,
        appleIdPassword: process.env.APPLE_APP_SPECIFIC_PASSWORD,
        teamId: process.env.APPLE_TEAM_ID,
    });
};
