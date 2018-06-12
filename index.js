const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8081;

app.use(express.static(path.resolve(__dirname, "./rockus-client/build")));

app.get("*", function(request, response) {
  response.sendFile(path.resolve(__dirname, "./rockus-client/build", "index.html"));
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
