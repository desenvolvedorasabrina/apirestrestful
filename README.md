# apirestrestful | Documentation
 
 ## API Description
Cliente (client)
Garçom - anota e leva pedidos (API)
Cozinha(server)

Application Programming Interface - conjunto de rotinas e padrões estabelecidos por uma aplicação para que outras utilizam suas funcionalidades.

- Responsável por estabelecer comunicação entre serviços

- Meio de campo entre as tecnologias.

- Intermediador para troca de informações.

## REST
Restaurante que atenda as necessidades e ética (boas práticas)

Representation State Transfer 

- Transferência de dados, geralmente, protocolo HTTP | maneira simbólica, figurativa e representativa (didática)

- resources = entidade | objeto

## RESTFUL
Aplicação dos padrões REST

Constraints
- _client-server_: separação do cliente e armazenamento de dados - portabilidade do sistema, exemplo: REACT para web e React Native mobile.

- _stateless_: cada requisição que o cliente faz para o servidor, deverá conter todas as informações necessárias para o compreensão da comunicação (request/response).

- _cacheable_: response explícito sobre as permissões de cache pelo client.

- _layered system_: client acessa endpoints sem precisar saber a complexidade ou dos passos ou as camadas do server para o response.

- _code on demand_: possibilidade da aplicação pegar código como javascript e executar no client.

## Good Habits
- utilização de verbos HTTP para requisições.
- não utilizar barras no final de endpoints.
- utilizar padrões de criação (plural/singular)
- nunca deixar o client sem response claros

## Verbos HTTP
HTTP verb - resources
- GET: receber dados 
- POST: enviar dados/informações para processamento
- PUT: atualizar dados
- DELETE: apagar 

## Response Status
- 1xx: Informação
- 2xx: Sucesso
    - 200: OK
    - 201: Created
    - 204: Não possui conteúdo verbal
- 3xx: Redirection
- 4xx: Client Error
    - 400: Bad Request
    - 404: Not Found
- 5xx: Server Error
    - 500: Internal Server Error

## Author:
Feito com ❤️ por Sabrina M. Dos Santos 🚀

## Source:
Rocketseat course
