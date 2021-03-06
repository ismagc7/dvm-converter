const express = require('express')
const funciones = require('./utils');
const fileUpload = require('express-fileupload')

const app = express();

app.use(fileUpload())

  app.post('/',(req,res)=>{
    let EDFile = req.files.file
    let file = EDFile.name.split('.')
    let nombre = `./uploads/${file[0]}-${Date.now()}.${file[1]}`

    EDFile.mv(nombre,error =>{
      if (error){
        console.log("El archivo no ha podido subirse")
      }
      else{
        console.log(req.body.name)
        funciones.readFile(`${nombre}`,req.body.description,req.body.name)
        return res.status(200).send('file uploaded')
      }
    })
  })

app.listen('7000',()=>{
    console.log("Conected");
})

