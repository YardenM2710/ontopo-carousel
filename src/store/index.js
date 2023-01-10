import { createStore } from 'vuex'
import { carouselService } from '../services/carousel.service.js'

const store = createStore({
  strict: true,
  state: {
    lang: 'en',
    slides: null
  },
  getters: {
    slides(state) {
      return state.slides
    },
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
      console.log('copySlides', state.slides)
    },
    setLang(state, { lang }) {
      state.lang = lang
    }
  },
  actions: {
    async loadSlides({ commit }) {
      try {
        const slides = await carouselService.getCarouselData()
        commit({ type: 'setSlides', slides })
        return slides
      } catch {
        console.error('Couldnt load slides')
      }
    },
    async editSlide(context, { slide, newUrl }) {
      try {
        const { slides } = context.state
        let copySlides = JSON.parse(JSON.stringify(slides))
        const slideToEdit = copySlides.find((currSlide, idx) => idx === slide)
        slideToEdit.imgUrl = newUrl
        context.commit({ type: 'setSlides', slides: copySlides })
        return slideToEdit
      } catch {
        console.error('Couldnt load slides')
      }
    }
  }
})
export default store
