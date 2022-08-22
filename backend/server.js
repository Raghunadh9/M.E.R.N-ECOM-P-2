const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
//Handling Uncought Exception:
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting down the server due to uncought Exception");
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });
//connecting to database
connectDatabase();
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is now running on http://localhost:${process.env.PORT}`);
});

//Unhandled Promisary Rejection:
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err} `);
  console.log("Shutting down the server due to unhandled Promisay Rejection");
  server.close(() => {
    process.exit(1);
  });
});
