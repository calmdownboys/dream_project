const express = require ('express')
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
const app = express()
const fs = require ('fs')
const server = http.createServer((request, response) => {
  response.statusCode = 200
  response.setHeader('Content-Type', 'text/html; charset=utf-8;')
  console.log(`Запрошенный адрес: ${request.url}`) // вывод в консоль запрашиваемого адреса

  if (request.url === '/')
  {
    response.statusCode = 301 //реализован редирект на другую страницу /home 
    response. setHeader ('Location', '/home')
  }
  else if (request.url === '/home')
  {
    //поптыка отправить ответ в виде информации из другого файла 
    fs.readFile('main.html', 'utf8', function(error, data){
                 
      let message = "Это ваша домашняя страница" 
      let header = "Главная страница"
      data = data.replace('{header}', header).replace('{message}', message);
      response.end(data);
  })
}

  else if (request.url === '/auth')
  {
    response.write ('Auth')
  }
  else 
  {
    //если введенный url отличный от задуманных, то отправляем 404
    response.statusCode = 404
    response.write ('error url, check your address')
  }
response.end()
})


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})