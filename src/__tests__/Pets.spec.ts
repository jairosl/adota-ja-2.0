import { PetController } from '../Domain/Classes/PetsController';

const sut = {
  pet: new PetController(
    'url_image', 
    'CAT', 
    'felix', 
    new Date('14/04/2020'),
    'SMALL'
  ),
  name: 'felix',
  birthDate: new Date('14/04/2020'),
  category: 'CAT',
  size: 'SMALL',
}

describe('Pets', () => {
  beforeEach(() => {
    sut.pet = new PetController(
    'url_image', 
    'CAT', 
    'felix', 
    new Date('14/04/2020'),
    'SMALL'
    )
  })

  it('should create Pet with name defined', () => {
    const { pet, name } = sut

    expect(pet.getName()).toEqual(name)
  })

  it('should create Pet with category defined', () => {
    const { pet, category } = sut

    expect(pet.getCategory()).toEqual(category)
  })

  it('should create Pet with size defined', () => {
    const { pet, size } = sut

    expect(pet.getSize()).toEqual(size)
  })

  it('should return age pet in mouths', () => {
    const { pet, birthDate } = sut

    const calAgeInMonths = 
      ((birthDate.getFullYear() - new Date().getFullYear()) * 12) 
      + birthDate.getMonth() ;

    expect(pet.getAgePerMonth()).toBe(calAgeInMonths)
    
  })

  it('should return age pet in mouths when pet born in current year', () => {
    const { pet } = sut
    const now = new Date()

    pet.setBirthDate(
      new Date(Number(now.getFullYear()), Number(now.getMonth() - 1), 20)
    )
    
    const mouths = now.getMonth() - (now.getMonth() - 1)

    expect(pet.getAgePerMonth()).toBe(mouths)
    
  })
})
