# webpack_react_Configuration
react基于webpack和babel以及es6的项目搭建
------------------------------

###1.打开命令提示窗口，输入  
mkdir react_test  
cd react_test  
npm  init  

###2.会在文件夹根目录生成package.json文件，同时我们的项目结构如下  
+ app  
index.js  
+ build  
bundle.js(自动生成)
+ index.html  
+ package.json
+ webapck.config.dev.js(开发环境配置)  
+ webpack.config.prod.js(生产环境配置)     
+ server.js(配合webpack启动开发服务，支持热更新)  
+ .babelrc(babel解析es6,react的配置)  


###3.在package.json中配置好我们需要的依赖  
```javascript

"devDependencies": {  
 "babel-core": "^6.9.0",  
 "babel-loader": "^6.2.4",  
 "babel-plugin-react-transform": "^2.0.2",  
 "babel-plugin-rewire": "^1.0.0-rc-3",  
 "babel-plugin-transform-react-constant-elements": "^6.8.0",  
 "babel-plugin-transform-react-inline-elements": "^6.8.0",  
 "babel-plugin-transform-react-remove-prop-types": "^0.2.7",  
 "babel-plugin-transform-runtime": "^6.9.0",  
 "babel-preset-es2015": "^6.9.0",  
 "babel-preset-node5": "^11.1.0",  
 "babel-preset-react": "^6.5.0",  
 "babel-preset-react-hmre": "^1.1.1",  
 "babel-preset-stage-0": "^6.5.0",  
 "css-loader": "^0.23.1",  
 "eslint": "^3.1.0",  
 "eslint-plugin-react": "^5.2.2",  
 "jquery": "^3.1.0",  
 "react-transform-catch-errors": "^1.0.2",  
 "react-transform-hmr": "^1.0.4",  
 "redbox-react": "^1.2.10",  
 "url-loader": "^0.5.7",  
 "webpack": "^1.13.1",  
 "webpack-dev-server": "^1.14.1"  
},

"dependencies": {  
 "react": "latest",  
 "react-dom": "latest"  
}

```
###4.回到项目根目录cmd，输入npm install开始安装依赖，等待依赖安装完成(会自动生成node_modules文件夹，所有依赖模块都安装在其中)  

###5.依赖安装完成开始配置webpack.config.dev.js(开发环境），webpack.config.prod.js(生产环境）  
这份文件大概有四个配置项**entry, output, module, plugins.**  
***entry***:指定打包的入口文件，每有一个键值对，就是一个入口文件。    
***output***：配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称，filename里面的[name]会由entry中的键替换,例子中的/build/bundle.js便是生成的文件。   
*resolve*：定义了解析模块路径时的配置，常用的就是extensions，可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全.    
***module***：定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，就会进行处理。这里我们使用了react-hot 和 babel。babel-loader是我们使用ES-6进行开发时用于生成JS文件。  
最后我们生成了一个style.css仅仅做个例子，告诉我们如何引入样式文件，实际上我们可以加载诸如sass-loader这样的加载器。  
***loader***:对文件进行处理，这正是webpack强大的原因。比如定义了凡是.js结尾的文件都是用babel-loader做处理，而.jsx结尾的文件会先经过jsx-loader处理，然后经过babel-loader处理。当然这些loader也需要通过npm install安装。  
***plugins***: 这里定义了需要使用的插件，比如commonsPlugin在打包多个入口文件时会提取出公用的部分，生成common.js。


###6.单独写一个server.js以搭配webpack-dev-server来启动开发环境服务及热更新代码服务

###7.想要babel解析react，以及es2015，需要添加.babelrc文件，写入配置（也可以不写.babelrc文件，直接把配置写在package.json中）
```json  
{
  "presets": ["react", "es2015"],
  "env": {
    "development": {
       "presets": ["react-hmre"]
     }
   }
}
```

###8.package.json文件下的script属性增加为  
```javascript
"start": "node server.js",   //启动开发环境服务
"build": "webpack --config webpack.config.prod.js --progress --colors" //生产环境打包
```
###9.npm start 启动项目 浏览器输入[http://localhost:3000](http://localhost:3000) 完成
