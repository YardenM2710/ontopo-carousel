<template>
  <header class="app-header">
    <section class="container">
      <div class="logo">
        <img src="https://ontopo.cz/assets/img/logo/blue.png" />
      </div>
      <nav>
        <a @click="toggleNav()">
          <img src="https://www.ontopo.co.il/icons/language.svg" alt="" />
        </a>
        <div v-if="isNavOpen" class="lang-container">
          <div class="lang-opts">
            <div @click.stop="setLang('he')">עברית</div>
            <div @click.stop="setLang('en')">English</div>
          </div>
          <div class="triangle"></div>
        </div>
      </nav>
    </section>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isNavOpen: false
    }
  },
  methods: {
    setLang(lang) {
      this.$store.commit({ type: 'setLang', lang })
      this.isNavOpen = false
    },
    toggleNav() {
      this.isNavOpen = !this.isNavOpen
    }
  }
}
</script>

<style></style>
