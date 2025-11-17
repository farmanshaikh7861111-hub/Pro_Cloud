import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Minecraft Hosting API is live!" });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
