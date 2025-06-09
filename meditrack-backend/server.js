require('dotenv').config();

const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require('path');
const multer = require('multer');
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

// Serve uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const userRoutes = require('./Routes/userRoutes');
const treatmentRoutes = require('./Routes/treatmentRecordsRoutes');
const medRecRoutes = require('./Routes/medRecRoutes');
const dentalRecRoutes = require('./Routes/dentalRecRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Mount Routes
app.use("/user", userRoutes);
app.use("/treatment", treatmentRoutes);
app.use("/record", medRecRoutes);
app.use("/dental", dentalRecRoutes);

// MongoDB connection
async function connect() {
  try {
    await mongoose.connect(process.env.uri);
    console.log("Successfully Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
}
connect();

// Read SSL key and cert
const key = fs.readFileSync(path.join(__dirname, 'certs', 'key.pem'));
const cert = fs.readFileSync(path.join(__dirname, 'certs', 'cert.pem'));

// Create HTTPS server
https.createServer({ key, cert }, app).listen(process.env.Port || 7000, () => {
  console.log(`HTTPS server running on port ${process.env.Port || 7000}`);
});
