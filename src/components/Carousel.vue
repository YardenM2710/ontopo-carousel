<template>
  <div v-if="slides" class="carousel-container">
    <div class="carousel">
      <carousel-item @setSlide="setSlide" :direction="direction" :lang="lang" v-for="(slide, idx) in slides" :key="`item-${idx}`" :currSlide="currSlide" :index="idx" :slide="slide" :length="slides.length" />
      <btn-actions @next="moveSlideNext" @prev="moveSlideBack" />
    </div>
    <!-- <div class="img-dots">
      <span v-for="dot in slides.length" :key="dot" @click="setSlide(dot)" :class="{ selected: isSelected(dot) }"></span>
    </div> -->
  </div>
</template>

<script>
import BtnActions from './BtnActions.vue'
import CarouselItem from './CarouselItem.vue'
export default {
  components: { CarouselItem, BtnActions },
  props: ['slides', 'lang'],
  data() {
    return {
      currSlide: 0,
      transitionName: 'fade',
      direction: 'right'
    }
  },
  computed: {},
  methods: {
    isSelected(dot) {
      return this.currSlide === dot - 1
    },
    setSlide(selectedSlide) {
      console.log('selectedSlide', selectedSlide)

      this.currSlide = selectedSlide - 1
    },
    moveSlideNext() {
      // this.currSlide = this.currSlide >= this.slides.length - 1 ? 0 : this.currSlide + 1
      this.currSlide = (this.currSlide + 1) % this.slides.length
      this.direction = 'right'
    },
    moveSlideBack() {
      // this.currSlide = this.currSlide === 0 ? this.slides.length - 1 : this.currSlide - 1
      this.currSlide = (this.currSlide - 1 + this.slides.length) % this.slides.length
      this.direction = 'left'
    }
  }
}
</script>

<style></style>
