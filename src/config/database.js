const mongoose = require("mongoose");

const connectDB = async () =>
{
    await mongoose.connect
    (
        "mongodb+srv://namastenode:YS5UVv0aITrtaRNv@namastenode.vugah.mongodb.net/devTinder"
    );
};

module.exports = connectDB; 