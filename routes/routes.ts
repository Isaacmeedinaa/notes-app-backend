import { Router } from "express";

import todoRoute from "./todo.route";

const routes = Router();

routes.use("/api/v1/todos", todoRoute);

export default routes;
