package com.getcapacitor.community.nativemarket;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import com.getcapacitor.NativePlugin;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

@CapacitorPlugin(name = "NativeMarket")
public class NativeMarket extends Plugin {

  @PluginMethod
  public void openStoreListing(PluginCall call) {
    try {
      if (call.hasOption("appId")) {
        String appId = call.getString("appId");

        Context context = this.bridge.getActivity().getApplicationContext();
        Intent intent = new Intent(
          Intent.ACTION_VIEW,
          Uri.parse("market://details?id=" + appId)
        );
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);

        call.resolve();
      } else {
        call.reject("appId is missing");
      }
    } catch (Exception ex) {
      call.error(ex.getLocalizedMessage());
    }
  }

  @PluginMethod
  public void openDevPage(PluginCall call) {
    try {
      if (call.hasOption("devId")) {
        String devId = call.getString("devId");

        Context context = this.getContext();
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(
          Uri.parse("https://play.google.com/store/apps/dev?id=" + devId)
        );
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);

        call.resolve();
      } else {
        call.reject("devId is missing");
      }
    } catch (Exception ex) {
      call.error(ex.getLocalizedMessage());
    }
  }

  @PluginMethod
  public void openCollection(PluginCall call) {
    try {
      if (call.hasOption("name")) {
        String name = call.getString("name");

        Context context = this.getContext();
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(
          Uri.parse("https://play.google.com/store/apps/collection/" + name)
        );
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);

        call.resolve();
      } else {
        call.reject("name is missing");
      }
    } catch (Exception ex) {
      call.error(ex.getLocalizedMessage());
    }
  }

  @PluginMethod
  public void openEditorChoicePage(PluginCall call) {
    try {
      if (call.hasOption("editorChoice")) {
        String editorChoice = call.getString("editorChoice");

        Context context = this.getContext();
        Intent intent = new Intent(Intent.ACTION_VIEW);
        intent.setData(
          Uri.parse(
            "https://play.google.com/store/apps/topic?id=" + editorChoice
          )
        );
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);

        call.resolve();
      } else {
        call.reject("editorChoice is missing");
      }
    } catch (Exception ex) {
      call.error(ex.getLocalizedMessage());
    }
  }

  @PluginMethod
  public void search(PluginCall call) {
    try {
      if (call.hasOption("terms")) {
        String terms = call.getString("terms");

        Context context = this.getContext();
        Intent intent = new Intent(
          Intent.ACTION_VIEW,
          Uri.parse("market://search?q=" + terms)
        );
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        context.startActivity(intent);

        call.resolve();
      } else {
        call.reject("terms is missing");
      }
    } catch (Exception ex) {
      call.error(ex.getLocalizedMessage());
    }
  }
}
