import { double_to_one } from '../../practices/flaten/double_dimensional_array_to_one_1'

describe('double_to_one', function() {
  const collection = [1, [2], [3, 4]]

  it.skip('把二维数组变成一维数组', function() {
    const result = double_to_one(collection)

    expect(result).toEqual([1, 2, 3, 4])
  })
})
