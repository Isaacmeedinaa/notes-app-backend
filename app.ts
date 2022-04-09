import express from "express";
import cors from "cors";
import colors from "colors";
import db from "./config/db";
import routes from "./routes/routes";

const app = express();

app.use(express.json());
app.use(cors());
db();
app.use(routes);

const port = 2100;

app.listen(port, () =>
  console.log(colors.green(`Connected to port ${port} 🚀!`))
);
