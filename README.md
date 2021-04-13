# oicq-plugins

[oicq](https://github.com/takayama-lily/oicq) QQ机器人插件制作和收集

* [oicq-plugin-approve](oicq-plugin-approve) 自动同意好友申请和群邀请 (样例插件)
* ...

**注意事项，下列代码不要出现在主线程中:**

* 阻塞型代码，例如 `fs.writeFileSync()`，改用回调或 `Promise`
* CPU密集型计算，建议另开线程或进程
* 魔改内置对象原型链的代码
* 运行不受信任的代码
