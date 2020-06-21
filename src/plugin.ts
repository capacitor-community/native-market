import { Plugins } from "@capacitor/core";
import { NativeMarketPlugin as NMPlugin } from "./definitions";

const { NativeMarket: NativeMarketPlugin } = Plugins;

export class NativeMarket implements NMPlugin {
  openStoreListing(options: { appId: string }): Promise<void> {
    return NativeMarketPlugin.openStoreListing(options);
  }

  openDevPage(options: { devId: string }): Promise<void> {
    return NativeMarketPlugin.openDevPage(options);
  }

  openCollection(options: { name: string }): Promise<void> {
    return NativeMarketPlugin.openCollection(options);
  }

  openEditorChoicePage(options: { editorChoice: string }): Promise<void> {
    return NativeMarketPlugin.openEditorChoicePage(options);
  }

  search(options: { terms: string }): Promise<void> {
    return NativeMarketPlugin.search(options);
  }
}
