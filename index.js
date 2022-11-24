const express=require("express")
const app=express()
const cors=require("cors")
const port=4550;
const bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({
	extended:true
}))
app.use(bodyParser.json())
app.use(cors())
app.get("/",(req,res)=>{
	res.send("hi am server")
})
app.post("/newData",(req,res)=>{
	console.log(req.body)
	const {name,age}=req.body
	console.log("values of",name,age)
})

app.listen(port,()=>console.log("server is started"))