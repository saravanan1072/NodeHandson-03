const express=require('express');
const app=express();

const calculation=require('./controller/calculation')

const cors=require('cors');

const middleware=(req,res,next)=>{
    console.log('ho')
    let result=calculation(2,4);
    if(result===6){
        next()
    }
    else{

        res.send("sorry axcess cannot provide")
    }
}

const whitelist=["*"];
app.use(
    cors({
        origin:whitelist,
        methods:["get","post"]
    })
)

app.get("/",(rer,res)=>{
    res.send("working")
    res.end()
})
app.get("/cors",cors(),(req,res)=>{
    res.send("cors is permitted")
    res.end()
})

app.get("/middle",middleware,(req,res)=>{
    res.send("middleware is permitted")
    res.end()
})



app.listen(3001)