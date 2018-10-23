module.exports = {
    entry: "./src/main/webapp/index.tsx",

    mode: "development",

    output: {
        filename: "bundle.js",
        path: __dirname + "/src/main/resources/static"
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"},
        ]
    }
};