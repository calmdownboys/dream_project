const { request, response } = require("express")
const express = require("express")
 
const app = express()


app.get("/", function(request, response){

    response.statusCode = 301 //реализован редирект на другую страницу /home 
    response.redirect ('/home')
    console.log(`Запрошенный адрес: ${request.url}`)

})
app.get("/home", function(request, response){
    response.sendFile (__dirname +'/home.html')
    console.log(`Запрошенный адрес: ${request.url}`)
})
app.get("/auth", function(request, response){
     
    response.send("<h1>Auth</h1>")
    console.log(`Запрошенный адрес: ${request.url}`)
})
app.listen(3000);