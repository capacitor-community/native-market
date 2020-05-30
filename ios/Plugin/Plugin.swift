import Foundation
import Capacitor

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitor.ionicframework.com/docs/plugins/ios
 */
@objc(NativeMarket)
public class NativeMarket: CAPPlugin {
    
    @objc func open(_ call: CAPPluginCall) {
        if call.hasOption("appId") {
            let appId = call.getString("appId")
            
            let url = "itms-apps://itunes.apple.com/app/" + appId!
            let appUrl = URL(string: url)
            
            if UIApplication.shared.canOpenURL(appUrl!) {
                if #available(iOS 10.0, *) {
                    UIApplication.shared.open(appUrl!, options: [:]) { (success) in
                        call.success()
                    }
                } else {
                    UIApplication.shared.openURL(appUrl!)
                    call.success()
                }
            }
        } else {
            call.reject("appId is missing")
        }
    }
    
    @objc func search(_ call: CAPPluginCall) {
        if call.hasOption("terms") {
            let terms = call.getString("terms")
            
            let url = "itms-apps://itunes.apple.com/search?term=" + terms!
            let appUrl = URL(string: url)
            
            if UIApplication.shared.canOpenURL(appUrl!) {
                if #available(iOS 10.0, *) {
                    UIApplication.shared.open(appUrl!, options: [:]) { (success) in
                        call.success()
                    }
                } else {
                    UIApplication.shared.openURL(appUrl!)
                    call.success()
                }
            }
        } else {
            call.reject("terms is missing")
        }
    }
}
