<template>
  <div v-if="slides" class="carousel-container">
    <div class="carousel">
      <button @click="moveSlideBack()" class="btn back-btn">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="50" height="50" viewBox="0 0 256 256" xml:space="preserve">
          <defs></defs>
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path
              d="M 65.75 90 c 0.896 0 1.792 -0.342 2.475 -1.025 c 1.367 -1.366 1.367 -3.583 0 -4.949 L 29.2 45 L 68.225 5.975 c 1.367 -1.367 1.367 -3.583 0 -4.95 c -1.367 -1.366 -3.583 -1.366 -4.95 0 l -41.5 41.5 c -1.367 1.366 -1.367 3.583 0 4.949 l 41.5 41.5 C 63.958 89.658 64.854 90 65.75 90 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 1"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
          </g>
        </svg>
      </button>
      <carousel-item :direction="direction" :lang="lang" v-for="(slide, idx) in slides" :key="`item-${idx}`" :currSlide="currSlide" :index="idx" :slide="slide" />

      <button @click="moveSlideNext()" class="btn next-btn">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="50" height="50" viewBox="0 0 256 256" xml:space="preserve">
          <defs></defs>
          <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
            <path
              d="M 24.25 90 c -0.896 0 -1.792 -0.342 -2.475 -1.025 c -1.367 -1.366 -1.367 -3.583 0 -4.949 L 60.8 45 L 21.775 5.975 c -1.367 -1.367 -1.367 -3.583 0 -4.95 c 1.367 -1.366 3.583 -1.366 4.95 0 l 41.5 41.5 c 1.367 1.366 1.367 3.583 0 4.949 l -41.5 41.5 C 26.042 89.658 25.146 90 24.25 90 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(255, 255, 255); fill-rule: nonzero; opacity: 1"
              transform=" matrix(1 0 0 1 0 0) "
              stroke-linecap="round"
            />
          </g>
        </svg>
      </button>
    </div>
    <div class="img-dots">
      <span v-for="dot in slides.length" :key="dot" @click="setSlide(dot)" :class="{ selected: isSelected(dot) }"></span>
    </div>
  </div>
</template>

<script>
import CarouselItem from './CarouselItem.vue'
export default {
  components: { CarouselItem },
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
