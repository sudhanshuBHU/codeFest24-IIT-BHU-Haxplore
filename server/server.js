const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;
const app = express();
const routes = require('./routes/routes');
const bcrypt = require('bcrypt');
const cors = require('cors');
const DB = require('./connection/connection');
DB();


const loginModel = require('./models/loginmodels');
const AdminCreds = {
    username: "Admin123@gmail.com",
    password: "Admin123"
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); 
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
})

app.use('/booking',routes);
app.use(cors());

const createAdmin = async (AdminCreds) => {
    try {
        const userId = await loginModel.find({email: AdminCreds.username})
        console.log(userId.length)
        if(userId.length === 0 && AdminCreds.username){
            const encyptPassword = await bcrypt.hash(AdminCreds.password, 10);
            const adminData = new loginModel({
                username: AdminCreds.username,
                password: encyptPassword
            })
            const adminSaved = await adminData.save();
            // console.log("User Added");
        }
    } catch (error) {
        console.log(`Error Message: ${error.message}`);
    }    
}

createAdmin(AdminCreds)

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})