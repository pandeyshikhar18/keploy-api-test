const express = require("express");
const app = express();
app.use(express.json());

app.get("/hello", (req, res) => {
  res.json({ message: "Hello, world!" });
});

app.post("/greet", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}` });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
