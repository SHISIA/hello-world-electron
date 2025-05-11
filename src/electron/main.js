import { app, BrowserWindow } from 'electron';
import path from 'path';

app.on('ready', () => {
    const mainWindow = new BrowserWindow({});
    const indexPath = path.join(app.getAppPath(), 'dist-react', 'index.html');
    mainWindow.loadFile(indexPath);
});
