<template>
  <transition :name="transitionEffect">
    <article :key="currSlide" class="carousel-item" :class="getSlideDir" v-if="currSlide === index">
      <img :src="slide.imgUrl" />
      <div class="carousel-item-details" :class="getSlideClass">
        <div class="item-title">{{ formattedTitle }}</div>
        <div class="item-action">
          <a :href="slide.path">{{ formattedBtn }}</a>
        </div>
      </div>
    </article>
  </transition>
</template>

<script>
export default {
  props: ['slide', 'index', 'currSlide', 'transitionName', 'lang', 'direction'],
  data() {
    return {}
  },
  computed: {
    transitionEffect() {
      return this.direction === 'right' ? 'slide-out' : 'slide-in'
    },
    getSlideDir() {
      return this.$store.getters.dir
    },
    getSlideClass() {
      return this.$store.getters.lang
    },
    formattedTitle() {
      return this.lang === 'en' ? this.slide.title.en : this.slide.title.he
    },
    formattedBtn() {
      return this.lang === 'en' ? 'SWITCH MARKET' : 'כניסה למתחם'
    }
  }
}
</script>

<style>
.slide-in-enter-active,
.slide-in-leave-active,
.slide-out-enter-active,
.slide-out-leave-active {
  transition: all 0.3s ease-in-out;
}
.slide-in-enter-from {
  transform: translateX(-100%);
}
.slide-in-leave-to {
  transform: translateX(100%);
}
.slide-out-enter-from {
  transform: translateX(100%);
}
.slide-out-leave-to {
  transform: translateX(-100%);
}
</style>
