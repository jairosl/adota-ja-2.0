export interface Address {
  uf: string;
  city: string;

  getUF(): string;
  getCity(): string;

  setUF(uf: string): void;
  setCity(city: string): void;
}
