const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Get API from local host!\n");
});

app.post("/", (req, res) => {
    res.send("POST API from local host!\n");
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
