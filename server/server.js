import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() =>{
    console.log('Connected to MongoDB');
}).catch((err) =>{
    console.log('Error connecting to MongoDB:', err);
});

app.get('/', (req,res)=>{
    res.send('API is working!');
});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})