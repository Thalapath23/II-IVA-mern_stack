const express=require('express');
const mongoose=require('mongnode ose');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
const PORT =3000;
mongoose.connect('mongodb://127.0.0.1:27017/studentDB')
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));
const studentSchema=new mongoose.Schema({
    name:String,
    age:Number
});
const Student = mongoose.model('Student',studentSchema);
app.post('/studnts',async(req,res)=>{
    const student=new Student(req.body);
    await student.save();
    res.send("Student added successfully");
});
app.get('/students',async(req,res)=>{
    const data = await studentSchema.find();
    res.json(data);
});
app.put('/students/:id',async(req,res)=>{
    await Student.findByIdAndUpdate(req.params.id,req.body);
    res.send("Student update");
});
app.delete('/stdents/:id',async(req,res)=>{
    await Student.findByIdAndDelete(req.params.id);
    res.send("Student deleted");
});
app.listen(PORT,()=>{
    console.log("Server running on port 3000");
});