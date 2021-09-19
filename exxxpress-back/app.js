const { request, response } = require("express")
const express = require("express")
const bodyParser = require ('body-parser')
const db = require('./queries')
 
const app = express()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app. get ('/error', function(request, response){

    response.status(404).send ('Something went wrong, try again later')
    console.log(`Запрошенный адрес: ${request.url}`)

})
app.get ('/getAuth', db.getAuth)//хотим отправить JSON с данными из таблицы БД 

app.get("/", function(request, response){

    response.statusCode = 301 //реализован редирект на другую страницу /home 
    response.redirect ('/auth')
    console.log(`Запрошенный адрес: ${request.url}`)

})
app.get("/home", function(request, response){
    //отрисовка страницы из сстранички реакта
    response.sendFile (__dirname +'/try.html')
    console.log(`Запрошенный адрес: ${request.url}`)
})
app.get("/auth", function(request, response){
     //отрисовка странички из HTML с полями ввода и кнопочками
     
    response.sendFile (__dirname +'/auth.html')
    console.log(`Запрошенный адрес: ${request.url}`)
})
app.post('/auth', function(request,response){
  
    response.statusCode = 301
    response.redirect ('/home')
})
app.listen(3000);