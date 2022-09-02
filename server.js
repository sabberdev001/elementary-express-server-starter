const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const corsOptions = require("./config/cors.config.js");
const testRouter = require("./routes/test.router.js");

// Constants
const PORT = process.env.PORT || 5000;

const app = express();

// Configurations
dotenv.config();
console.log(process.env.TEST_ENV);

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Initialization
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Routes
app.use("/api", testRouter);
