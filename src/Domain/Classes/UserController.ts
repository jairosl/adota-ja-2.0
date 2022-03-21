import { Address } from "../../Entities/Address";
import { Pets } from "../../Entities/Pets";
import { Session } from "../../Entities/Session";
import { User } from "../../Entities/User";
import { filterStrategy } from "../../Types/FilterStrategy";
import { SessionController } from "./SessionController";


export class UserController implements User {
  private pets: Array<Pets> = [];
  private session: Session = new SessionController();
  private token: string = "";


  constructor(
    private name: string,
    private phone: string,
    private email: string, 
    private password: string,
    private address: Address,
  ) {}

  addPet(pet: Pets): void {
    
  }

  getPets(name: string): Pets[] | null {
    return []
  }

  removePet(name: string): void {
    
  }

  filterPet(strategy: filterStrategy): Pets[] | null {
    return []
  }

  login(): void {
    
  }

  logout(): void {
    
  }

  isLogin(): boolean {
    return true
  }
}
