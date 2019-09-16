import "dotenv/config"

import express, { Request, Response, Express } from "express"
import bodyParser from "body-parser"

const { PORT = 3000 } = process.env

const app: Express = express()

interface Device {
  id: string
  displayName: string
  color: string
  type: string
  state: string
}

let devices: Device[] = []

app.use(bodyParser.json())

app.get("/", (_req: Request, res: Response) => {
  return res.send({ status: "ok" })
})

app.get("/devices", (_req: Request, res: Response) => {
  return res.send({ data: devices })
})

app.get("/devices/:id", (req: Request, res: Response) => {
  const { id } = req.params
  if (!id) return res.status(400).send({ error: "device `id` is required." })

  const device = devices.find(d => d.id === id)
  if (!device) return res.status(404).send({ error: "device is not found." })
  return res.send({ data: devices })
})

app.post("/devices", (req: Request, res: Response) => {
  const { id, displayName, color, type, state } = req.body

  if (!id || !displayName || !color || !type || !state) {
    return res.status(400).send({
      error: "field `id, displayName, color, type, state` are required.",
    })
  }

  devices.push(req.body)

  return res.send({ success: true })
})

app.put("/devices/:id", (req: Request, res: Response) => {
  const { id } = req.params
  if (!id) return res.status(400).send({ error: "device `id` is required." })

  const index: number = devices.findIndex(x => x.id === id)
  if (index < 0) return res.status(404).send({ error: "device is not found." })

  const data = req.body as Device
  devices[index] = { ...devices[index], ...data }

  return res.status(200).send({ success: true, data: devices[index] })
})

app.delete("/devices/:id", (req: Request, res: Response) => {
  const { id } = req.params
  if (!id) return res.status(400).send({ error: "device `id` is required." })

  const device = devices.find(d => d.id === id)
  if (!device) return res.status(404).send({ error: "device is not found." })

  devices = devices.filter(d => d.id !== id)

  return res.send({ success: true, data: device })
})

app.post("/toggle/:id", (req: Request, res: Response) => {
  const { id } = req.params
  if (!id) return res.status(400).send({ error: "device `id` is required." })

  const index = devices.findIndex(x => x.id === id)
  if (index < 0) return res.status(404).send({ error: "device is not found." })

  const device = devices[index]
  const state = device.state === "on" ? "off" : "on"
  devices[index] = { ...devices[index], state }

  return res.status(200).send({ success: true, data: devices[index] })
})

app.listen(PORT, () => {
  console.log(`Server is running at 0.0.0.0:${PORT}`)
})
