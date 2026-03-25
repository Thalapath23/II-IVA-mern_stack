const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test');

const userSchema = new mongoose.Schema({
    name: String
});

const User = mongoose.model('User', userSchema);

// Create
User.create({name: "Sai"});

// Read
User.find().then(data => console.log(data));

// Update
User.updateOne({name: "Sai"}, {name: "Ram"}).then(()=>console.log("Updated"));

// Delete
User.deleteOne({name: "Ram"}).then(()=>console.log("Deleted"));