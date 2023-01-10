<template>
  <div class="container">
    <Carousel :lang="lang" :slides="slides" />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
import { carouselService } from '../services/carousel.service.js'
export default {
  data() {
    return {
      slides: null
    }
  },
  async created() {
    this.slides = await carouselService.getCarouselData()
  },
  computed: {
    lang() {
      return this.$store.getters.lang
    }
  },
  components: { Carousel }
}
</script>

<style></style>
