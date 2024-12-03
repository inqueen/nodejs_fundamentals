import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    // isso é chamado de early return 
    //(se cair nesse if, nada do que estiver abaixo 
    //sera executado)
    if (method == 'GET' && url == '/users') {
        return res
        .setHeader('Content-Type', 'application/json')
        .end(JSON.stringify(users))
    }

    if (method == 'POST' && url == '/users') {
        users.push({
            id: 1,
            name: 'Queen Elsa',
            email: 'queen.elsa@gmail.com'
        })


        return res.writeHead(201).end()
    }

    console.log(method, url)

    return res.writeHead(404).end('Deu ruim')
})

server.listen(3333)
