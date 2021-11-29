const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(express.static('./public'))

app.post('/ordenaLista', (req, res) => {
    const listas = req.body.listas
    listas.salaN.sort()
    listas.salaS.sort()

    res.send(listas)
})

app.get('/interlace', (req, res) => {
    const body = req.query
    const validar = (bodyPosted) => {
        const interA = bodyPosted.intervaloA.split(',')
        const interB = bodyPosted.intervaloB.split(',')
    
        if (interA[0] == interB[0] || interA[0] == interB[1] || interA[1] == interB[0] || interA[1] == interB[1]) {
            return true
        }
    
        let intervMenorMin = interA
        let intervMaiorMin = interB
        if (interA[0] > interB[0]) {
            intervMenorMin = interB
            intervMaiorMin = interA
        }
    
        if (intervMaiorMin[0] < intervMenorMin[1]) {
            return true
        }
    
        return false
    }
    const validado = validar(body)

    res.send(validado)
})

app.listen(8080, function(){
    console.log('link: http://localhost:8080/')
})
