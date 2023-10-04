import { proxy } from 'valtio'

const state = proxy({
  isDark: true,
  isLoading: true,
})

export default state
