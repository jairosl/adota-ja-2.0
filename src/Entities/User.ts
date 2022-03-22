import { filterStrategy } from "../Types/FilterStrategy";
import { Pets } from "./Pets";

export interface User {
  addPet(pet: Pets): void;
  getPets(): Array<Pets> | null;
  removePet(name: string): void;
  filterPet(strategy: filterStrategy): Array<Pets> | null;
  login(): void;
  logout(): void;
  isLogin(): boolean;
}
