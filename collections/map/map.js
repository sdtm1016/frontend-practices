import { multiplier, words } from '../utils'

export const mapToEven = (collection) => {
  return collection.map(multiplier(2))
}

export const mapToFourMultiplesAddOne = (collection) => {
  return collection.map((element) => element * 4 + 1)
}

export const mapToThreeMultiples = (collection) => {
  return collection.map(multiplier(3))
}

export const mapNumberToWord = (collection) => {
  return collection.map((number, index) => words[index])
}

export const mapNumberToWordOver26 = (collection) => {
  return [collection]
}

export const sortAscendingly = (collection) => {
  return [].concat(collection).sort((a, b) => a - b)
}

export const sortDescendingly = (collection) => {
  return [].concat(collection).sort((a, b) => b - a)
}
