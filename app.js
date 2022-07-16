const express = require("express");
const addDays = require("date-fns/addDays");
const app = express();
app.get("/", (request, response) => {
  let dateToday = new Date();
  let add = addDays(dateToday, 100);
  response.send(`${add.getDate()}/${add.getMonth() + 1}/${add.getFullYear()}`);
});
module.exports = app;
