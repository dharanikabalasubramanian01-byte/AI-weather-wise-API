const express = require("express");
const cors = require("cors");
require("dotenv").config();

const weatherRoutes = require("./routes/WeatherRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.send("Weather Wise API is running!");
});

app.use("/api/weather", weatherRoutes);

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});