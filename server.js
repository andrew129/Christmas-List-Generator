const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const lists = require('./routes/listRoutes')
const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.promise = Promise
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/christmas", { useNewUrlParser: true });

app.use('/api/lists/', lists)

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
