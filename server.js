const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

// ✅ MongoDB Atlas connection string (replace special characters as needed)
const MONGO_URI = 'mongodb+srv://ritik737091:123%40Ritik@portfolio-data.b6wvdj5.mongodb.net/Smriti?retryWrites=true&w=majority&appName=portfolio-data';

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (join.html, join.css, join.js if any)
app.use(express.static(path.join(__dirname)));

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Smriti'
})
.then(() => console.log('✅ Connected to MongoDB Atlas: Smriti'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Schema
const formSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  batch: String,
  interests: [String],
  specification: String,
  createdAt: { type: Date, default: Date.now }
});

// Model using collection 'joiniee'
const JoinForm = mongoose.model('JoinForm', formSchema, 'joiniee');

// Form submission route
app.post('/join', async (req, res) => {
  try {
    const { name, mobile, batch, specification } = req.body;

    let interests = req.body.interests || [];
    if (!Array.isArray(interests)) {
    interests = [interests];
    }


    const newEntry = new JoinForm({ name, mobile, batch, interests, specification });
    await newEntry.save();

    res.status(201).send(`<h2 style="font-family:sans-serif">✅ Thanks, ${name}! Your form was submitted successfully.</h2>`);
  } catch (err) {
    console.error('❌ Error saving form:', err);
    res.status(500).send('<h2>❌ Failed to submit form. Please try again later.</h2>');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
