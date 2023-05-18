const multer = require("multer")
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '_' + file.originalname
        req.body.uniqueFileName = uniqueName
        cb(null, uniqueName)
    }
})

module.exports = storage

