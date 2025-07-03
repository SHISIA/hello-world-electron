import { app, BrowserWindow, Menu, Notification } from 'electron';
import path from 'path';
import { isDev } from "./util.js";
Menu.setApplicationMenu(null);
const createWindow = () => {
    // Create the browser window with the calculated dimensions
    const win = new BrowserWindow({
        width: 1200,
        height: 600,
        fullscreen: true,
        useContentSize: true,
        resizable: true,
        autoHideMenuBar: true,
        minWidth: 800,
        minHeight: 600,
    });
    // Set minimum size constraint - ensure it's not larger than our desired width
    win.setMinimumSize(800, 600);
    console.log(`Set minimum size to: 800x600`);
    // Show system notification after window is ready
    win.webContents.on('did-finish-load', () => {
        new Notification({
            title: 'ZenClutter',
            body: 'Welcome back! Your calendar is synced.',
        }).show();
    });
    // Center the window on the screen
    win.center();
    // Show the window once it's ready
    win.once('ready-to-show', () => {
        // Ensure the window size is set correctly before showing
        win.show();
        const [actualWidth, actualHeight] = win.getSize();
        console.log(`Window shown with size: ${actualWidth}x${actualHeight}`);
    });
    if (isDev()) {
        win.loadURL("http://localhost:5123").then(() => {
            // Ensure the window size is maintained after loading content
            const [w, h] = win.getSize();
            console.log(`Window ready with size: ${w}x${h}`);
            console.log("App Ready: Development");
        });
    }
    else {
        win.loadFile(path.join(app.getAppPath(), "/dist-react/index.html")).then(() => {
            // Ensure the window size is maintained after loading content
            const [w, h] = win.getSize();
            console.log(`Window ready with size: ${w}x${h}`);
            console.log("Application Started: Production");
        });
    }
};
app.whenReady().then(() => {
    // Set application menu to null to completely remove the menu bar
    Menu.setApplicationMenu(null);
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
//quit the app when all windows are closed
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
