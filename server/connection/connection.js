const mongoose = require('mongoose');
const username = "abcdefgh";
const password = "abcdefgh";
const uri = `mongodb+srv://${username}:${password}@cluster0.jpoyoge.mongodb.net/`;

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("DataBase Connection Established");
    } catch (error) {
        console.log(error)
    }
}

connect();

module.exports = connect;