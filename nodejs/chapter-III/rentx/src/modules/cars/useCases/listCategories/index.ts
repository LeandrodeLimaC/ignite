import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ListCategoryController } from "./ListCategoryController";
import { ListCategoryUseCase } from "./ListCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoryUseCase = new ListCategoryUseCase(categoriesRepository);
const listCategorycontroller = new ListCategoryController(listCategoryUseCase);

export { listCategorycontroller };
