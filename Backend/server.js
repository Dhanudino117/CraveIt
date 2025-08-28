import express from "express";
import dotenv from "dotenv";
dotenv.config({ quiet: true });

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World! 🚀 Server is running...");
});
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
