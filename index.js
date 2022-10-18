const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require('express')
var cors = require('cors')

const app = express()
const PORT = 4000
app.listen(PORT, () =>
  console.log(`API działa na porcie ${PORT}`),
)

app.use(cors())
app.use(express.json())
app.get('/', async (req,res) => {
  res.send('API projektu SPOTTED na potrzebę konkursu hackheroes')
})
app.get('/markers', async (req, res) => {
  try {
    const allMarkers = await prisma.post.findMany()
    res.json(allMarkers)
  } 
  catch(e) {
    console.log('Error: ' + e)
  }
})
app.get('/category', async (req,res) => {
  try {
    const categories = await prisma.category.findMany()
    res.json(categories)
  } 
  catch(e) {
    console.log('Error: ' + e)
  }
})
app.post('/receive', (req, res) => {
    const newEntry = await prisma.post.create({
      data: {
        lat: req.body.lat,
        lon: req.body.lon,
        desc: req.body.desc,
        categoryType: req.body.categoryType,
      }
    });
    res.sendStatus(200);
})

module.exports = app;

