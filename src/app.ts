import { app, BrowserWindow, ipcMain, IpcMain } from "electron";
import { config } from "./config";
import { Client as RPCClient } from "discord-rpc";
import { RPCConfig } from "./config";
const rpc: RPCClient = new RPCClient({ transport: "ipc" })
function createWindow(): void {
    const win: BrowserWindow = new BrowserWindow({
        width: config.width,
        height: config.height,
        icon: config.icon,
        minimizable: config.minimizable,
        frame: config.frame,
        webPreferences: {
            preload: config.webPreferences.preload,
            devTools: config.webPreferences.devTools
        }
    });
    win.loadFile(process.cwd() + "/public/index.html");
    rpc.login({ clientId: RPCConfig.id });
    rpc.on("ready", () => activiateRPC());

    ipcMain.on("close", () => {
        rpc.clearActivity();
        win.close();
    });

    ipcMain.on("minimize", () => {
        win.minimize();
    });

    ipcMain.on("maximize", () => {
        if (win.isMaximized()) {
            win.unmaximize();
        } else {
            win.maximize();
        };
    });
}

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        };
    });
});

function activiateRPC(): void {
    rpc.setActivity({
        state: RPCConfig.state,
        startTimestamp: RPCConfig.startTimestamp,
        largeImageKey: RPCConfig.largeImageKey,
        largeImageText: RPCConfig.larageImageText,
        smallImageKey: RPCConfig.smallImageKey,
        smallImageText: RPCConfig.smallImageText,
        buttons: RPCConfig.buttons,
    })
}