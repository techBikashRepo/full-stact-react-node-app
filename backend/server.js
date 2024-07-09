const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send({
    message: "Hello World",
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
