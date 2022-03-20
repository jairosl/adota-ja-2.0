export interface Address {
  getUF(): string;
  getCity(): string;

  setUF(uf: string): void;
  setCity(city: string): void;
}
