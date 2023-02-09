import express from "express";
import swaggerUI from "swagger-ui-express";

import swaggerConfig from "../swagger.json";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.listen("3333", () => console.log("Server is running!"));
