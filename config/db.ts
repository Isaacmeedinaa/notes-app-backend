import mongoose from "mongoose";
import colors from "colors";

const db = () => {
  mongoose
    .connect(
      "mongodb+srv://root:Walmart123@cluster0.mosh3.mongodb.net/Cluster0?retryWrites=true&w=majority"
    )
    .then(() => console.log(colors.green("Connected to MongoDB 🙌!")))
    .catch((e) => console.log(colors.red(e)));
};

export default db;
