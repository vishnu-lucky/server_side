const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');


const authRoutes = require('./routes/auth');




dotenv.config();

connectDB();

const app = express();

app.use(cors(
    {
        origin:["https://client-side-gold.vercel.app"],
        methods:["GET","POST","PUT","DELETE"],
        credentials:true
    }
));
app.use(express.json());

app.use('/api/auth', authRoutes);

  
  

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
