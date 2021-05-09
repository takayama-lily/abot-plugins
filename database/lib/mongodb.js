const mongo = require("mongodb")

/**
 * @type {mongo.MongoClient}
 */
let client

/**
 * @type {mongo.Db}
 */
let db

let collection = ""

function connect(options) {
    if (!client) {
        let auth = undefined
        if (options.username) {
            auth = {
                user: options.username,
                password: options.password
            }
        }
        client = new mongo.MongoClient(
            `mongodb://${options.host}:${options.port}`,
            { useUnifiedTopology: true, auth }
        )
    }
    client.connect()
        .then(() => {
            console.log("mongodb connected!")
            db = client.db(options.database)
            collection = options.collection
        })
        .catch(data => {
            console.error("mongodb连接失败: " + data.message)
        })
}

function disconnect() {
    if (client.isConnected()) {
        console.log("mongodb disconnected!")
        return client.close(true)
    }
}

/**
 * @this {import("oicq").Client}
 * @param {import("oicq").EventData} data 
 */
function save(data) {
    if (!client.isConnected() || !db) {
        this.logger.debug("插件database - 未连接到mongodb数据库")
        return
    }
    this.logger.debug("插件database - 事件已保存到mongodb数据库")
    db.collection(collection).insertOne(data)
}

module.exports = {
    connect, disconnect, save
}
