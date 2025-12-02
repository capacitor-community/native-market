import { WebPlugin } from '@capacitor/core';

import type { NativeMarketPlugin } from './definitions';

export class NativeMarketWeb extends WebPlugin implements NativeMarketPlugin {
  async openStoreListing(_options: { appId: string }): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async openDevPage(_options: { devId: string }): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async openCollection(_options: { name: string }): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async openEditorChoicePage(_options: { editorChoice: string }): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }

  async search(_options: { terms: string }): Promise<void> {
    throw this.unimplemented('Not implemented on web.');
  }
}
