<template>
  <div v-if="slides" class="container">
    <Carousel :slides="slides" />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue'
export default {
  async created() {
    await this.$store.dispatch('loadSlides')
  },
  computed: {
    slides() {
      return this.$store.getters.slides
    }
  },
  components: { Carousel }
}
</script>
