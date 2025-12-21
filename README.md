backass1 – Express with CRUD API

This project is a simple backend application built with Node.js and Express.
The goal of the project is to practice creating a REST API with basic CRUD
(Create, Read, Update, Delete) operations and JSON file storage.

The application works with a custom object type called Books.
Each book has a unique id and a name.
All data is stored locally in a `data.json` file.

---

 How to install dependencies

First, make sure you have Node.js installed on your computer.

Then open a terminal in the project folder and run:

npm install

This command will install all required dependencies (Express).

---

 How to run the server

After installing dependencies, start the server with the following command:

node server.js

If everything works correctly, you will see a message like:

Server started on port 3000

The server will run on:
http://localhost:3000

---

 API routes

The following API routes are implemented in this project:

GET /  
Returns a simple text message to confirm that the server is running.

GET /hello  
Returns a JSON message from the server.

GET /time  
Returns the current server time.

GET /status  
Returns status 200 and a simple JSON response.

CRUD routes for books:

GET /books  
Returns all books stored in `data.json`.

POST /books  
Creates a new book and saves it to `data.json`.

PUT /books/:id  
Updates the name of an existing book by its id.
If the book does not exist, the server returns 404.

DELETE /books/:id  
Deletes a book by its id and returns `{ success: true }`.

---

 Example Postman requests

Create a new book (POST /books):

URL:
http://localhost:3000/books

Body (JSON):

{
  "name": "ORV"
}

---

Update a book (PUT /books/:id):

URL:
http://localhost:3000/books/BOOK_ID

Body (JSON):

{
  "name": "ORV"
}

Status was a success
---

Delete a book (DELETE /books/:id):

URL:
http://localhost:3000/books/BOOK_ID

---

Get all books (GET /books):

URL:
http://localhost:3000/books
