const express = require('express');
const connectDB = require('./config/db');

const app = express();

const PORT = process.env.PORT || 5000;

//connectDB
connectDB();

//Init Middleware
app.use('/api/profilepfp', express.static('profilepfp'));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello There!!!');
});

//Define routes
app.use('/api/users', require('./routes/api/users.js'));
app.use('/api/auth', require('./routes/api/auth.js'));
app.use('/api/profile', require('./routes/api/profile.js'));
app.use('/api/posts', require('./routes/api/posts.js'));

app.listen(PORT, () => {
  console.log('Server Running');
});
