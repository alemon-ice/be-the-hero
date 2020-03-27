const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

{
    /**
     * Rota / Recurso
     */
    
     /**
      * Métodos HTTP:
      * 
      * GET: buscar uma informação no backend
      * POST: criar uma informação no backend
      * PUT: alterar uma informação no backend
      * DELETE: deletar uma informação no backend
      */
    
      /**
       * Tipos de parâmetros:
       * 
       * Query Params: parâmetros nomeados enviados na rota após "?"(filtros, paginação)
       * Route Params: Parâmetros utilizados para identificar recursos
       * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
       */
    
       /**
        * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
        * NoSQL: MongoDB, CouchDB, etc
        */
    
        /**
         * Driver: SELECT * FROM users
         * Query Builder: table('users').select('*').where()
         * 
         */
}

app.listen(3333)