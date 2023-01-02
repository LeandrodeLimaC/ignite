import { Category } from "../models/Category";
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from "./ICategoriesRepository";

class PostgresCategoriesRepository implements ICategoriesRepository {
  create({ description, name }: ICreateCategoryDTO): void {
    console.log({ description, name });
    return null;
  }
  getAll(): Category[] {
    return null;
  }
  findByName(name: string): Category {
    return null;
  }
}

export { PostgresCategoriesRepository };
