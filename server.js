const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let books = []; // temporary "database"

// 🔹 Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// 🔹 Add new book (may description na)
app.post("/books", (req, res) => {
  const { title, author, description } = req.body;
  const newBook = {
    id: Date.now(),
    title,
    author,
    description: description || "", // default empty string kung walang laman
  };
  books.push(newBook);
  res.json(newBook);
});

// 🔹 Delete book by ID
app.delete("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);
  books = books.filter((b) => b.id !== id);
  res.json({ message: "Book deleted" });
});

// 🔹 Start server
app.listen(5000, () => console.log("Server running on port 5000"));
