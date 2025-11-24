const express = require('express');
const app = express();
const PORT = 8801;

app.use(express.json());

app.get('/', (req, res)=>{
    res.send('Hello, World');
});

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});

//Routes user
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

//Routes product
const productRoutes = require('./routes/product.routes');
app.use('/api/products', productRoutes);