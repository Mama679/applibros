import express from 'express';
import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!')
})

app.listen(port,()=>{
    console.log(`App escuchando en el puerto ${port}`);
})