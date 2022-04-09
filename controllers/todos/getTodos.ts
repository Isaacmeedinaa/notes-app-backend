import { Request, Response, NextFunction } from "express";
import Todo from "../../schemas/Todo.schema";

const getTodos = async (req: Request, res: Response, next: NextFunction) => {
  const todos = await Todo.find().select("-__v");

  return res.send(todos);
};

export default getTodos;
