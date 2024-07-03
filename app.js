const express =require("express");
const mongoose=require("mongoose");
const config = require('./config/config')
const customerRoutes = require('./Routes/customerRoutes')
const employeeRouters = require('./Routes/employeeRoutes');
const menuRouters = require('./Routes/menuRoutes');
const cors = require('cors');

const app =express();
app.use(cors());

app.use(express.json());

app.use('/api/customers', customerRoutes);
app.use('/api/employees', employeeRouters);
app.use('/api/menus', menuRouters);

mongoose.connect(config.dbURI)

.then(()=>console.log('mongoDB connected'))
.catch(err => console.log(err));


const PORT = config.port;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
