# oicq-plugin-approve

一个简单的自动同意好友申请和群邀请的插件

```bash
npm i oicq-plugin-approve
```

```js
const approve = require("oicq-plugin-approve");
approve.bind(bot); //启用插件，bot必须是一个机器人实例
approve.unbind(bot); //卸载插件
```

### 不希望从npm安装，可将文件夹下载到本地

```js
const approve = require("./oicq-plugin-approve/index");
```
