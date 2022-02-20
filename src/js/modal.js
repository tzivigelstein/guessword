import utils from './utils/index.js'

const { $ } = utils

const closeModalButton = $('.closeModalButton')
const openModalButton = $('.openModalButton')
const modalContainer = $('.modalContainer')

openModalButton.addEventListener('click', () => {
  modalContainer.classList.add('modalActive')
})

closeModalButton.addEventListener('click', () => {
  modalContainer.classList.remove('modalActive')
})
