import { Router, Request, Response } from "express";

export const routes = Router();

routes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "ok" });
});
