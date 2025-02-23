const express = require("express");
const cors = require("cors");
const app = express();
const { connection, sequelize } = require("./database/db");
const userRouter = require("./routes/userRoute");
const authRouter = require("./routes/authRoute");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { authenticateToken } = require("./middleware/token-middleware");
const router = require("./routes/uploadRoutes");
const { createUploadsFolder } = require("./security/helper");

const trekRouter = require("./routes/trekRoute");
// const dayRouter = require("./routes/dayRoute");


dotenv.config();
const PORT = process.env.PORT;
app.use(cors());


app.use("/uploads", express.static("uploads")); // Serve static files from the "uploads" directory
createUploadsFolder();
app.use(bodyParser.json());
app.use("/api/trek", trekRouter);
app.use(authenticateToken);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/file", router);

// app.use("/api/days",dayRouter);


(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error);
  }
})();
