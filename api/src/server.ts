import express, { Request, Response, NextFunction } from "express";
import "express-async-errors"
import cors from "cors"
import http from "http"
import { router } from "./routes"


const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

app.get('/test', async (req, res) => {
    res.send('oi')
})

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    //verificando se o erro é uma instancia da classe Error se for retorna um Status
    if (err instanceof Error) {
        return response.status(400).json({
            error: err.message
        });
    }
    return response.status(500).json({
        status: "error",
        message: "erro interno"
    });
})



const serverHttp = http.createServer(app)

export {serverHttp}