const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Smriti'
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
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

const JoinForm = mongoose.model('JoinForm', formSchema, 'joiniee');

// Routes
app.post('/join', async (req, res) => {
  try {
    let { name, mobile, batch, interests, specification } = req.body;

    if (interests && !Array.isArray(interests)) {
      interests = [interests]; // force to array
    }

    const newEntry = new JoinForm({ name, mobile, batch, interests, specification });
    await newEntry.save();

    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (error) {
    console.error('❌ Error submitting form:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/', (req, res) => {
  res.send('🌐 Backend is Live!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
