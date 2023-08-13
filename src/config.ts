interface IConfig {
    width: number;
    height: number;
    icon: string;
    minimizable: boolean;
    frame: boolean;
    webPreferences: {
        preload: string;
        devTools: boolean;
    }
}

interface IRPCConfig {
    id: string;
    state: string;
    startTimestamp: Date;
    largeImageKey: string;
    larageImageText: string;
    smallImageKey: string;
    smallImageText: string;
    buttons?: IRPCButton[];
}

interface IRPCButton {
    label: string;
    url: string;
}

export const config: IConfig = {
    width: 1000,
    height: 1000,
    icon: process.cwd() + "/public/assets/rose.ico",
    minimizable: true,
    frame: false,
    webPreferences: {
        preload: process.cwd() + "/dist/preload.js",
        devTools: false
    }
}

export const RPCConfig: IRPCConfig = {
    id: "850934424153358366",
    startTimestamp: new Date(),
    state: "Searching for a user",
    largeImageKey: "rose",
    larageImageText: "DUC",
    smallImageKey: "person",
    smallImageText: "Searching",
    buttons: [
        {
            label: "Check it out!",
            url: "https://duc.jddev.wtf"
        },
        {
            label: "Download",
            url: ""
        }
    ]
}