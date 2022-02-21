require("dotenv").config({ path: "./config.env" });
const express = require("express");
const authRoutes = require("./routes/auth");
const privateRoutes=require('./routes/private')
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
//connect to db
connectDB();
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use('/api/private',privateRoutes)
//error handler should be the last piece of middleware
app.use(errorHandler);
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () =>
  console.log(`server listening on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`logged error ${err}`);
  server.close(() => process.exit(1));
});
