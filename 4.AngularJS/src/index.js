const app = require("./app");
// @ts-ignore
require("./app.scss");

// setup services
app.service("BookService", require("./services/books")).controller(
    "BooksController",
    require("./controllers/books")
);
