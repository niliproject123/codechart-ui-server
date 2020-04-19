var path = require('path');
import * as express from 'express'
const _app_folder = 'dist_ui'

class App {
    public express
    constructor() {
        this.express = express()
        const router = express.Router()
        router.get('*.*', express.static(_app_folder, { maxAge: '1y' }));
        // ---- SERVE APLICATION PATHS ---- //
        router.all('*', function (req, res) {
            res.status(200).sendFile(`/`, { root: _app_folder });
        });
        this.express.use('/', router)
        console.log('started app')
    }

}

export default new App().express

