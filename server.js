const express = require("express");
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.static("public"))
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public")
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

