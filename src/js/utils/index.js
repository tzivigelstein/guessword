import getWordOfTheDay from './getWordOfTheDay'

const $ = param => document.querySelector(param)
const $$ = param => document.querySelectorAll(param)

export default { $, $$, getWordOfTheDay }
