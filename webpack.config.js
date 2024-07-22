const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path")

module.exports = {
    mode: "development" ,
    entry: {
        index: path.resolve(__dirname,"src","entry.js")
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,"src","index.html")
        }) 
    ] ,

    module: {
        rules: [
            {
                test: /\js$/ ,
                exclude: /node_modules/,
                use: ["babel-loader"]
            } ,
            {
                test: /\.(ss|sc|c)ss$/i,
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test: /\.(png|jpg|svg|gif|jpeg)$/,
                use:["file-loader"]
            }
        ]
    } ,
        

    output: {
        path: path.resolve(__dirname,"./dist"),
        filename: "duble.js"
    }
}