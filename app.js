const { request, response } = require("express")
const express = require("express")
 
const app = express()

app. get ('/error', function(request, response){

    response.status(404).send ('Something went wrong, try again later')
    console.log(`Запрошенный адрес: ${request.url}`)

})


app.get("/", function(request, response){

    response.statusCode = 301 //реализован редирект на другую страницу /home 
    response.redirect ('/auth')
    console.log(`Запрошенный адрес: ${request.url}`)

})
app.get("/home", function(request, response){
    //отрисовка страницы из статичного HTML
    response.sendFile (__dirname +'/home.html')
    console.log(`Запрошенный адрес: ${request.url}`)
})
app.get("/auth", function(request, response){
     //отрисовка странички из HTML с полями ввода и кнопочками
    response.sendFile (__dirname +'/auth.html')
    console.log(`Запрошенный адрес: ${request.url}`)
})
app.post('/auth', function(request,response){
  
   //хочу сделать - если пусто, то редирект хз зачем
    /*if(!request.body) {
        response.redirect ('/error')
    }*/
    // по нажатию кнопки потвердить происходит редирект на домашнюю страницу
    response.statusCode = 301
    response.redirect ('/home')
})
app.listen(3000);