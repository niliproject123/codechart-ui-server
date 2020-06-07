import * as express from 'express'
const _app_folder = 'ui_files'

class App {
    public express
    public fs = require('fs');
    public Path = require('path');

    constructor() {

        let path = this.Path.join(process.cwd(), _app_folder)
        if(!this.fs.existsSync(path)) {
            console.error(`UI folder '${path}' not found`)
            console.error(`The folder should reside in same folder where runnable file is`)
            process.exit();
        }

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

