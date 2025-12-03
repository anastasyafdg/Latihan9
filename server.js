require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 8801;

app.use(express.json());

// Default route
app.get('/', (req, res) => {
    res.send('API berjalan...');
});

// Routes user
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

// Routes product
const productRoutes = require('./routes/product.routes');
app.use('/api/products', productRoutes);

// Routes auth (LOGIN)
const authRoutes = require('./routes/auth.routes');
app.use('/api/auth', authRoutes);

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
