const mongoose = require("mongoose");
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, { useNewUrlParser: true })
    .then((data) => {
      console.log(`Mongodb is connected to: ${data.connection.host}`);
    });
};
module.exports = connectDatabase;
