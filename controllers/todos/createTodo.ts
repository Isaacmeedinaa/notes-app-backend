import { Request, Response, NextFunction } from "express";
import Todo from "../../schemas/Todo.schema";

const createTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { title, description } = req.body;

  try {
    let todo = Todo.build({ title: title, description: description });
    await todo.save();

    let foundTodo = await Todo.findById(todo._id).select("-__v");

    return res.status(200).send(foundTodo);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
};

export default createTodo;
