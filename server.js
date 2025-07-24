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

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Schema and model
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
    const { name, mobile, batch, specification, interests } = req.body;

    const normalizedInterests = Array.isArray(interests)
      ? interests
      : interests ? [interests] : [];

    const newEntry = new JoinForm({
      name,
      mobile,
      batch,
      interests: normalizedInterests,
      specification
    });

    app.get('/join', (req, res) => {
  res.send('✅ This is the Join endpoint. Use POST method to submit form.');
});

    await newEntry.save();
    res.status(201).json({ message: 'Form submitted successfully!' });
  } catch (err) {
    console.error('❌ Error saving form:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
