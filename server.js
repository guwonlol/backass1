const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Path to data.json
const filePath = path.join(__dirname, "data.json");

// Helper functions
function readData() {
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw);
}

function writeData(data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

/* ======================
   DEMO ROUTES
====================== */

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.get("/time", (req, res) => {
  res.json({ time: new Date() });
});

app.get("/status", (req, res) => {
  res.status(200).json({ status: "OK" });
});

/* ======================
   BOOKS CRUD
====================== */

// GET all books
app.get("/books", (req, res) => {
  const data = readData();
  res.json(data.books);
});

// POST new book
app.post("/books", (req, res) => {
  const data = readData();

  const newBook = {
    id: Date.now(),
    name: req.body.name
  };

  data.books.push(newBook);
  writeData(data);

  res.status(201).json(newBook);
});

// PUT update book
app.put("/books/:id", (req, res) => {
  const data = readData();
  const id = Number(req.params.id);

  const book = data.books.find(b => b.id === id);

  if (!book) {
    return res.status(404).json({ error: "Book not found" });
  }

  book.name = req.body.name;
  writeData(data);

  res.json(book);
});

// DELETE book
app.delete("/books/:id", (req, res) => {
  const data = readData();
  const id = Number(req.params.id);

  const index = data.books.findIndex(b => b.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Book not found" });
  }

  data.books.splice(index, 1);
  writeData(data);

  res.json({ success: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
