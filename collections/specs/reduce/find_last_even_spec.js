import { find_last_even } from '../../practices/reduce/find_last_even'

describe('find_last_even', function() {
  const collection = [1, 11, 27, 20, 4, 9, 15]

  it.skip('找出给定集合元素的最后一个偶数', function() {
    const result = find_last_even(collection)

    expect(result).toEqual(4)
  })
})