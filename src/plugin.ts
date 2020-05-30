import { Plugins } from '@capacitor/core';
import { NativeMarketPlugin as NMPlugin } from './definitions';

const { NativeMarketPlugin } = Plugins;

export class NativeMarket implements NMPlugin {
    open(options: { appId: string; }): Promise<void> {
        return NativeMarketPlugin.open(options);
    }
    search(options: { terms: string; }): Promise<void> {
        return NativeMarketPlugin.search(options);
    }

}