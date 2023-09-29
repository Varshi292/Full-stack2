const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/mydb',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
//schema
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});
//user model
const User = mongoose.model('User', userSchema);
//post route
app.post('/signup',async(req, res)=>{
    try{
        const{ email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({ message: 'Email already exists' });
        }
        const newUser = new User({ email, password });
        await newUser.save();

        res.status(201).json({ message: 'User registerd successfully '});
    }catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/index.html', (req, res)=>{
    res.redirect('index.html');
})

app.get('/',(req,res)=>{
    res.set({
        'Allow-access-Allow-Origin': '*'
    })
    return res.redirect('index.html')
}).listen(3000);

console.log("server running...");