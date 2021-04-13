# oicq-plugin-hotokoto

### 每日一言 ~~才不是网抑云~~

![demo](./demo.png)

```bash
npm i oicq-plugin-hotokoto
```

- hitokoto(bot[, groups])
  + bot 为机器人实例，groups 可选参数，默认所有群列表

### 简单示例

```javascript
const hitokoto = require('oicq-plugin-hotokoto');

hitokoto(bot);
```

若需要定时发送，可以使用 node-schedule

### 进阶示例

```javascript
const schedule = require('node-schedule');
const hitokoto = require('oicq-plugin-hotokoto');

// 自定义发送
const groups = new Map([
  [123456789, '群聊信息'],
  [987654321, '群聊信息'],
]);

// 定时器
schedule.scheduleJob('0 0 0 * *', () => {
  hitokoto(bot, groups);
});
```