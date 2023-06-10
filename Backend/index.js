const express = require('express');
const server = express();

const port = 3000;

server.use(express.json());

const users = []

server.get('/users', (req, res) => {
    res.status(200).json(users);
});

server.post("/user", (req, res) => {
    const { name } = req.body;
    users.push(name);
    res.status(200).send("User added");
});

server.listen(port, () => console.log(`Server running on port ${port}`));
