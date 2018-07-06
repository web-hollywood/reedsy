import { Router } from "express";

export default interface IController {
  getUrl(): string;
  getRouter(): Router
}