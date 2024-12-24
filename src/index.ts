import express from 'express';
import cors from 'cors';

const app = express()
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your React app's URL
  }))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({msg: "hello herin"})
})

app.listen(3030, () => {
    console.log('server run 3000');
    
})