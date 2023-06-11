const http = require("https");
const fs = require("fs");
const express=require('express')
const app=express()
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
app.get('/',(req,res)=>{

async function name() {
  console.log("BEFORE FETCH");
  const final = await getdata();
  res.send(final)
  console.log(final);
  console.log("AFTER FETCH");
}
})
name();
