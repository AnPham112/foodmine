import express from "express"
import cors from "cors"
// import * as dotenv from 'dotenv'
// dotenv.config()

const app = express();

// localhost:4200
// localhost:5000
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}))

app.get("/api/foods", (req, res) => {
    res.send("CCC")
})

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

