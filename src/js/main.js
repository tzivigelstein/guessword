import utils from './utils/index.js'
import words from 'an-array-of-spanish-words'
import Swal from 'sweetalert2'

const { $, $$ } = utils

const wordsList = []

const form = $('.mainContainer')

const wordOfTheDay = 'increible'

const [afterHint, beforeHint] = $$('.hint')

form.addEventListener('submit', e => {
  e.preventDefault()
  const userWord = e.target.elements.word.value.toLowerCase()

  if (userWord === '') return
  if (wordsList.includes(userWord)) return
  if (!words.includes(userWord)) return
  if (userWord === wordOfTheDay) {
    Swal.fire({
      title: '¡Felicidades!',
      text: '¡Has encontrado la palabra del día!',
      icon: 'success'
    })
    return
  }

  wordsList.push(userWord)

  const [beforeWords, afterWords] = getBeforeAndAfterWords(wordsList)

  const beforeWordsContainer = $('.beforeWordsContainer')
  const afterWordsContainer = $('.afterWordsContainer')

  if (userWord < wordOfTheDay) {
    const afterWord = $('#afterWord')
    afterWord.innerText = afterWords[0]

    afterWordsContainer.innerHTML = ''

    afterWords.length !== 0 &&
      afterWords.forEach((word, index) => {
        const wordElement = createWordElement({ word, index })
        afterWordsContainer.appendChild(wordElement)
      })

    afterHint.classList.remove('hiddenHint')
  } else {
    const beforeWord = $('#beforeWord')
    beforeWord.innerText = beforeWords[0]

    beforeWordsContainer.innerHTML = ''
    beforeWords.length !== 0 &&
      beforeWords.forEach((word, index) => {
        const wordElement = createWordElement({ word, index })
        beforeWordsContainer.appendChild(wordElement)
      })

    beforeHint.classList.remove('hiddenHint')
  }

  e.target.elements.word.value = ''
})

function getBeforeAndAfterWords(wordsList) {
  const sortedWords = wordsList.sort(function (a, b) {
    if (a < b) {
      return -1
    }
    if (a > b) {
      return 1
    }
    return 0
  })

  const afterWords = sortedWords
    .filter(word => word < wordOfTheDay)
    .sort(function (a, b) {
      if (a < b) {
        return 1
      }
      if (a > b) {
        return -1
      }
      return 0
    })
  const beforeWords = sortedWords.filter(word => word > wordOfTheDay)

  return [beforeWords, afterWords]
}

function createWordElement({ word, index }) {
  const wordElement = document.createElement('li')
  wordElement.classList.add('pastWord')
  wordElement.style.fontSize = `${1.5 / (index / 10 + 1)}rem`
  wordElement.innerText = word
  return wordElement
}
