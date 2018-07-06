import { NextFunction, Request, Response, Router } from "express";
import IController from '../../_interfaces/icontroller.interface';

export default class RootController implements IController {
  private router: Router;
  private startTime: number;

  constructor() {
    this.rootController = this.rootController.bind(this);

    this.startTime = Date.now();
    this.router = Router();
    this.setupRoutes();
  }

  public getRouter(): Router {
    return this.router;
  }

  public getUrl() {
    return '/';
  }

  private setupRoutes() {
    this.router.get('/', this.rootController);
  }

  private rootController(req: Request, res: Response, next: NextFunction) {
    const that = this;
    const result = {
      started: new Date(that.startTime),
      uptime: Date.now() - that.startTime
    };

    res.send(result);
  }
}