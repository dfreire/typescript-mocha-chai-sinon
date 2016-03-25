module.exports = {
    entry: "./test/index_test.ts",
    output: {
        filename: "./dist/tests.js",
    },
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    externals: {
    }
};
