#user-list

### 先安装dva-cli
````
npm i dva-cli -g

````
###  创建应用

````
 dva new [name]创建项目名称
 
 cd [name]进入项目目录
 
````
### 配置antd和babel-plugin-import

````
 npm i antd --save
 
 npm i babel-plugin-import --save-dev
 
 ````
### 修改 .roadhogrc  在"extraBabelPlugins" 里追加 ["import",{"libraryName":"antd","style":"css"}]

````
      例如：

      "extraBabelPlugins": [
        "transform-runtime",
        ["import",{"libraryName":"antd","style":"css"}]
      ]
````

### 配置代理 

> 修改 .roadhogrc文件末尾配置 'proxy' 参数项

````
"proxy": {
  "/api": {
    "target": "http://jsonplaceholder.typicode.com/",
    "changeOrigin": true,
    "pathRewrite": { "^/api" : "" }
  }
}
````
### 启动应用

````
 npm start
 
````

### 访问 http://localhost:8000/api/users


### 生成users路由

````
dva g route users

访问 http://localhost:8000/#/users

````


















