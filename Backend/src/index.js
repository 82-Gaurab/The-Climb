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

const trekAddRouter = require("./routes/trekAddRoute");
const trekGetRouter = require("./routes/trekGetRoute");
const requestRouter = require("./routes/requestRoute");


dotenv.config();
const PORT = process.env.PORT;
app.use(cors());


app.use("/uploads", express.static("uploads")); // Serve static files from the "uploads" directory
createUploadsFolder();
app.use(bodyParser.json());
app.use("/api/getTrek", trekGetRouter);
app.use("/api/request", requestRouter);
app.use(authenticateToken);
app.use("/api/addTrek", trekAddRouter);
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/file", router);

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
