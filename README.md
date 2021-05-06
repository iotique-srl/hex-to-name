<p align="center">
  <img src="https://static.igloo.ooo/logo-192.png" alt="Igloo logo" width="128"/>
</p>

<h1 align="center">Hex to name</h1>

Convert a hexadecimal code to the name of the closest match in a short and curated list of human readable colors.

Color names are currently available in the following languages:

- English
- Italian

# Installation

Just download the library from [npm](https://www.npmjs.com/package/@igloo_cloud/hex-to-name).

**Using npm**

```bash
npm install @igloo-cloud/hex-to-name --save
```

**Using Yarn**

```bash
yarn add @igloo-cloud/hex-to-name
```

# Usage

```
const hexToName = new HexToName('en') // Set english as the default language

hexToName.convert('#ff0000') // Red
```
