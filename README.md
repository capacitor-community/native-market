# Capacitor Native Market Plugin

Capacitor community plugin for native market for Play Store/App Store.

## Maintainers

| Maintainer | GitHub | Social | Sponsoring Company |
| -----------| -------| -------| -------------------|
| Priyank Patel | [priyankpat](https://github.com/priyankpat) | [@priyankpat_](https://twitter.com/priyankpat_) | Ionic |

Maintenance Status: Actively Maintained

## Installation

To use npm

```bash
npm install @capacitor-community/native-market
```

To use yarn

```bash
yarn add @capacitor-community/native-market
```

Sync native files

```bash
npx cap sync
```

iOS Platform: No further action required.

Android Platform: Register the plugin in your main activity:

```java
import com.getcapacitor.community.nativemarket.NativeMarket;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);
      add(NativeMarket.class);
    }});
  }
}
```

## Configuration

No configuration required for this plugin

## Supported methods

| Name  | Android | iOS | Web
| :---- | :------: | :--- | :--- | :--- | :--- | :--- |
| openStoreListing | ✅ | ✅ | ❌
| openDevPage | ✅ | ❌ | ❌
| openCollection | ✅ | ❌ | ❌
| openEditorChoicePage | ✅ | ❌ | ❌
| search | ✅ | ✅ | ❌

## Usage

```typescript
import { NativeMarket } from 'native-market';

const nativeMarket = new NativeMarket();

/**
 * This method will launch link in Play/App Store.
 * @param appId - ID of your application. Eg. com.example.app
 * @returns void
 */
nativeMarket.openStoreListing({
  appId: 'com.example.app',
});

/**
 * This method will deep-link directly to an Play/App store listing page.
 * @param devId - ID of developer. Eg. com.example.app
 * @returns void
 */
nativeMarket.openDevPage({
  devId: '5700313618786177705',
});

/**
 * This method will link users to a collection or top charts.
 * @param name - name of the collection. Click [here](https://developer.android.com/distribute/marketing-tools/linking-to-google-play#OpeningCollection) for android options.
 * @returns void
 */
nativeMarket.openCollection({
  name: 'featured',
});

/**
 * This method will link users to Editor's choice page.
 * @param editorChoice - ID of your application. Eg. editorial_fitness_apps_us
 * @returns void
 */
nativeMarket.openEditorChoicePage({
  editorChoice: 'editorial_fitness_apps_us',
});

/**
 * This method will link users to custom search query.
 * @param editorChoice - terms to be searched in Play/App store.
 * @returns void
 */
nativeMarket.search({
  terms: 'capacitor',
});
```
