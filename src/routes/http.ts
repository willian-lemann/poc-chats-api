import { Router, Request, Response } from "express";

import { UsersService } from "../services/usersService";

export const routes = Router();

const usersService = new UsersService();

routes.get("/users", async (request: Request, response: Response) => {
  const users = await usersService.listAll();

  console.log(users);

  return response.json(users);
});

routes.post("/users", async (request: Request, response: Response) => {
  const { email, name } = request.body;

  return response.json(await usersService.create({ email, name }));
});
