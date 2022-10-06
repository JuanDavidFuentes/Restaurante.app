import express from 'express';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import { dbConnection } from '../database/config.js'

class Server {

    constructor() {
        this.app = express();
        this.middlewares();
        this.port = process.env.PORT;
        this.connectarbd();
        // this.routes();
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(cors());
        //this.app.use(express.static('public'));
        this.app.use(fileUpload({
            useTempFiles: true,
            tempFileDir: '/tpm/',
            createParentPath: true
        }));
    }

    async connectarbd() {
        await dbConnection();
    }

    //routes(){
    //
    //}

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Servidor escuchando en el puerto ${this.port}`);
        });
    }
}

export default Server