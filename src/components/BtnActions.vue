<template>
  <div class="arrows-container">
    <button @click="$emit('prev')" class="btn back-btn">
      <img src="@/client/assets/left-arrow.svg" alt="" />
    </button>
    <button @click="$emit('next')" class="btn next-btn">
      <img src="@/client/assets/right-arrow.svg" alt="" />
    </button>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
