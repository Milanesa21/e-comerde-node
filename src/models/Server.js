import expres from "expres";
import cors from 'cors';
import morgan from 'morgan';
import { PORT } from '../config/conf.js';
import productRoutes from '../routes/productos.routes.js';
import { dbCOnnection } from '../db/connection.js'

class Server {

    constructor(){
        this.app = expres()
        this.port = PORT;

        this.dbCOnnection();

        this.middlewares();
        this.routes();
    }


    async dbCOnnection(){
        await dbCOnnection()
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(morgan('dev'));
        this.app.use(express.json());
    }

    routes(){
        this.app.use('/api', productRoutes)
    }

    listen(){
        this.app.lisen(this.port, () => console.log(`Server on http://127.0.0.1:${this.port}`))
    }
}

export default Server