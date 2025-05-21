import { app, BrowserWindow } from 'electron';
import path from 'path';
import {isDev} from "./util.js";

const createWindow= () =>{
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    if (isDev()){
        win.loadURL("http://localhost:5123").then(() => console.log("App Ready: Development"));
    }else {
        win.loadFile(path.join(app.getAppPath(),"/dist-react/index.html")).then(() => console.log("Application Started: Production"));
    }
}

app.whenReady().then(() => {
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
