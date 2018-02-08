const express = require("express");
const http = require("http");
const request = require("request");

const app = express();
const port = process.env.PORT || 3000;

let cache = require("memory-cache");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => res.send("Welcome to busbud!"));

let busbudAPIOpts = {
  url: "https://napi.busbud.com/x-departures/dr5reg/f25dvk/2018-07-07",
  headers: {
    Accept:
      "application/vnd.busbud+json; version=2; profile=https://schema.busbud.com/v2/",
    "X-Busbud-Token": process.env.BUSBUD_TOKEN
  }
};

app.get("/departures", (req, res) => {
  request(busbudAPIOpts, callback);
  res.status(200);
  res.send("");
});

app.get("/getdepartures", (req, res) => {
  let departures = cache.get("departures");
  // while (!departures.complete) {
  //   console.log("pooling");
  // }
  res.send({ data: departures });
});

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    cache.put("departures", info);
    console.log(info.complete);
  } else {
    console.log("ERROR");
  }
}

app.listen(port, () => console.log("server running on port " + port));
