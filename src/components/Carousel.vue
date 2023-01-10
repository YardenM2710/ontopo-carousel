<template>
  <div v-if="slides" class="carousel-container">
    <div class="carousel">
      <CarouselItem @changeUrl="editSlide" @setSlide="setSlide" :direction="direction" :lang="lang" v-for="(slide, idx) in slides" :key="`item-${idx}`" :currSlide="currSlide" :index="idx" :slide="slide" :length="slides.length" />
      <BtnActions @next="next" @prev="prev" />
    </div>
    <div class="slide-indicator">
      <span v-for="swiper in slides.length" :key="swiper" @click="setSlide(swiper)" :class="{ selected: isSelected(swiper) }"></span>
    </div>
  </div>
</template>

<script>
import BtnActions from './BtnActions.vue'
import CarouselItem from './CarouselItem.vue'
export default {
  components: { CarouselItem, BtnActions },
  props: ['slides'],
  data() {
    return {
      currSlide: 0,
      direction: 'right'
    }
  },
  computed: {
    lang() {
      return this.$store.getters.lang
    }
  },
  methods: {
    editSlide(newUrl) {
      this.$store.dispatch({ type: 'editSlide', slide: this.currSlide, newUrl })
    },
    isSelected(swiper) {
      return this.currSlide === swiper - 1
    },
    setSlide(selectedSlide) {
      this.currSlide = selectedSlide - 1
    },
    next() {
      this.currSlide = this.currSlide >= this.slides.length - 1 ? 0 : this.currSlide + 1
      this.direction = 'right'
    },
    prev() {
      this.currSlide = this.currSlide === 0 ? this.slides.length - 1 : this.currSlide - 1
      this.direction = 'left'
    }
  }
}
</script>
