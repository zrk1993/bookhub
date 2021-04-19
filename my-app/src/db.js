'use strict';
var lowdb = require('lowdb')
var FileSync = require('lowdb/adapters/FileSync')
var path = require('path')
var fs = require('fs-extra')
var electron =require('electron')

var db_util = null

module.exports = {
    init() {
        if (db_util) {
            return
        }
        let APP = process.type === 'renderer' ? electron.remote.app : electron.app
        let STORE_PATH = APP.getPath('userData')

        if (process.type !== 'renderer') {
            if (!fs.pathExistsSync(STORE_PATH)) {
                fs.mkdirpSync(STORE_PATH)
            }
        }

        this.file_json = new FileSync(path.join(STORE_PATH, '/data.json'));

        this.db_util = lowdb(this.file_json)
    },
    get(key) {
        this.init();
        return this.db_util.get(key).value();
    },
    set(key, value) {
        this.init();
        this.db_util.set(key, value).write();
    }
}

