const http = require("https");
const fs = require("fs");
const express = require("express");
const { log } = require("console");
const app = express();

app.get("/", (req, res) => {
  const getdata = () => {
    return new Promise((resolve, reject) => {
      http.get("https://reqres.in/api/users", (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => {
          data = JSON.parse(data);
          resolve(data);
        });
      });
    });
  };

  async function name() {
    console.log("BEFORE FETCH");
    const final = await getdata();
    console.log(final);
    res.send(final);
    console.log("AFTER FETCH");
  }
  name();
});

app.listen(5000,()=>{
    console.log('server started');
})
