import { app, BrowserWindow, screen } from 'electron';
import path from 'path';
import {isDev} from "./util.js";
const { Menu } = require('electron');
Menu.setApplicationMenu(null);

const createWindow= () =>{
    // Get the screen dimensions to determine the maximum available size
    const primaryDisplay = screen.getPrimaryDisplay();
    const { width: maxWidth, height: maxHeight } = primaryDisplay.workAreaSize;
    console.log(`Maximum available screen size: ${maxWidth}x${maxHeight}`);
    console.log(`Raw maxWidth value: ${maxWidth}`);

    // Calculate the window size based on the available screen size
    // Use the requested size (1200x600) or the maximum available size, whichever is smaller
    // Force windowWidth to be 1200 for testing
    const windowWidth = 1200; // Math.min(1200, maxWidth);
    const windowHeight = Math.min(600, maxHeight);
    console.log(`Calculated windowWidth: ${windowWidth}, from Math.min(1200, ${maxWidth})`);
    console.log(`Setting window size to: ${windowWidth}x${windowHeight}`);

    // Create the browser window with the calculated dimensions
    console.log(`Creating window with width: ${windowWidth}, height: ${windowHeight}`);
    Menu.setApplicationMenu(null);

    const win = new BrowserWindow({
        width: 1200,
        height: 600, 
        useContentSize: true,
        resizable: true,
        autoHideMenuBar: true,
        minWidth: 800,
        minHeight: 600,
        show: false,
        frame: false,
    })
    console.log(`Window created with options: width=${windowWidth}, height=${windowHeight}, minWidth=800, minHeight=600`);


    // Set minimum size constraint - ensure it's not larger than our desired width
    win.setMinimumSize(800, 600);
    console.log(`Set minimum size to: 800x600`);

    // Center the window on the screen
    win.center();

    // Show the window once it's ready
    win.once('ready-to-show', () => {
        // Ensure the window size is set correctly before showing
        console.log(`Setting window size before showing: ${windowWidth}x${windowHeight}`);
        // win.setSize(windowWidth, windowHeight);
        win.show();
        const [actualWidth, actualHeight] = win.getSize();
        console.log(`Window shown with size: ${actualWidth}x${actualHeight}`);
    });
    if (isDev()){
        win.loadURL("http://localhost:5123").then(() => {
            // Ensure the window size is maintained after loading content
            console.log(`Setting window size after loading content (dev): ${windowWidth}x${windowHeight}`);
            // win.setSize(windowWidth, windowHeight);
            const [w, h] = win.getSize();
            console.log(`Window ready with size: ${w}x${h}`);
            console.log("App Ready: Development");
        });
    }else {
        win.loadFile(path.join(app.getAppPath(),"/dist-react/index.html")).then(() => {
            // Ensure the window size is maintained after loading content
            console.log(`Setting window size after loading content (prod): ${windowWidth}x${windowHeight}`);
            win.setSize(windowWidth, windowHeight);
            const [w, h] = win.getSize();
            console.log(`Window ready with size: ${w}x${h}`);
            console.log("Application Started: Production");
        });
    }
}

app.whenReady().then(() => {
    // Set application menu to null to completely remove the menu bar
    Menu.setApplicationMenu(null);

    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

//quit the app when all windows are closed
app.on('window-all-closed', () =>{
    if (process.platform !== 'darwin') {
        app.quit();
    }
})
