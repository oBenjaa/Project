import express, { Request, Response } from 'express'
import path from 'path'

const app = express()
const PORT = 3000

app.use(express.static(path.join(process.cwd(), 'src/public')))

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(process.cwd(), 'src/public/index.html'))
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})