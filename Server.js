const express = require('express'); 
const session = require('express-session'); 
 
const app = express(); 
 
app.use(session({ 
    secret: 'secret', 
    resave: false, 
    saveUninitialized: true 
})); 
 
app.get('/', (req, res) => { 
    req.session.user = "Admin"; 
    res.send("Session Created"); 
}); 
 
app.listen(3000);