const express = require('express');
const app = express();
const port = 3000;

userRoute = require('./Routes/user');

app.use('/users', userRoute);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
