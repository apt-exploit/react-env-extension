const multipleEntry = require("react-app-rewire-multiple-entry")([
  {
    entry: "src/popup/index.js",
    template: "public/popup.html",
    outPath: "/popup.html",
  },
  {
    entry: "src/options/index.js",
    template: "public/index.html",
    outPath: "/index.html",
  },
]);

module.exports = {
  webpack: function (config) {
    multipleEntry.addMultiEntry(config);
    return config;
  },
};
