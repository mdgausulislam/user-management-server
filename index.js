const express = require('express');
const app = express();
const port =process.env.PORT || 5000;

const cors=require('cors');
app.use(cors());


const user=[
    {id:1,name:'hemonto',email:'gausulislam5@gmail.com'},
    {id:2,name:'hemo',email:'gausulislam500@gmail.com'},
    {id:3,name:'Md Gousul Islam',email:'gausulislam50@gmail.com'}
]

app.get('/', (req, res) => {
    res.send('server Running');
})

app.get('/user',(req,res)=>{
    res.send(user)
})

app.post('/user',(req,res)=>{
    console.log('post api hitting');
    console.log(req.body);
})


app.listen(port,()=>{
    console.log(`Example app listening for port ${port}`);
})