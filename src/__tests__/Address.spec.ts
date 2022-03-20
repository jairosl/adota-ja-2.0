import { AddressController } from "../Domain/Classes/AddressController"

const sut = {
  uf: 'PB',
  city: 'Santa Luzia',
  address: new AddressController('PB', 'Santa Luzia'),
}

describe('Address', () => {
  it('should create new address', () => {
    const { address, city, uf } = sut

    expect(address.getUF()).toEqual(uf)
    expect(address.getCity()).toEqual(city)
    
  })

  it('should create edit address', () => {
    const { address } = sut

    const [ newUf, newCity]  = [ 'SP', 'São Paulo'];

    address.setCity(newCity);
    address.setUF(newUf);

    expect(address.getUF()).toEqual(newUf)
    expect(address.getCity()).toEqual(newCity)
    
  })
})
