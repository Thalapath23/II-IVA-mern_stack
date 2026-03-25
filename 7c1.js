 const express = require('express');
const app = express();
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index',{name: 'all students'});
});
app.listen(8000, () => {
    console.log(`Server running on port 8000`);
});
//use this comand in terminal
//npm install EXPRESS js
//and also create views folder in the same folder
//create a index.ejs which contains html code
//http://localhost:8000/