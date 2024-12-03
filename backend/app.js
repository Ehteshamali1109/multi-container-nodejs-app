const express=require('express');
const mongoose=require('mongoose');
const app=express();
const port=3000;

mongoose.connect('mongodb://mongo:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(() => console.log('Connected to Mongodb'))
.catch(err => console.error('Could not connect to MongoDB',err));


app.get('/',(req,res)=>{
    res.send('Hello Docker');
})

app.listen(port,()=>{
    console.log(`App listening at http://localhost:${port}`)
})