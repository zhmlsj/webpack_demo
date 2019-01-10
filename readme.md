## 先下载安装 webpack

```
npm init -y (先初始化项目)
npm install webpack@3.0.0 --save-dev
```

> 安装 webpack 或者 less 最好不要安装全局的，否则可能导致 webpack 的版本差异

- 在 package.json 中配置一个脚本， 这个脚本用的命令是 webpack。会去当前的 node_modules 下找 bin 对应的 webpack 名字让其执行，执行的就是 bin/webpack.js，webpack.js 需要当前目录下有个名字叫 webpack.config.js 的文件，我们通过 npm run build 执行的目录就是当前文件的目录， 所以会去当前目录下查找

## babel 转译 es6->es5

- 安装 beel

```
npm install babel-core --save-dev
npm install babel-loader --save-dev
```

## babel-preset-es2015

- 让翻译官拥有解析 es6 语法的功能

```
npm install babel-preset-es2015 --save-dev

```

> 官方推荐用 babel-preset-env

创建.babelrc 配置好

```
安装后发现不能编译 于是 安装了bable-loader7.x和babel6.x
npm install babel-loader@7.x babel-core babel-preset-env webpack@3.6.x
还是不能编译
-------
发现问题所在 test: /\*.js$/  改成   test: /\.js$/ 就可以编译啦
```

##module 里面都要相对应配置

## babel-preset-stage-0

- 解析 es7 语法的

```
npm install babel-preset-stage-0 --save-dev
```

## 解析样式

- css-loader 讲 css 解析成模块,讲解析的内容插入到 style 标签内（style-loader）

```
npm install css-loader style-loader --save-dev
```

## less,sass,stylus(预处理语言)

- less-loader less css-loader style-loader
- sass-loader
- stylus-loader

```
npm install less less-loader --save-dev
```

## 解析图片

- file-loader url-loader(是依赖于 file-loader)

```
npm install file-loader url-loader --save-dev
```

- use: ["url-loader?limit=8192"]
- 转化 base64 只在 8192 字节以下转化，其他情况输出图片

## 需要解析 html 插件

- 插件的作用是以我们自己的 html 为模板，讲打包后的结果自动引入 html 中，产出到 dist 目录下

```
npm install html-webpack-plugin --save-dev
```

## webpack-dev-server

- 这里面内置了服务，可以帮我们启动一个端口号，当代码更新时，可以自动打包（内存中打包），代码有变化就重新执行
- 要相对应 webpack 的版本， webpack3.x 这里就安装 webpack-dev-server@2.9.6 的版本

```
npm install webpack-dev-server@2.9.6  --save-dev
```
