import { number_map_to_word } from '../../practices/map/number_map_to_word'

describe('number map to word', function() {
  const collection_a = [1, 2, 3, 4, 5]
  const collection_b = ['a', 'b', 'c', 'd', 'e']

  it.skip('数字映射为字母', function() {
    const result = number_map_to_word(collection_a)
    expect(result).toEqual(collection_b)
  })
})