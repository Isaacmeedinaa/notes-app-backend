import mongoose from "mongoose";
import ITodoDoc from "./ITodoDoc.contract";
import ITodo from "./ITodo.contract";

interface ITodoModel extends mongoose.Model<ITodoDoc> {
  build(todo: ITodo): ITodoDoc;
}

export default ITodoModel;
