import { Plugins } from '@capacitor/core';
import { NativeMarketPlugin as NMPlugin } from './definitions';

const { NativeMarket: NM } = Plugins;

export class NativeMarket implements NMPlugin {
    openStoreListing(options: { appId: string; }): Promise<void> {
        return NM.openStoreListing(options);
    }

    openDevPage(options: { devId: string; }): Promise<void> {
        return NM.openDevPage(options);
    }

    openCollection(options: { name: string; }): Promise<void> {
        return NM.openCollection(options);
    }

    openEditorChoicePage(options: { editorChoice: string; }): Promise<void> {
        return NM.openEditorChoicePage(options);
    }
    
    search(options: { terms: string; }): Promise<void> {
        return NM.search(options);
    }

}