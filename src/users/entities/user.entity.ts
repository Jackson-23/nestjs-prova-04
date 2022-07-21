import { Category } from "src/category/entities/category.entity";

export class User {
  id?: string;
  name?: string;
  email?: string;
  password?: string;
  category?: Category;
}
