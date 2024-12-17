import fastify from "fastify";

const app = fastify()

let bancoDeDados = ["sova"] as String[]

// GET
app.get('/get', (request, response) => {
    return response.send(bancoDeDados)
})

// POST
app.post('/post', (request, response) => {
    const { username } = request.body as { username: string}

    if(username){
        bancoDeDados.push(username)
        return response.send("Deu certo!")
    }else{
        return response.send("Deu Errado")
    }

})

// PUT
app.put('/put', (request, response) => {
    const { username, newUsername } = request.body as { username: string, newUsername: string}

    if(bancoDeDados.includes(username)){
        let position = bancoDeDados.indexOf(username)
        bancoDeDados[position] = newUsername
        return response.send("Deu certo!")
    }else{
        return response.send("Deu Errado")
    }

})

// DELETE
app.delete('/delete', (request, response) => {
    const { username} = request.body as { username: string, newUsername: string}

    if(bancoDeDados.includes(username)){
        let position = bancoDeDados.indexOf(username)
        bancoDeDados.splice(position , 1)
        console.log(bancoDeDados)
        return response.send("Username apagado com sucesso!")
    }else{
        return response.send("Username não existe")
    }

})
app.listen({
    port: 3333
}).then(() => {
    console.log("Server Running!")
})