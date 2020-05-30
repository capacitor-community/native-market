import { WebPlugin } from '@capacitor/core';
import { NativeMarketPlugin } from './definitions';

export class NativeMarketWeb extends WebPlugin implements NativeMarketPlugin {
  constructor() {
    super({
      name: 'NativeMarket',
      platforms: ['web']
    });
  }

  openStoreListing(options: { appId: string; }): Promise<void> {
    console.warn(options);
    throw new Error("Method not implemented.");
  }
  
  openDevPage(options: { devId: string; }): Promise<void> {
    console.warn(options);
    throw new Error("Method not implemented.");
  }

  openCollection(options: { name: string; }): Promise<void> {
    console.warn(options);
    throw new Error("Method not implemented.");
  }

  openEditorChoicePage(options: { editorChoice: string; }): Promise<void> {
    console.warn(options);
    throw new Error("Method not implemented.");
  }

  search(options: { terms: string; }): Promise<void> {
    console.warn(options);
    throw new Error("Method not implemented.");
  }

  
}

const NativeMarket = new NativeMarketWeb();

export { NativeMarket };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(NativeMarket);
