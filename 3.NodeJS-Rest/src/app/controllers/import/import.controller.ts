import { NextFunction, Request, Response, Router } from "express";
import IController from "../../_interfaces/icontroller.interface";
import DBHelper from "../../_shared/dbhelper";
import { JobStateEnum } from "../../_shared/state.enum";

enum ImportJobTypeEnum {
  word = "epub",
  pdf = "pdf",
  wattpad = "wattpad",
  evernote = "evernote"
};

export default class ImportController implements IController {
  private router: Router;

  constructor() {
    this.getRootController = this.getRootController.bind(this);
    this.getListController = this.getListController.bind(this);
    this.postNewController = this.postNewController.bind(this);

    this.router = Router();
    this.setupRoutes();
  }

  public getRouter(): Router {
    return this.router;
  }

  public getUrl() {
    return '/import';
  }

  private setupRoutes() {
    this.router.get('/', this.getRootController);
    this.router.get('/list', this.getListController);
    this.router.post('/new', this.postNewController);
  }

  private getRootController(req: Request, res: Response, next: NextFunction) {
    res.send('Import root');
  }

  private getListController(req: Request, res: Response, next: NextFunction) {
    const result: {
      finished: any[],
      pending: any[]
    } = {
      finished: [],
      pending: []
    }

    DBHelper.getImportRequests().map((e: any) => {
      if (e.state === JobStateEnum.pending) {
        result.pending.push(e);
      } else if (e.state === JobStateEnum.finished) {
        result.finished.push(e);
      }
    });

    res.send(JSON.stringify(result, null, 2));
  }

  private postNewController(req: Request, res: Response, next: NextFunction) {
    let newImportRequestSchema: {
      bookId: string,
      created_at: number,
      type: ImportJobTypeEnum,
      state: JobStateEnum,
      url: string,
      updated_at: number
    };

    if (
      typeof req.body.bookId === "string" &&
      typeof req.body.url === "string" &&
      (req.body.type === ImportJobTypeEnum.word ||
        req.body.type === ImportJobTypeEnum.pdf ||
        req.body.type === ImportJobTypeEnum.wattpad ||
        req.body.type === ImportJobTypeEnum.evernote)
    ) {
      const now = Date.now();

      newImportRequestSchema = {
        bookId: req.body.bookId,
        created_at: now,
        state: JobStateEnum.pending,
        type: req.body.type,
        updated_at: now,
        url: req.body.url
      };

      const insertIndex = DBHelper.putImportRequest(newImportRequestSchema);
      const timeout = 60 * 1000;

      setTimeout(() => {
        DBHelper.updateImportsAt(insertIndex, {
          ...newImportRequestSchema,
          state: JobStateEnum.finished,
          updated_at: Date.now()
        })
      }, timeout);

      res.send(newImportRequestSchema);
    } else {
      const err = new Error();
      err.message = 'Invalid data. Please input data in the following format : { bookId: string, type: "word" | "pdf" | "wattpad" | "evernote", url: string }';
      next(err);
    }
  }
}