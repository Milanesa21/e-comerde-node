import { connect } from "mongoose";

import { URI } from '../config/conf.js'

export const dbCOnnection = async () => {
    try {
        await connect(URI);
        console.log('Base de datos conectada')
    } catch (err) {
        console.log('Errkr al conectar a a la Base de datos', err);
    }
}