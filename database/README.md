# [abot](https://github.com/takayama-lily/abot) 数据库插件

将事件保存到数据库，以供其它插件查询  
暂时只支持mongodb，你可以编写driver来支持其它数据库

* 将文件夹复制到 `plugins` 目录下 (或使用软链接)
* 安装依赖：`npm i mongodb` (建议在abot根目录安装)
* 建立`config.json` (参考`config.sample.json`)
* 启动：`>plug on database`
