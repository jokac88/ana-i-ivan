<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__headline">{{ data.headline }}</div>
      <p class="header__quote">{{ data.quote }}</p>
      <div class="header__date">{{ data.date }}</div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    data: {
      type: Object,
      default: () => {
      },
    },
  },
}
</script>
