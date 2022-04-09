import mongoose from "mongoose";
import ITodo from "../contracts/ITodo.contract";
import ITodoModel from "../contracts/ITodoModel.contract";

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

todoSchema.statics.build = (todo: ITodo) => {
  return new Todo(todo);
};

const Todo = mongoose.model<any, ITodoModel>("Todo", todoSchema);

export default Todo;
