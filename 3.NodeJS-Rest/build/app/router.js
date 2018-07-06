"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AppRouter {
    constructor() {
        this.router = express_1.Router();
        this.setupRoutes();
    }
    setupRoutes() {
        this.router.get('/', (req, res, next) => {
            res.send("YAY!!!");
        });
    }
    getRouter() {
        return this.router;
    }
}
exports.default = AppRouter;
