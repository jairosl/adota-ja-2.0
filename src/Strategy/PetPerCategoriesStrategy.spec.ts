import { PetController } from "../Domain/Classes/PetsController"
import { PetPerCategoriesStrategy } from "./PetPerCategoriesStrategy"

const makeSut = {
  cat: new PetController(
    'url_image', 
    'CAT', 
    'felix', 
    new Date('14/04/2020'),
    'SMALL'
  ),
  dogOne: new PetController(
    'url_image', 
    'DOG', 
    'rex', 
    new Date('14/04/2020'),
    'MEDIUM'
  ),
  dogTwo: new PetController(
    'url_image', 
    'DOG', 
    'rex', 
    new Date('14/04/2020'),
    'MEDIUM'
  ),
  filter: new PetPerCategoriesStrategy('CAT')
}

describe('Filter strategy per categories pet', () => {
  beforeEach(() => {
    makeSut.filter = new PetPerCategoriesStrategy('CAT')
  })

  it('should return length one by pet CAT category', () => {

    const {filter, cat, dogOne, dogTwo} = makeSut

    const data = [cat, dogOne, dogTwo]

    const result = filter.executeFilter(data)

    expect(result).not.toBeNull()
    expect(result?.length).toBe(1)
  })

  it('should return length two by pet DOG category', () => {

    const {filter, cat, dogOne, dogTwo} = makeSut

    const data = [cat, dogOne, dogTwo]

    filter.setPropFilter('DOG')

    const result = filter.executeFilter(data)

    expect(result).not.toBeNull()
    expect(result?.length).toBe(2)
  })

  it('should return Null by pet OTHERS category', () => {

    const {filter, cat, dogOne, dogTwo} = makeSut

    const data = [cat, dogOne, dogTwo]

    filter.setPropFilter('OTHERS')

    const result = filter.executeFilter(data)

    expect(result).toBeNull()
    
  })

  it('should return Null when array is empty', () => {

    const {filter} = makeSut

    const result = filter.executeFilter([])

    expect(result).toBeNull()  
  })
})
