import { WebPlugin } from '@capacitor/core';

import type { NativeMarketPlugin } from './definitions';

export class NativeMarketWeb extends WebPlugin implements NativeMarketPlugin {
  constructor() {
    super({
      name: 'NativeMarket',
      platforms: ['web'],
    });
  }

  openStoreListing(_options: { appId: string }): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  openDevPage(_options: { devId: string }): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  openCollection(_options: { name: string }): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  openEditorChoicePage(_options: { editorChoice: string }): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  search(_options: { terms: string }): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
}

const NativeMarket = new NativeMarketWeb();

export { NativeMarket };
