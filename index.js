require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error");
const authRoutes = require("./routes/auth");

const PORT = process.env.PORT || 8081;

app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "./rockus-client/build")));

app.use("/api/auth", authRoutes);

app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "./rockus-client/build", "index.html"));
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
