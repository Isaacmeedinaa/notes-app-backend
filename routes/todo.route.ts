import { Router } from "express";

import getTodos from "../controllers/todos/getTodos";
import createTodo from "../controllers/todos/createTodo";
import updateTodo from "../controllers/todos/updateTodo";
import deleteTodo from "../controllers/todos/deleteTodo";

const todoRoute = Router();

todoRoute.get("/", [], getTodos);
todoRoute.post("/", [], createTodo);
todoRoute.put("/:id", [], updateTodo);
todoRoute.delete("/:id", [], deleteTodo);

export default todoRoute;
