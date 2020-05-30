declare module "@capacitor/core" {
  interface PluginRegistry {
    NativeMarket: NativeMarketPlugin;
  }
}

export interface NativeMarketPlugin {
  open(options: { appId: string }): Promise<void>;
  search(options: { terms: string }): Promise<void>;
}
