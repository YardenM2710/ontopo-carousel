<template>
  <div class="container">
    <Carousel :slides="slides" />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
export default {
  data() {
    return {
      slides: null
    }
  },
  async created() {
    this.slides = await this.$store.dispatch('loadSlides')
  },
  computed: {},
  components: { Carousel }
}
</script>

<style></style>
