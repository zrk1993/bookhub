'use strict';
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import path from 'path'
import fs from 'fs'
import { remote, app } from 'electron'

export default {
    data() {
        return {
            db_util: null,
            file_json: ""
        };
    },
    init() {
        let APP = process.type === 'renderer' ? remote.app : app
        let STORE_PATH = APP.getPath('userData')
        //let STORE_PATH = "/Users/sanjin/work/h5/vue/thief-book/static"

        // if (process.type !== 'renderer') {
        //     if (!fs.pathExistsSync(STORE_PATH)) {
        //         fs.mkdirpSync(STORE_PATH)
        //     }
        // }

        // this.file_json = new FileSync(path.join(STORE_PATH, '/data.json'));

        // this.db_util = low(this.file_json)
    },
    get(key) {
        this.init();
        return '' //this.db_util.get(key).value();
    },
    set(key, value) {
        this.init();
        //this.db_util.set(key, value).write();
    }
};