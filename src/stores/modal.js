import { defineStore } from 'pinia'

const useModalStore = defineStore('modal', {
  state: () => ({
    isOpen: false
  }),
  getters: {
    hiddenClass(state) {
      return state.isOpen ? '' : 'hidden'
    }
  }
})

export default useModalStore
