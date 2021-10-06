export interface NativeMarketPlugin {
  openStoreListing(options: { appId: string }): Promise<void>;
  openDevPage(options: { devId: string }): Promise<void>;
  openCollection(options: { name: string }): Promise<void>;
  openEditorChoicePage(options: { editorChoice: string }): Promise<void>;
  search(options: { terms: string }): Promise<void>;
}
