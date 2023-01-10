import { createStore } from 'vuex'

const store = createStore({
  strict: true,
  state: {
    lang: 'en'
  },
  getters: {
    lang(state) {
      return state.lang
    },
    dir(state) {
      return state.lang === 'he' ? 'scale-he' : 'scale-en '
    }
  },
  mutations: {
    setLang(state, { lang }) {
      state.lang = state.lang === 'he' ? 'en' : 'he'
      console.log('state.lang ', state.lang)
    }
  }
})
export default store
