const express=require('express');
const session=require('express-session');
const cookieParser=require('cookie-parser');
const app=express();
const PORT=3000;
app.use(cookieParser());
app.use(session({
    secret:"mysecretkey",
    resave:false,
    saveUninitialized:true,
}));
app.get('/',(req,res)=>{
    if(req.session.views){
        req.session.views++;
        res.send(`visited ${req.session.views} times.`);
    } else {
        req.session.views=1;
        res.send("Welcome! First visit");
    }
});