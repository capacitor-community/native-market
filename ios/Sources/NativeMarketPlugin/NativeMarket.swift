import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(NativeMarketPlugin)
public class NativeMarket: CAPPlugin, CAPBridgedPlugin {
    public let identifier = "NativeMarket"
    public let jsName = "NativeMarket"
    public let pluginMethods: [CAPPluginMethod] = [
        CAPPluginMethod(name: "openStoreListing", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "openDevPage", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "openCollection", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "openEditorChoicePage", returnType: CAPPluginReturnPromise),
        CAPPluginMethod(name: "search", returnType: CAPPluginReturnPromise)
    ]

    private let implementation = NativeMarket()

    @objc func openStoreListing(_ call: CAPPluginCall) {
        if let appId = call.getString("appId") {
            let url = "itms-apps://itunes.apple.com/app/" + appId
            let appUrl = URL(string: url)

            DispatchQueue.main.async {
                if UIApplication.shared.canOpenURL(appUrl!) {
                    UIApplication.shared.open(appUrl!, options: [:]) { (_) in
                        call.resolve()
                    }
                }
            }
        } else {
            call.reject("appId is missing")
        }
    }

    @objc func openDevPage(_ call: CAPPluginCall) {
        call.resolve() // TODO: Implement
    }

    @objc func openCollection(_ call: CAPPluginCall) {
        call.resolve() // TODO: Implement
    }

    @objc func openEditorChoicePage(_ call: CAPPluginCall) {
        call.resolve() // TODO: Implement
    }

    @objc func search(_ call: CAPPluginCall) {
        if let terms = call.getString("terms") {
            let url = "itms-apps://itunes.apple.com/search?term=" + terms
            let appUrl = URL(string: url)

            if UIApplication.shared.canOpenURL(appUrl!) {
                UIApplication.shared.open(appUrl!, options: [:]) { (_) in
                    call.resolve()
                }
            }
        } else {
            call.reject("terms is missing")
        }
    }

}
