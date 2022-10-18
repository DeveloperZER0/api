/*const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()*/
const express = require('express')
var cors = require('cors')

const app = express()
const PORT = 4000
app.listen(PORT, () =>
  console.log(`API działa na porcie ${PORT}`),
)

app.use(cors())
app.get('/markers', async (req, res) => {
    //const allMarkers = await prisma.post.findMany()
    //res.json(allMarkers)
    res.send('Siema')
})
app.post('/receive', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
})

