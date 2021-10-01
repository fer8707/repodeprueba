const express       = require('express')
const app           = express()
const port          = 3000

app.set ('view engine', 'ejs')

app.get ('/', (req, res)=>{
    res.send('Respondiendo desde express')
})

app.get('/servicios', (req,res)=>{
    res.send('Respondiendo desde servicios')
}) 

app.use(express.static(__dirname + "/public"))

app.listen (port, ()=>{
    console.log('servidor corriendo desde el puerto ', port)
})
