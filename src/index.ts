import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL (update accordingly)
    methods: ['GET', 'POST'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  }))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({msg: "hello herin"})
})

app.listen(3030, () => {
    console.log('server run 3000');
    
})