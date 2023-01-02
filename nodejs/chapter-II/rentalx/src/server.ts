import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationRoutes } from "./routes/specifications.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationRoutes);

app.get("/", (request, response) => {
  response.json({ message: "Hello world" });
});

app.listen("3333", () => console.log("Server is running!"));