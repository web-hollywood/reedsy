"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const export_controller_1 = __importDefault(require("./controllers/export/export.controller"));
const import_controller_1 = __importDefault(require("./controllers/import/import.controller"));
const root_controller_1 = __importDefault(require("./controllers/root/root.controller"));
class AppRouter {
    constructor() {
        this.router = express_1.Router();
        this.setupRoutes();
    }
    getRouter() {
        return this.router;
    }
    setupRoutes() {
        const rootController = new root_controller_1.default();
        const importController = new import_controller_1.default();
        const exportController = new export_controller_1.default();
        this.router.use(rootController.getUrl(), rootController.getRouter());
        this.router.use(importController.getUrl(), importController.getRouter());
        this.router.use(exportController.getUrl(), exportController.getRouter());
        this.router.use((err, req, res, next) => {
            res.status(500).send(err.message);
        });
    }
}
exports.default = AppRouter;
