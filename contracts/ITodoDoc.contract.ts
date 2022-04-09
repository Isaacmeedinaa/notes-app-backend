import mongoose from "mongoose";

// Defines the accepted structure of a Todo Document
interface ITodoDoc extends mongoose.Document {
  title: string;
  description: string;
}

export default ITodoDoc;
