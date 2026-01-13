const express = require("express");
const dbConnect = require("./DB/connection");
const app = express();
const dotenv = require("dotenv");
const router = require("./routes/combine");
const cors = require("cors");
const cookieParser = require("cookie-parser");
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
dbConnect();

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
