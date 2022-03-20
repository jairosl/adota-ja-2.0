import { Pets } from "../../Entities/Pets";
import { CategoriesPets } from "../../Types/CategoriesPet";
import { SizesPets } from "../../Types/SizePet";


export class PetController implements Pets {

  constructor(
    private imagePet: string, 
    private category: CategoriesPets,
    private name: string,
    private birthDate: Date,
    private size: SizesPets,
  ) {}

  getAgePerMonth(): number {
    const currentYear = new Date().getFullYear();
    
    const calAgeYear = Number(currentYear - this.birthDate.getFullYear());
    
    if ( calAgeYear === 0) {
      const currentMonth = Number(new Date().getMonth());
      const mouthPet = this.birthDate.getMonth();
      
      return  currentMonth - mouthPet
    }

    return (calAgeYear * 12) + this.birthDate.getMonth();
  }

  getCategory(): CategoriesPets {
    return this.category;
  }
  
  getName(): string {
    return this.name;
  }

  getSize(): SizesPets {
    return this.size;
  }

  setBirthDate(date: Date): void {
    this.birthDate = date;
  }
}
