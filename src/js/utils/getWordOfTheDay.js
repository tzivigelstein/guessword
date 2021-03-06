import dictionary from '../dictionary.js'

export default function getWordOfTheDay() {
  const now = new Date()
  const start = new Date(2022, 1, 15)
  const diff = Number(now) - Number(start)
  let day = Math.floor(diff / (1000 * 60 * 60 * 24))
  while (day > dictionary.length) {
    day -= dictionary.length
  }
  return dictionary[day]
}
