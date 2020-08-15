const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./builder/src/app.js",
    output: {
        path: path.resolve(__dirname, "..", ".."),
        filename: "bundle/app.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./builder/src/index.html",
            filename: "index.html"
        })
    ]
}
