"use strict"
const path = require("path")
const fs = require("fs")

let filepath = path.join(__dirname, "../config.json")

try {
    var config = fs.readFileSync(filepath)
} catch {
    filepath = path.join(require.main.path, "../data/plugins/database/config.json")
    config = fs.readFileSync(filepath)
}

config = JSON.parse(config)
const options = config[config.using]
console.log("数据库配置：", options)
const db = require("./" + options.driver) //driver需要实现三个方法：connect, disconnect, save
db.connect(options)

function activate(bot) {
    bot.on("message", db.save)
    bot.on("request", db.save)
    bot.on("notice", db.save)
    bot.on("system", db.save)
}
function deactivate(bot) {
    bot.off("message", db.save)
    bot.off("request", db.save)
    bot.off("notice", db.save)
    bot.off("system", db.save)
}

function destructor() {
    return db.disconnect()
}

module.exports = {
    activate, deactivate, destructor
}
