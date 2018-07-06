"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class RootController {
    constructor() {
        this.rootController = this.rootController.bind(this);
        this.startTime = Date.now();
        this.router = express_1.Router();
        this.setupRoutes();
    }
    getRouter() {
        return this.router;
    }
    getUrl() {
        return '/';
    }
    setupRoutes() {
        this.router.get('/', this.rootController);
    }
    rootController(req, res, next) {
        const that = this;
        const result = {
            started: new Date(that.startTime),
            uptime: Date.now() - that.startTime
        };
        res.send(result);
    }
}
exports.default = RootController;
