const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const videoRoutes = require("./routes/api/videoRoutes");
// const dbFillRoutes = require("./routes/api/dbFill");
const commentsRoutes = require("./routes/api/commentsRoutes");

// check/initialize process.env
const result = dotenv.config();
if (result.error) {
  throw result.error;
}

// initialize app config
const app = express();
app.use(cors());
connectDB();

const port = process.env.PORT || 5000;

// Init Middleware
app.use(express.json({ extended: false }));

// routes
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentsRoutes);


// Serve static assets in production
// if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
// }

app.listen(port, () => console.log(`app is running on ${port}`));