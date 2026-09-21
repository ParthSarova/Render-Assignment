const express = require("express");
PORT = 8000;
const app = express();

app.post("/post", (req, res) => {
    res.send("Hello")
})

app.get("/get", (req, res) => {
    res.send("Get Page")
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})