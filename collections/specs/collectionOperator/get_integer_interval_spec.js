import { get_integer_interval } from '../../practices/collectionOperator/get_integer_interval'

describe('get_integer_interval', function() {
  const collection_a = [1, 2, 3, 4, 5]
  const collection_b = [5, 4, 3, 2, 1]

  it.skip('根据给出的两个数字得到一个自增1的数字区间', function() {
    const result = get_integer_interval(1, 5)
    expect(result).toEqual(collection_a)
  })

  it.skip('根据给出的两个数字得到一个自减1的数字区间', function() {
    const result = get_integer_interval(5, 1)
    expect(result).toEqual(collection_b)
  })

  it.skip('给定两个相同的数字得到只含此数字的数组', function() {
    const result = get_integer_interval(5, 5)
    expect(result).toEqual([5])
  })
})
