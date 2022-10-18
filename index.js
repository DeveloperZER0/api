/*const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()*/
const express = require('express')
var cors = require('cors')

const pgp = require('pg-promise')(/* options */)
const db = pgp(env("DATABASE_URL"))

const app = express()
const PORT = 4000
app.listen(PORT, () =>
  console.log(`API działa na porcie ${PORT}`),
)

app.use(cors())
app.get('/', async (req,res) => {
  res.send('API projektu SPOTTED na potrzebę konkursu hackheroes')
})
app.get('/markers', async (req, res) => {
  try {
    const markers = await db.any('SELECT * FROM Post', [true]);
    res.json(markers)
  } 
  catch(e) {
    res.sendStatus(500)
  }

})
app.post('/receive', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

