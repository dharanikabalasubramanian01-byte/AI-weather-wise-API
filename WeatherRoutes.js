const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const city = req.query.city || "Salem";

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.message || "Unable to get weather"
      });
    }

    res.json({
      city: data.name,
      temperature: data.main.temp,
      condition: data.weather[0].description
    });

  } catch (error) {
    res.status(500).json({
      error: "Unable to get weather"
    });
  }
});

module.exports = router;
