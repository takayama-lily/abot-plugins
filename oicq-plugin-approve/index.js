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
    bot.on("request.friend.add", approveFriend);
    bot.on("request.group.invite", approveGroup);
}
function unbind(bot) {
    bot.off("request.friend.add", approveFriend);
    bot.off("request.group.invite", approveGroup);
}

module.exports = { bind, unbind };
