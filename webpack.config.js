const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // mode属性是webpack4.0以后新添加的属性
    mode:'development',
    entry:'./main.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,//匹配以.css结尾的文件
                use: ['style-loader','css-loader']
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader']
            },
            {
                test:/\.(png|jpg|gif|jpeg|webp)$/,
                use:[{
                    loader:'file-loader',
                    options:{
                        name:'[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins:[new HtmlWebpackPlugin({template:"index.html"})],
    devServer:{}
}