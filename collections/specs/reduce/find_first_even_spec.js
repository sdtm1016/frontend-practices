import { find_first_even } from '../../practices/reduce/find_first_even'

describe('find_first_even', function() {
  const collection = [1, 11, 27, 20, 4, 9, 15]

  it.skip('找出给定集合元素的第一个偶数', function() {
    const result = find_first_even(collection)

    expect(result).toEqual(20)
  })
})