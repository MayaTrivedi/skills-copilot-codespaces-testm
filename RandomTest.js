
// create a web api using express and javascript with routes for products
const app = require('express')();

// Define routes for products
app.get('/products', (req, res) => {
    // Logic to fetch all products
    res.send('Get all products');
});

app.get('/products/:id', (req, res) => {
    const productId = req.params.id;
    // Logic to fetch product by id
    res.send(`Get product with id ${productId}`);
});

app.post('/products', (req, res) => {
    // Logic to create a new product
    res.send('Create a new product');
});

app.put('/products/:id', (req, res) => {
    const productId = req.params.id;
    // Logic to update product by id
    res.send(`Update product with id ${productId}`);
});

app.delete('/products/:id', (req, res) => {
    const productId = req.params.id;
    // Logic to delete product by id
    res.send(`Delete product with id ${productId}`);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});