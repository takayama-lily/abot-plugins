const axios = require('axios');

const url = 'https://v1.hitokoto.cn/';
const params = '?c=a&c=b&c=c';

/**
 * 若要定时发送可以使用 node-schedule
 * 关于 hiokoto 相关参数可访问 https://hitokoto.cn/usage
 * 
 * @param {import("oicq").Client} bot - bot instantiate object
 * @param {Map()} [groups=bot.gl] - group's id
 */
module.exports = (bot, groups = bot.gl) => {
  axios.get(`${url}${params}`)
    .then(response => {
      const { data: { hitokoto, from } } = response;

      groups.forEach((value, key) => {
        bot.sendGroupMsg(key, `${hitokoto}\n\t\t\t\t———— 「${from}」`);
      });
    })
    .catch(error => {
      bot.logger.error(error.message);
    })
}