import { Request, Response, NextFunction } from "express";
import Todo from "../../schemas/Todo.schema";

const deleteTodo = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const todo = await Todo.findByIdAndRemove(req.params.id).select("-__v");

    if (!todo) return res.status(404).send("Todo was not found!");

    res.status(200).send(todo);
  } catch (err) {
    return res.status(400).send(err);
  }
};

export default deleteTodo;
