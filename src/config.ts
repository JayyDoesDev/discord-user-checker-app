interface IConfig {
    width: number;
    height: number;
    minimizable: boolean;
    frame: boolean;
    webPreferences: {
        preload: string;
    }
}

export const config: IConfig = {
    width: 1000,
    height: 1000,
    minimizable: true,
    frame: false,
    webPreferences: {
        preload: process.cwd() + "/dist/preload.js"
    }
}