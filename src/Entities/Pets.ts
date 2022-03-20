import { CategoriesPets } from "../Types/CategoriesPet";
import { SizesPets } from "../Types/SizePet";

export interface Pets {
  getAgePerMonth(): number;
  getName(): string;
  getCategory(): CategoriesPets;
  getSize(): SizesPets;
  setBirthDate(date: Date): void;
}
