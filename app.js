const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || '3001';

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/landingpage.html'));
  //__dirname : It will resolve to your project folder.
})

app.listen(port, ()=>{
    console.log(`listening on port : ${port}`);
})