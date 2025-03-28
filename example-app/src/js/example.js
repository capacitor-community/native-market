import { NativeMarket } from '@capacitor-community/native-market';

window.openStoreListing = () => {
    let appId = "id1622127552";
    if (Capacitor.getPlatform() === "android") {
      appId = "io.ionic.ioniconf";
    }
    NativeMarket.openStoreListing({
      appId: appId,
    });
}
