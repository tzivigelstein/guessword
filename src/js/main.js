import utils from './utils/index.js'
import words from 'an-array-of-spanish-words'

const { $ } = utils

const wordsList = []

const form = $('.mainContainer')

const wordOfTheDay = 'Increible'

form.addEventListener('submit', e => {
  e.preventDefault()
  const userWord = e.target.elements.word.value

  if (userWord === '') return
  if (wordsList.includes(userWord)) return
  if (!words.includes(userWord)) return

  wordsList.push(userWord)
  e.target.elements.word.value = ''
  showBeforeAndAfter()
})

function showBeforeAndAfter() {
  const sortedWords = wordsList.sort(function (a, b) {
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  })

  console.log(sortedWords)
}
