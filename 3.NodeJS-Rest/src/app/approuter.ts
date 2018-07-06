import { NextFunction, Request, Response, Router } from "express";
import ExportController from "./controllers/export/export.controller";
import ImportController from "./controllers/import/import.controller";
import RootController from "./controllers/root/root.controller";

export default class AppRouter {
  private router: Router;

  constructor() {
    this.router = Router();
    this.setupRoutes();
  }

  public getRouter(): Router {
    return this.router;
  }

  private setupRoutes() {
    const rootController = new RootController();
    const importController = new ImportController();
    const exportController = new ExportController();

    this.router.use(rootController.getUrl(), rootController.getRouter());
    this.router.use(importController.getUrl(), importController.getRouter());
    this.router.use(exportController.getUrl(), exportController.getRouter());
    this.router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
      res.status(500).send(err.message);
    });
  }
}