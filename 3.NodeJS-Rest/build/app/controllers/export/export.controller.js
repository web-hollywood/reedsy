"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dbhelper_1 = __importDefault(require("../../_shared/dbhelper"));
const state_enum_1 = require("../../_shared/state.enum");
var ExportJobTypeEnum;
(function (ExportJobTypeEnum) {
    ExportJobTypeEnum["epub"] = "epub";
    ExportJobTypeEnum["pdf"] = "pdf";
})(ExportJobTypeEnum || (ExportJobTypeEnum = {}));
;
class ExportController {
    constructor() {
        this.getRootController = this.getRootController.bind(this);
        this.getListController = this.getListController.bind(this);
        this.postNewController = this.postNewController.bind(this);
        this.router = express_1.Router();
        this.setupRoutes();
    }
    getRouter() {
        return this.router;
    }
    getUrl() {
        return '/export';
    }
    setupRoutes() {
        this.router.get('/', this.getRootController);
        this.router.get('/list', this.getListController);
        this.router.post('/new', this.postNewController);
    }
    getRootController(req, res, next) {
        res.send('Export root');
    }
    getListController(req, res, next) {
        const result = {
            finished: [],
            pending: []
        };
        dbhelper_1.default.getExportRequests().map((e) => {
            if (e.state === state_enum_1.JobStateEnum.pending) {
                result.pending.push(e);
            }
            else if (e.state === state_enum_1.JobStateEnum.finished) {
                result.finished.push(e);
            }
        });
        res.send(JSON.stringify(result, null, 2));
    }
    postNewController(req, res, next) {
        let newExportRequestSchema;
        if (typeof req.body.bookId === "string" &&
            (req.body.type === ExportJobTypeEnum.epub ||
                req.body.type === ExportJobTypeEnum.pdf)) {
            const now = Date.now();
            newExportRequestSchema = {
                bookId: req.body.bookId,
                created_at: now,
                state: state_enum_1.JobStateEnum.pending,
                type: req.body.type,
                updated_at: now
            };
            const insertIndex = dbhelper_1.default.putExportRequest(newExportRequestSchema);
            const timeout = req.body.type === ExportJobTypeEnum.epub ? 10 * 1000 : 25 * 1000;
            setTimeout(() => {
                dbhelper_1.default.updateExportsAt(insertIndex, Object.assign({}, newExportRequestSchema, { state: state_enum_1.JobStateEnum.finished, updated_at: Date.now() }));
            }, timeout);
            res.send(newExportRequestSchema);
        }
        else {
            const err = new Error();
            err.message = 'Invalid data. Please input data in the following format : { bookId: string, type: "epub" | "pdf" }';
            next(err);
        }
    }
}
exports.default = ExportController;
