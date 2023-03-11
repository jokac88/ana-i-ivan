<template>
  <div class="col">
    <p>{{ timeline.time }}</p>
    <p>{{ timeline.description }}</p>
    <i :class="`icon-${timeline.icon}`"></i>
    <p>{{ timeline.location }}</p>
  </div>
</template>

<script>
export default {
  name: "TimelineCard",
  props: {
    timeline: {
      type: Object,
      default: () => {
      },
    },
  },
}
</script>

<style scoped>

</style>
