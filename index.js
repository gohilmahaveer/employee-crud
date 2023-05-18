require('./database')
const express = require('express')
const multer = require('multer')
const storage = require('./fileupload')
const upload = multer({storage: storage})
const app = express()
const {join} = require("path")
const empDb = require('./model')

app.use(express.json())

app.use(express.static(join(__dirname, 'public')))

app.get('/', async (req, res) => {
    const data = await empDb.find()
    res.status(200).json(data)
})

app.post('/', upload.single('photo'), async (req, res) => {
    const data = await empDb.create(req.body)
    res.status(200).json(data)
})

app.get('/(:id)', async (req, res) => {
    res.status(200).json(await empDb.findById(req.params.id))
})

app.post('/update/(:id)', async (req, res) => {
    const data = await empDb.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(data)

})

app.post('/delete/(:id)', async (req, res) => {
    const data = await empDb.findByIdAndDelete(req.params.id)
    res.status(200).json({data: "Data Deleted Successfully"})
})

app.listen(3000, () => {
    console.log("Server up and running on port 3000")
})