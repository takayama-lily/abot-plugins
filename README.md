# oicq-plugins

[oicq](https://github.com/takayama-lily/oicq) QQ机器人插件制作和收集：

* [oicq-plugin-approve](oicq-plugin-approve) 自动同意好友申请和群邀请 (样例插件)
* ...

----

### 插件开发要点

* 这里插件的意义仅在于重用代码和模块。  
  当他人需要一个类似功能的时候，无需重新编写。  
  因此并无命名和接口等强制限制。
* 有时，插件可能需要考虑处理多个机器人实例并存的情况。  
  当然也可以完全不考虑，声明仅支持单实例。
* 插件被鼓励设计成可以被其他插件所依赖。
* 注意下列代码不要出现在主线程中:
  * 阻塞型代码，例如 `fs.writeFileSync()`，改用回调或 `Promise`
  * CPU密集型计算，建议另开线程或进程
  * 魔改内置对象原型链的代码
  * 运行不受信任的代码

----

### 约定(非强制)

* 插件模块导出 `bind` 为启用函数，接受一个bot实例的参数，并且将自身模块注册到 `bot.plugins`

```js
bot.plugins.add(module);
```

* 插件模块导出 `unbind` 为卸载函数，接受一个bot实例的参数
* 插件卸载时需自己控制释放所占用的资源(例如绑定的事件、监听的端口)，并删除注册模块

```js
bot.plugins.delete(module);
```

* 对任何事件绑定不超过一次

----

### 插件使用控制台命令

```js
const { stdin } = require("oicq");

//启用stdin
stdin.enable();

//注册命令前缀
stdin.registerCommand("/mycmd", function myListener(input) {
  console.log(input)
});

//插件卸载时注销该绑定
stdin.deregisterCommand("/mycmd", myListener);
```
