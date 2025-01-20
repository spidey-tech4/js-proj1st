import express from 'express'
const app = express();

import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt.js';


app.get('/', (req, res) => {
    res.send("Hello World");
});
app.post('/', async(req, res) => {
    const {name, number, password} = req.body;   
    try {
        const user = new User({name,number,password,confirmPassword});
        if (password !== confirmPassword)
             throw new Error("Passwords doesn't magtch");
            else {
                console("error")
            }
            const hash_password=await bcrypt.hashSync(password,10)
            const userho = await userModel.create({ name,
              password:hash_password,
               email });
            console.log("user has been registrated successfully")
        await user.save();
        res.status.json(user);
    }
        catch (error) {
            res.json({ message: error.message });
        }
    });


const port = 3000;
app.listen(3000, () => {
    console.log("Server is running on : 3000");
}); 