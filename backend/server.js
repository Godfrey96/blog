import path from 'path'
import multer from 'multer'
import express from 'express'
import { config } from 'dotenv'
import colors from 'colors'
import morgan from 'morgan'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

import userRoutes from './routes/usersRoutes.js'
import postsRoutes from './routes/postsRoutes.js'
import categoriesRoutes from './routes/categoriesRoutes.js'

config()

const app = express()
// const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

if (process.env.MODE_ENV == 'development') {
    app.use(morgan('dev'))
}

app.use((express.json()))

connectDB()

app.get('/', (req, res) => {
    res.send('API is running...')
})

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename(req, file, cb) {
        cb(null, req.body.name)
    },
})

const upload = multer({ storage: storage })

app.post('/api/uploads', upload.single('file'), (req, res) => {
    res.status(200).json("File has been uploaded");
})

// user routes
app.use('/api/users', userRoutes)
// posts routes
app.use('/api/posts', postsRoutes)
// pcategories routes
app.use('/api/categories', categoriesRoutes)
// uploads images routes
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))