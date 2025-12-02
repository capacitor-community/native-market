# Capacitor Native Market Plugin

Capacitor community plugin for native market for Play Store/App Store.

**Note:** The plugin doesn't work on iOS Simulator because it doesn't have App Store app installed.
It works on Android Virtual Devices if they have Google Play installed with a user logged in.

Maintenance Status: Actively Maintained

## Plugin versions

| Capacitor version | Plugin version |
| ----------------- | -------------- |
| 7.x               | 7.x            |
| 6.x               | 6.x            |
| 5.x               | 5.x            |
| 4.x               | 4.x            |
| < 3.x             | 0.1.x          |

## Install

```bash
npm install @capacitor-community/native-market
npx cap sync
```

## Configuration

No configuration required for this plugin

## Supported methods

| Name                 | Android | iOS | Web |
| :------------------- | :------ | :-- | :-- |
| openStoreListing     | ✅      | ✅  | ❌  |
| openDevPage          | ✅      | ❌  | ❌  |
| openCollection       | ✅      | ❌  | ❌  |
| openEditorChoicePage | ✅      | ❌  | ❌  |
| search               | ✅      | ✅  | ❌  |

<docgen-index>

* [`openStoreListing(...)`](#openstorelisting)
* [`openDevPage(...)`](#opendevpage)
* [`openCollection(...)`](#opencollection)
* [`openEditorChoicePage(...)`](#openeditorchoicepage)
* [`search(...)`](#search)

</docgen-index>

## Example

```typescript
import { NativeMarket } from "@capacitor-community/native-market";
import { Capacitor } from "@capacitor/core";

/**
 * This method will launch link in Play/App Store.
 * @param appId - ID of your application.
 * Eg:
 * io.ionic.ioniconf on Android
 * id1622127552 on iOS
 * @returns void
 */
let appId = "id1622127552";
if (Capacitor.getPlatform() === "android") {
  appId = "io.ionic.ioniconf";
}
NativeMarket.openStoreListing({
  appId: appId,
});

/**
 * This method will deep-link directly to an Play/App store listing page.
 * @param devId - ID of developer. Eg. com.example.app
 * @returns void
 */
NativeMarket.openDevPage({
  devId: "5700313618786177705",
});

/**
 * This method will link users to a collection or top charts.
 * @param name - name of the collection. Click [here](https://developer.android.com/distribute/marketing-tools/linking-to-google-play#OpeningCollection) for android options.
 * @returns void
 */
NativeMarket.openCollection({
  name: "featured",
});

/**
 * This method will link users to Editor's choice page.
 * @param editorChoice - ID of your application. Eg. editorial_fitness_apps_us
 * @returns void
 */
NativeMarket.openEditorChoicePage({
  editorChoice: "editorial_fitness_apps_us",
});

/**
 * This method will link users to custom search query.
 * @param editorChoice - terms to be searched in Play/App store.
 * @returns void
 */
NativeMarket.search({
  terms: "capacitor",
});
```

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### openStoreListing(...)

```typescript
openStoreListing(options: { appId: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ appId: string; }</code> |

--------------------


### openDevPage(...)

```typescript
openDevPage(options: { devId: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ devId: string; }</code> |

--------------------


### openCollection(...)

```typescript
openCollection(options: { name: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ name: string; }</code> |

--------------------


### openEditorChoicePage(...)

```typescript
openEditorChoicePage(options: { editorChoice: string; }) => Promise<void>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ editorChoice: string; }</code> |

--------------------


### search(...)

```typescript
search(options: { terms: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ terms: string; }</code> |

--------------------

</docgen-api>
