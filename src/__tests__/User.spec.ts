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

})
