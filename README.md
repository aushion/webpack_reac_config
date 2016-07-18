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
+ webapck.config.dev.js  
+ server.js  
+ .babelrc  
+ README.md    

###3.在package.json中配置好我们需要的依赖  
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
},

###4.回到项目根目录cmd，输入npm install开始安装依赖，等待依赖安装完成(会自动生成node_modules文件夹，所有依赖模块都安装在其中)  

###5.依赖安装完成开始配置webpack.config.dev.js(开发环境），webpack.config.prod.js(生产环境）  
主要是三个陪配置:entry(入口文件)，output(编译后的输出文件)，loaders(编译规则)

###6.单独写一个server.js以搭配webpack-dev-server来启动开发环境服务及热更新代码服务

###7.想要babel接卸react，以及es2015，需要添加.babelrc文件，写入配置

###8.package.json文件下的script属性增加为  
"start": "node server.js",   
"build": "webpack "

###9.npm start 启动项目 浏览器输入http://localhost:3000 完成

