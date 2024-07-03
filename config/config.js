require('dotenv').config();


module.exports = {
 port: process.env.PORT || 4000,
 dbURI: process.env.MONGODB_URL,
 //secretKey: process.env.SECRET_KEY
};
