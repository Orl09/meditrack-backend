require('dotenv').config();

const express = require("express");
const multer = require('multer');
const path = require('path');
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();



// Serve uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//routes

const userRoutes = require('./Routes/userRoutes');
const treatmentRoutes = require('./Routes/treatmentRecordsRoutes');
const medRecRoutes = require('./Routes/medRecRoutes');
const dentalRecRoutes = require('./Routes/dentalRecRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

  


app.use("/user", userRoutes);
app.use("/treatment", treatmentRoutes);
app.use("/record", medRecRoutes);
app.use("/dental", dentalRecRoutes);

async function connect() {
    try {
        await mongoose.connect(process.env.uri);
        console.log("Successfully Connected to Mongodb");
    } catch (error) {
        console.log(error);
    }
}

connect();

app.listen(process.env.Port, () => console.log(`Server running on ${process.env.Port}`));


