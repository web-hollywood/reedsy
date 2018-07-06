"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dbhelper_1 = __importDefault(require("../../_shared/dbhelper"));
const state_enum_1 = require("../../_shared/state.enum");
var ImportJobTypeEnum;
(function (ImportJobTypeEnum) {
    ImportJobTypeEnum["word"] = "epub";
    ImportJobTypeEnum["pdf"] = "pdf";
    ImportJobTypeEnum["wattpad"] = "wattpad";
    ImportJobTypeEnum["evernote"] = "evernote";
})(ImportJobTypeEnum || (ImportJobTypeEnum = {}));
;
class ImportController {
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
        return '/import';
    }
    setupRoutes() {
        this.router.get('/', this.getRootController);
        this.router.get('/list', this.getListController);
        this.router.post('/new', this.postNewController);
    }
    getRootController(req, res, next) {
        res.send('Import root');
    }
    getListController(req, res, next) {
        const result = {
            finished: [],
            pending: []
        };
        dbhelper_1.default.getImportRequests().map((e) => {
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
        let newImportRequestSchema;
        if (typeof req.body.bookId === "string" &&
            typeof req.body.url === "string" &&
            (req.body.type === ImportJobTypeEnum.word ||
                req.body.type === ImportJobTypeEnum.pdf ||
                req.body.type === ImportJobTypeEnum.wattpad ||
                req.body.type === ImportJobTypeEnum.evernote)) {
            const now = Date.now();
            newImportRequestSchema = {
                bookId: req.body.bookId,
                created_at: now,
                state: state_enum_1.JobStateEnum.pending,
                type: req.body.type,
                updated_at: now,
                url: req.body.url
            };
            const insertIndex = dbhelper_1.default.putImportRequest(newImportRequestSchema);
            const timeout = 60 * 1000;
            setTimeout(() => {
                dbhelper_1.default.updateImportsAt(insertIndex, Object.assign({}, newImportRequestSchema, { state: state_enum_1.JobStateEnum.finished, updated_at: Date.now() }));
            }, timeout);
            res.send(newImportRequestSchema);
        }
        else {
            const err = new Error();
            err.message = 'Invalid data. Please input data in the following format : { bookId: string, type: "word" | "pdf" | "wattpad" | "evernote", url: string }';
            next(err);
        }
    }
}
exports.default = ImportController;
