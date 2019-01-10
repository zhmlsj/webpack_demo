// webpack 必须采用commonjs写法
let path = require("path"); // 专门处理路径用的
// path.resolve('./dist') //以当前路径解析出一个绝对路径
// console.log(path.resolve("./dist"));

let HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  // 打包的入口文件，webpack会自定查找相关的依赖进行打包
  output: {
    filename: "bundle.js",
    // 打包后的名字
    path: path.resolve(__dirname, "dist")
    // path: path.resolve("./dist") // 必须是绝对路径
    // path: __dirname + "/dist" // 必须是绝对路径
  },
  // 模块的解析规则
  //  -js 匹配所有的js 用babel-loader转译 排除掉node_modules
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env", "react"]
          }
        }
      },
      // use 从右往左写
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: ["url-loader?limit=8192"]
        // 转化base64 只在8192字节以下转化，其他情况输出图片
      },
      {
        test: /\.(eot|svg|woff|woff2|wtf)$/,
        use: ["url-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
      // filename: "login.html"
    })
  ]
};

// 多入口打包
// module.exports = {
//   entry: {
//     main: "./src/main.js",
//     main1: "./src/main1.js"
//   },
//   // 打包的入口文件，webpack会自定查找相关的依赖进行打包
//   output: {
//     filename: "[name].js",
//     // 打包后的名字
//     path: path.resolve("./dist") // 必须是绝对路径
//   }
// };
