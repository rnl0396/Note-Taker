const express=require("express");

const fs=require("fs");

const server=express();



server.get("*", (req,res)=>{
    res.sendFile(`${__dirname}/index.html`)
});

server.get("/notes", (req,res)=>{
    res.sendFile(`${__dirname}/notes.html`)
});


server.get("/hello", (req,res)=>{

    // console.log(req.url);
    // console.log(req.query);

    // http://localhost:3000/hello?apiKey=something&name=Rob&lastName=Lemus

    console.log("Hello", `${req.query.name} ${req.query.lastName}`);
    console.log("Your API Key is:", req.query.apiKey);

    res.send(`
    <!doctype html>
    <html lang="en">
      <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    
        <!-- Bootstrap CSS -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    
        <title>Hello, world!</title>
      </head>
      <body>
        <h1>Hello, world!</h1>
    
        <!-- Optional JavaScript; choose one of the two! -->
    
        <!-- Option 1: Bootstrap Bundle with Popper -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    
        <!-- Option 2: Separate Popper and Bootstrap JS -->
        <!--
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script>
        -->
      </body>
    </html>
    `);
});

server.listen(3000,()=>{
    console.log("Server is running on port 3000.");
});


//open chrome and go to localhost:3000 and localhost:3000/ or 127.0.0.1:3000

// const url="/?apiKey=something&name=Rob&lastName=Lemus";
// const parts=url.split("?");
// const urlKeys=parts[1].split("&");
// const query={};
// urlKeys.forEach(keyValuePair=>{
//     const pair=keyValuePair.split("=");
//     query[pair[0]]=pair[1];
// });
// console.log(urlKeys);


// const person={};
// person["name"]="John";

// console.log("The person name is:", person.name);


