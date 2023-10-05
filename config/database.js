const mongoose = require('mongoose');
const URI = process.env.URL
const db = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("database connected");
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = db;