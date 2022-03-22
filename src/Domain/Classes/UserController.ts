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
    if (!this.isLogin()) return

    this.pets.push(pet)
  }

  getPets(): Pets[] | null {
    if (this.pets.length === 0) return null
    return this.pets
  }

  removePet(name: string): void {
    const removedPet = this.pets.filter(pet => pet.getName() !== name)
    this.pets = removedPet
  }

  filterPet(strategy: filterStrategy): Pets[] | null {
    const result = strategy.executeFilter(this.pets)
    return result
  }

  login(): void {
    const session = this.session.createSession(this.email, this.password)

    this.token = session.token
  }

  logout(): void {
    this.session.removeSession(this.token)
    this.token = ''
  }

  isLogin(): boolean {
    return this.session.isValidToken(this.token, this.email)
  }
}
