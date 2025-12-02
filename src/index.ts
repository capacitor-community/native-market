import { registerPlugin } from '@capacitor/core';

import type { NativeMarketPlugin } from './definitions';

const NativeMarket = registerPlugin<NativeMarketPlugin>('NativeMarket', {
  web: () => import('./web').then((m) => new m.NativeMarketWeb()),
});

export * from './definitions';
export { NativeMarket };
