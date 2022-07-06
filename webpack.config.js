const path = require("path")

module.exports = {
    entry: "./src/app/index.js",
    mode: "development",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
}