import { createStore } from 'vuex'
import { carouselService } from '../services/carousel.service.js'

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
    setSlides(state, { slides }) {
      state.slides = slides
    },
    setLang(state, { lang }) {
      state.lang = lang
    }
  },
  actions: {
    loadSlides({ commit }) {
      try {
        const slides = carouselService.getCarouselData()
        commit({ type: 'setSlides', slides })
        return slides
      } catch {
        console.error('Couldnt load slides')
      }
    }
  }
})
export default store
