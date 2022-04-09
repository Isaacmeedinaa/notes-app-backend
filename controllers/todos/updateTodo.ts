import { Request, Response, NextFunction } from "express";
import Todo from "../../schemas/Todo.schema";

const updateTodo = async (req: Request, res: Response, next: NextFunction) => {
  const { title, description } = req.body;

  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        title: title,
        description: description,
      },
      { new: true }
    ).select("-__v");

    if (!todo) return res.status(404).send("Product was not found!");

    return res.status(200).send(todo);
  } catch (err) {
    return res.status(400).send(err);
  }
};

export default updateTodo;
