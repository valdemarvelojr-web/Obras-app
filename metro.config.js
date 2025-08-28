// metro.config.js
const { getDefaultConfig } = require('@expo/metro-config');
const exclusionList = require('metro-config/src/defaults/exclusionList');

const config = getDefaultConfig(__dirname);

// Ignorar pastas muito grandes dentro de node_modules
config.resolver.blockList = exclusionList([
  /node_modules\/react-native-web\/dist\/vendor\/.*/,
]);

module.exports = config;
