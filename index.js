const express = require('express');
const app = express();
const port = 3000;

userRoute = require('./Routes/user');
productRoute = require('./Routes/product');

app.use('/users', userRoute);
app.use('/products', productRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
