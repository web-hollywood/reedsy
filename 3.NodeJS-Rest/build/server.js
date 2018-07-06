"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const approuter_1 = __importDefault(require("./app/approuter"));
// Create a new express application instance
const app = express_1.default();
// The port the express app will listen on
const port = Number.parseInt(process.env.PORT || '3000');
app.use(body_parser_1.json());
app.use(body_parser_1.urlencoded({
    extended: true
}));
// Mount Application Router
app.use(new approuter_1.default().getRouter());
// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
