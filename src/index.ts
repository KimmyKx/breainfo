import { config as configEnv } from 'dotenv'
configEnv()
require('./utils/db')
require('./utils/prototype')
import express from 'express'
import cookieParser from 'cookie-parser'
import expressLayouts from 'express-ejs-layouts'
import routes from './utils/routes'
import fileupload from 'express-fileupload'
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(fileupload())
app.use(express.static('public'))
app.use(cookieParser())
app.set('views', 'public/views')
app.use(expressLayouts)
app.set('view engine', 'ejs')

app.use(routes)
app.use((req: any, res: any) => {
	res.status(404)
	res.render('404', { signed: false })
})

app.listen(PORT, () => console.log(`Running server on port ${PORT}`))