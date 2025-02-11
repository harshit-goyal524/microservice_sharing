const express = require('express');
const app=express();
app.use(express.json());

app.post('/sqrt',(req,res)=>{
	const number=req.body.number;
	if(typeof number!=='number' || number<0){
		return res.status(400).json({error:'Invalid input'});
	}
	res.json({result:Math.sqrt(number)});
});

app.listen(3001,()=>console.log('Sqaure root service running on port 3001'));
