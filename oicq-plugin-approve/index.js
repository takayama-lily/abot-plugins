"use strict";

function approveFriend(data) {
    this.setFriendAddRequest(data.flag);
}
function approveGroup(data) {
    this.setGroupAddRequest(data.flag);
}

/**
 * @param {import("oicq").Client} bot 
 */
function bind(bot) {
    bot.plugins.add(module);
    bot.on("request.friend.add", approveFriend);
    bot.on("request.group.invite", approveGroup);
}

/**
 * @param {import("oicq").Client} bot 
 */
function unbind(bot) {
    bot.plugins.delete(module);
    bot.off("request.friend.add", approveFriend);
    bot.off("request.group.invite", approveGroup);
}

module.exports = { bind, unbind };
