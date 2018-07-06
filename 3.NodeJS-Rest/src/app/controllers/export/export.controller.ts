import { NextFunction, Request, Response, Router } from "express";
import IController from "../../_interfaces/icontroller.interface";
import DBHelper from '../../_shared/dbhelper';
import { JobStateEnum } from "../../_shared/state.enum";

enum ExportJobTypeEnum {
  epub = "epub",
  pdf = "pdf"
};

export default class ExportController implements IController {
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
    return '/export';
  }

  private setupRoutes() {
    this.router.get('/', this.getRootController);
    this.router.get('/list', this.getListController);
    this.router.post('/new', this.postNewController);
  }

  private getRootController(req: Request, res: Response, next: NextFunction) {
    res.send('Export root');
  }

  private getListController(req: Request, res: Response, next: NextFunction) {
    const result: {
      finished: any[],
      pending: any[]
    } = {
      finished: [],
      pending: []
    }

    DBHelper.getExportRequests().map((e: any) => {
      if (e.state === JobStateEnum.pending) {
        result.pending.push(e);
      } else if (e.state === JobStateEnum.finished) {
        result.finished.push(e);
      }
    });

    res.send(JSON.stringify(result, null, 2));
  }

  private postNewController(req: Request, res: Response, next: NextFunction) {
    let newExportRequestSchema: {
      bookId: string,
      created_at: number,
      type: ExportJobTypeEnum,
      state: JobStateEnum,
      updated_at: number
    };

    if (
      typeof req.body.bookId === "string" &&
      (req.body.type === ExportJobTypeEnum.epub ||
        req.body.type === ExportJobTypeEnum.pdf)
    ) {
      const now = Date.now();

      newExportRequestSchema = {
        bookId: req.body.bookId,
        created_at: now,
        state: JobStateEnum.pending,
        type: req.body.type,
        updated_at: now
      };

      const insertIndex = DBHelper.putExportRequest(newExportRequestSchema);
      const timeout = req.body.type === ExportJobTypeEnum.epub ? 10 * 1000 : 25 * 1000;

      setTimeout(() => {
        DBHelper.updateExportsAt(insertIndex, {
          ...newExportRequestSchema,
          state: JobStateEnum.finished,
          updated_at: Date.now()
        })
      }, timeout);

      res.send(newExportRequestSchema);
    } else {
      const err = new Error();
      err.message = 'Invalid data. Please input data in the following format : { bookId: string, type: "epub" | "pdf" }';
      next(err);
    }
  }
}