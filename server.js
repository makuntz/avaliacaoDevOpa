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

        let intervMenorMin = interA
        let intervMaiorMin = interB
        const menormin = parseInt(intervMenorMin[0])
        const menormax = parseInt(intervMenorMin[1])
        const maiormin = parseInt(intervMaiorMin[0])
        const maiormax = parseInt(intervMaiorMin[1])

        if(menormin == maiormin || menormin == maiormax || menormax == maiormin || menormax == maiormax) {
            return true
        }
        
        if(menormin > maiormin) {
            intervMenorMin = interB
            intervMaiorMin = interA
        }
    
        if(maiormin < menormax) {
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
