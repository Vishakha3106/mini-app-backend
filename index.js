const express = require("express")
const cors = require("cors")
const { db, storage } = require("./firebase")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/models", async (req, res) => {
  const snapshot = await db.collection("models").get()
  const models = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  res.json(models)
})

app.post("/upload", async (req, res) => {
  const { name, description, url } = req.body
  const newModel = await db.collection("models").add({
    name,
    description,
    url,
    uploadDate: new Date(),
  })
  res.json({ id: newModel.id, name, description, url })
})

app.listen(2000, () => console.log("Server running on port 2000"))
