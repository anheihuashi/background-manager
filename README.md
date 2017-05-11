信托视频面签标准版前端项目
===

使用方法
===
1. clone 至本地，定位至项目目录
1. 执行 `bower install && npm install` 安装依赖
1. 运行 `gulp`

注意：确保本地有全局安装的 gulp，如果没有，请先安装：
```
npm install -g gulp
```

外部依赖（app/js/lib）
===
1.  bootstrap.min.js       
2.  handlebars-1.0.0.js
3.  html5shiv.min.js   //解决IE识别H5标签
4.  icheck.js    //checkbox,radio个性化样式
5.   jquery.pagination.js，jquery.mousewheel.min.js //分页插件
6.  dialog.js    //自己简单的封装了下bootstrap里面的modal，弄成公共方法。


源码结构
===
```
./app
|-- api                # => 模拟请求数据
|-- css
|-- img
|-- js
| 	  |-- controllers    # => 逻辑控制器，负责控制页面上所有数据、界面的交互
| 	  |-- libs           # => 库文件
| 	  |-- tool         # => 一些公共的工具方法
| 	  |-- views          # => 关于界面交互的方法，主要是 DOM 操作
|	  |-- app.js         # => 核心 JS，实例化并配置主框架，路由的入口也在这
|-- pages           # => 页面html放的位置
|-- index.html         # => 首页，也是整个项目的入口
./scss
|-- components    # => 组件样式
|-- page               # =>页面样式
```