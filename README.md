# Capacitor Native Market Plugin

Capacitor community plugin for native market for Play Store/App Store.

## Maintainers

| Maintainer    | GitHub                                      | Social                                           | Sponsoring Company |
| ------------- | ------------------------------------------- | ------------------------------------------------ | ------------------ |
| Priyank Patel | [priyankpat](https://github.com/priyankpat) | [@priyankpat\_](https://twitter.com/priyankpat_) | Ionic              |

Maintenance Status: Actively Maintained

## Plugin versions

| Capacitor version | Plugin version |
| ----------------- | -------------- |
| 5.x               | 5.x            |
| 4.x               | 4.x            |
| < 3.x             | 0.1.x          |

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

## Usage

```typescript
import { NativeMarket } from "@capacitor-community/native-market";

/**
 * This method will launch link in Play/App Store.
 * @param appId - ID of your application. Eg. com.example.app
 * @returns void
 */
NativeMarket.openStoreListing({
  appId: "com.example.app",
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
