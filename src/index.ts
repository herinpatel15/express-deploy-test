import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({msg: "hello herin"})
})

app.listen(3000, () => {
    console.log('server run 3000');
    
})