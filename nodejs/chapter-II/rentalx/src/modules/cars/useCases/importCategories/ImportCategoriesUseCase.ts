import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

class ImportCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(file: unknown) {
    console.log(file);
  }
}

export { ImportCategoriesUseCase };
