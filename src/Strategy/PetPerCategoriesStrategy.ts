import { Pets } from "../Entities/Pets";
import { CategoriesPets } from "../Types/CategoriesPet";
import { filterStrategy } from "../Types/FilterStrategy";

export class PetPerCategoriesStrategy implements filterStrategy {

  constructor(
    private propFilter: CategoriesPets
  ) {}

  setPropFilter(propFilter: CategoriesPets) {
    this.propFilter = propFilter
  }

  executeFilter(data: Pets[]): Pets[] | null {
    const petFilters = data
      .filter(pet => pet.getCategory() === this.propFilter)
    
    if(petFilters.length === 0) return null; 
    
    return petFilters;
  }
}
