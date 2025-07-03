import { app, BrowserWindow, screen } from 'electron';
import path from 'path';
import { isDev } from "./util.js";
const createWindow = () => {
    // Get the screen dimensions to determine the maximum available size
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width: maxWidth, height: maxHeight } = primaryDisplay.workAreaSize;
    console.log(`Maximum available screen size: ${maxWidth}x${maxHeight}`);
    // Calculate the window size based on the available screen size
    // Use the requested size (800x1200) or the maximum available size, whichever is smaller
    const windowWidth = Math.min(800, maxWidth);
    const windowHeight = Math.min(1200, maxHeight);
    console.log(`Setting window size to: ${windowWidth}x${windowHeight}`);
    // Create the browser window with the calculated dimensions
    const win = new BrowserWindow({
        width: windowWidth,
        height: windowHeight,
        resizable: true,
        useContentSize: true,
        minWidth: 800,
        minHeight: 600,
        // Set show to false initially to avoid flickering
        show: false
    });
    // Set minimum size constraint
    win.setMinimumSize(800, 600);
    // Center the window on the screen
    win.center();
    // Show the window once it's ready
    win.once('ready-to-show', () => {
        win.show();
        const [actualWidth, actualHeight] = win.getSize();
        console.log(`Window shown with size: ${actualWidth}x${actualHeight}`);
    });
    if (isDev()) {
        win.loadURL("http://localhost:5123").then(() => {
            const [w, h] = win.getSize();
            console.log(`Window ready with size: ${w}x${h}`);
            console.log("App Ready: Development");
        });
    }
    else {
        win.loadFile(path.join(app.getAppPath(), "/dist-react/index.html")).then(() => {
            const [w, h] = win.getSize();
            console.log(`Window ready with size: ${w}x${h}`);
            console.log("Application Started: Production");
        });
    }
};
app.whenReady().then(() => {
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
