// const http = require("http");
const express = require("express");

const port = 5000;

const server = express();
server.get("/hobbits", (req, res) => {
    res.send("Welcome to Hobbiton");
}) //Read Data

server.post("/hobbits", (req, res) => {
    res.status(201).json({ url: "/hobbits", operation: "POST" });
}); //Create Data

server.put("/hobbits", (req, res) => {
    res.status(200).json({ url: "/hobbits", operation: "PUT" });
}); //Update Data

server.delete('/hobbits/:id', (req, res) => {
    const id = req.params.id;
    // or we could destructure it like so: const { id } = req.params;
    res.status(200).json({
        url: `/hobbits/${id}`,
        operation: `DELETE for hobbit with id ${id}`,
    });
}); //Delete Data

server.listen(port, () => {
    console.group(`server listening on port ${port}`);
});