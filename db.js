const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://saurabhdhankar933_db_user:HrdufpX8WFqunr6f@cluster0.uffdxq0.mongodb.net/myTest1');
        console.log('MongoDB connected');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }   
};

module.exports = connectDB;