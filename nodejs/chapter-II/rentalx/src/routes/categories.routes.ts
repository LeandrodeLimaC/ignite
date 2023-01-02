import { Router } from "express";

import { CategoriesRepository } from "../modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/cars/useCases/createCategories";

const categoriesRoutes = Router();
const categoryRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  const allCategories = categoryRepository.getAll();

  return response.status(200).json(allCategories);
});

export { categoriesRoutes };
