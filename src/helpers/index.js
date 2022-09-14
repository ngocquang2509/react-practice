import { KEY } from '../constants'

export const saveLocalStorage = value => {
  localStorage.setItem(KEY, JSON.stringify(value))
}

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem(KEY))
}
