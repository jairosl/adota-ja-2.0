import { AddressController } from "../Domain/Classes/AddressController"
import { PetController } from "../Domain/Classes/PetsController"
import { UserController } from "../Domain/Classes/UserController"
import { PetPerCategoriesStrategy } from "../Strategy/PetPerCategoriesStrategy"

const makeSut = {
  user: new UserController(
    'example',
    '99 999999999', 
    'example@mail.com',
    'password', 
    new AddressController('PB', 'Santa Luzia'),

  ),
  cat: new PetController(
    'url_image', 
    'CAT', 
    'felix', 
    new Date('14/04/2020'),
    'SMALL'
  ),
  dog: new PetController(
    'url_image', 
    'DOG', 
    'rex', 
    new Date('14/04/2020'),
    'MEDIUM'
  ),
  others: new PetController(
    'url_image', 
    'OTHERS', 
    'chico', 
    new Date('14/04/2020'),
    'SMALL'
  ),
  filter: new PetPerCategoriesStrategy('CAT')
}

describe('User',() => {
  beforeEach(() => {
    makeSut.filter = new PetPerCategoriesStrategy('CAT')
    makeSut.user = new UserController(
      'example',
      '99 999999999', 
      'example@mail.com',
      'password', 
      new AddressController('PB', 'City'),
    )
  })

  it('should not add pet if session not exist', () => {
    const { user, cat } = makeSut

    user.addPet(cat)

    const allPets = user.getPets()

    expect(allPets).toBeNull()

  })

  it('should filter one cat and one dog', () => {
    const { user, cat, dog, filter } = makeSut

    user.login()
    user.addPet(cat)
    user.addPet(dog)

    const filteredCats = user.filterPet(filter)
    
    expect(filteredCats).toHaveLength(1)
    filter.setPropFilter('DOG')

    const filteredDogs = user.filterPet(filter)
    expect(filteredDogs).toHaveLength(1)
  })

  it('should create a new pet', () => {
    const { user, cat } = makeSut

    user.login()
    user.addPet(cat)

    const allPets = user.getPets()

    expect(allPets).toHaveLength(1)

  })

  it('should get all pets return null if pet creation goes wrong', () => {
    const { user } = makeSut

    const allPets = user.getPets()

    expect(allPets).toBeNull()

  })

  it('should create two pets and verify if exist two pets', () => {
    const { user, cat, dog } = makeSut

    user.login()
    user.addPet(cat)
    user.addPet(dog)

    const allPets = user.getPets()

    expect(allPets).toHaveLength(2)

  })

  it('should delete pet correctly', () => {
    const { user, cat } = makeSut

    user.login()
    user.addPet(cat)
    user.removePet(cat.getName())

    const allPets = user.getPets()

    expect(allPets).toBeNull()
  })

  it('should delete pet that not exist', () => {
    const { user, cat } = makeSut

    user.login()
    user.addPet(cat)
    user.removePet('random Pet')

    const allPets = user.getPets()

    expect(allPets).toHaveLength(1)
  })

  it('should filter cats from all pets', () => {
    const { user, cat, filter } = makeSut

    const catName = cat.getName()

    user.login()
    user.addPet(cat)
    user.addPet(cat)

    const filteredCats = user.filterPet(filter)

    const nameFirstCat = filteredCats !== null ? filteredCats[0].getName() : ''

    expect(catName).toEqual(nameFirstCat)

    expect(filteredCats).toHaveLength(2)
  })

  it('should return null if cats not exist', () => {
    const { user, filter } = makeSut

    const filteredCats = user.filterPet(filter)

    expect(filteredCats).toBeNull()
    
  })

  it('should create a new user section', () => {
    const { user } = makeSut
    
    user.login()
    const isStillLog = user.isLogin()

    expect(isStillLog).toBeTruthy()

  })

  it('should create a new user section', () => {
    const { user } = makeSut
    
    user.login()
    user.logout()

    const isStillLog = user.isLogin()

    expect(isStillLog).toBeFalsy()

  })

})
