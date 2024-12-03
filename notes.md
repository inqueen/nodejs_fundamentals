
### Notes


* <b>server.js:</b> index é um conceito Web/FrontEnd
    *  é possível trabalhar com qualquer JS dentro do NodeJS, pois é isso que roda por debaixo dos panos

```    
const a = 5;
const b = 5;

console.log(a+b)
```

CommonJS: padrão de importação (mais antigo)
ESModules: padrão mais recente e recomendado 

```
ESModules => import/export
```

No `package.json` incluir 
```
"type": "module",
```

CommonJS (1) x ESModules (2):

```
(1)
const http = require('http')
Applications HTTP => APIs 

(2)
import http from 'node:http' //node module
// modulos terceiros não têm 'node:x'
```

Testar local

Rodar e pausar (^C) a cada alteração realizada:
```
node pasta/arquivo.js
```

Restarting automático
```
node --watch pasta/arquivo.js
```

Em package.json é possível criar scripts para automatizar comandos que necessitem serem chamados constantemente. A partir do script, basta rodar o comando abaixo e ele é executado:

```
npm run nome_do_script
```

Métodos que são utilizados no projeto (mais comuns)

```
GET - buscar um recurso do Back-end
POST - criar um recurso no Back-end
PUT - atualizar um recurso no Back-end
PATCH - atualizar uma informação específica de um recurso no Back-end
DELETE - apagar um recurso no Back-end 
```

httpie 

```
http METHOD localhost:3333 + URL
```
Tipos de armazenamento de dados

* Stateful - dados em memória
* Stateless - dados em DB ou arquivos externos

JSON - Javascript Object Notation

Headers (Cabeçalho) - [req ou res] são metadados / informações adicionais 

HTTP Status Code - 200, 201, 404... 

STREAMINGS - especialidade do NodeJS 
!! TODAS AS PORTAS DE ENTRADA E SAÍDA NO NODEJS SÃO STREAMS
    * stream não trabalham com primitivos e nem números
    * conceito de buffer de string
```
Readable Streams - enviando em lotes
Writable Streams - lendo em lotes
Transform Streams - converte dados em lotes
```
Readable - só lê
Writable - só escreve 
Transform - lê de um lugar e escreve para outro | ela fica entre as outras streams sempre

```
READABLE -> TRANSFORM -> WRITABLE
```

chunk - trecho do readable stream
enconding - como essa informação está codificada
callback - é uma função que a Writable Stream precisa chamar quando termina o processamento. Não há transformação em Writable Stream 
