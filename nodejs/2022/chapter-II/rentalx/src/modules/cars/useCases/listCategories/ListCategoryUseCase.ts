import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ListCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute() {
    const allCategories = this.categoryRepository.getAll();

    return allCategories;
  }
}

export { ListCategoryUseCase };
