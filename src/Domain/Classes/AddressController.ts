import { Address } from "../../Entities/Address";

export class AddressController implements Address {
  constructor(
    private uf: string, 
    private city: string
  ) {}

  getCity(): string {
    return this.city;
  }

  getUF(): string {
    return this.uf;
  }

  setCity(city: string): void {
    this.city = city;
  }

  setUF(uf: string): void {
    this.uf = uf;
  }
}
