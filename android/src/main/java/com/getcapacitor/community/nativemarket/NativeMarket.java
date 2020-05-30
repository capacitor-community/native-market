package com.getcapacitor.community.nativemarket;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;

import com.getcapacitor.JSObject;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;

@NativePlugin()
public class NativeMarket extends Plugin {

    @PluginMethod()
    public void open(PluginCall call) {
        try {
            if (call.hasOption("appId")) {
                String appId = call.getString("appId");

                Context context = this.getContext();
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("market://details?id" + appId));
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                context.startActivity(intent);

                call.success();
            } else {
                call.reject("appId is missing");
            }
        } catch (Exception ex) {
            call.error(ex.getLocalizedMessage());
        }
    }

    @PluginMethod()
    public void search(PluginCall call) {
        try {
            if (call.hasOption("terms")) {
                String terms = call.getString("terms");

                Context context = this.getContext();
                Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("market://search?q=" + terms));
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                context.startActivity(intent);

                call.success();
            } else {
                call.reject("terms is missing");
            }
        } catch (Exception ex) {
            call.error(ex.getLocalizedMessage());
        }
    }
}
