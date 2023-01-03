import { Router } from "express";

import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { listCategorycontroller } from "../modules/cars/useCases/listCategories";

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategorycontroller.handle(request, response);
});

export { categoriesRoutes };
