#import <Foundation/Foundation.h>
#import <Capacitor/Capacitor.h>

// Define the plugin using the CAP_PLUGIN Macro, and
// each method the plugin supports using the CAP_PLUGIN_METHOD macro.
CAP_PLUGIN(NativeMarket, "NativeMarket",
           CAP_PLUGIN_METHOD(openStoreListing, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(openDevPage, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(openCollection, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(openEditorChoicePage, CAPPluginReturnPromise);
           CAP_PLUGIN_METHOD(search, CAPPluginReturnPromise);
)
