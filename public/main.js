async function postRequest(){
    const input1 = document.getElementById('salaN').value
    const input2 = document.getElementById('salaS').value
    const salaN = input1.split(',')
    const salaS = input2.split(',')
    const res = document.getElementById('res1')
    
    if(input1.length == 0 && input2.length == 0){
        window.alert('[ERRO] Faltam Dados!')
    }else{
        const body = {
            listas:{ 
                salaN: salaN,
                salaS: salaS
            }
        }
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
        }
        const response = await fetch('http://localhost:8080/ordenaLista', requestOptions)
        const sortedList = await response.json()
        const getSalaN = sortedList.salaN
        const getSalaS = sortedList.salaS
                
        res.innerHTML = `SalaN = [${getSalaN}] </br></br>`
        res.innerHTML +=  `SalaN = [${getSalaS}]`     
    }
}

async function getRequest(){
    const input1 = document.getElementById('interA').value
    const input2 = document.getElementById('interB').value
    const res = document.getElementById('res2')
    
    if(input1.length == 0 && input2.length == 0){
        window.alert('[ERRO] Faltam Dados!')
    }else{
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        }

        const response = await fetch(`http://localhost:8080/interlace?intervaloA=${input1}&intervaloB=${input2}`, requestOptions)
        const validado = await response.json()
        console.log(validado)
        res.innerHTML = `${validado}`  
    }
}
