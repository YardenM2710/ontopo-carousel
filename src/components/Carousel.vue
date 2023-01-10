<template>
  <div v-if="slides" class="carousel-container">
    <div class="carousel">
      <CarouselItem @setSlide="setSlide" :direction="direction" :lang="lang" v-for="(slide, idx) in slides" :key="`item-${idx}`" :currSlide="currSlide" :index="idx" :slide="slide" :length="slides.length" />
      <BtnActions @next="next" @prev="prev" />
    </div>
    <div class="slide-indicator">
      <span v-for="dot in slides.length" :key="dot" @click="setSlide(dot)" :class="{ selected: isSelected(dot) }"></span>
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
    isSelected(dot) {
      return this.currSlide === dot - 1
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

<style></style>
