// server.js
require('dotenv').config(); // Load env variables

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (like join.html, join.css)
app.use(express.static(path.join(__dirname)));

// Connect to MongoDB using URI from .env
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Smriti'
})
.then(() => console.log('✅ Connected to MongoDB Atlas: Smriti'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Mongoose schema
const formSchema = new mongoose.Schema({
  name: String,
  mobile: String,
  batch: String,
  interests: [String],
  specification: String,
  createdAt: { type: Date, default: Date.now }
});

// Collection name: joiniee
const JoinForm = mongoose.model('JoinForm', formSchema, 'joiniee');

// POST /join
app.post('/join', async (req, res) => {
  try {
    const { name, mobile, batch, specification } = req.body;
    let interests = req.body.interests || [];

    // Normalize to array
    if (!Array.isArray(interests)) {
      interests = [interests];
    }

    const newEntry = new JoinForm({ name, mobile, batch, interests, specification });
    await newEntry.save();

    res.status(201).send(`<h2>✅ Thank you, ${name}! Your form has been submitted.</h2>`);
  } catch (err) {
    console.error('❌ Error saving form:', err);
    res.status(500).send('<h2>❌ Failed to submit form. Please try again later.</h2>');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
