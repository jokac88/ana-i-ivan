<script setup>
const props = defineProps({
  timeline: {
    type: Object,
    default: () => {
    },
  },
})
</script>

<template>

  <section class="timeline-card">

    <p class="timeline-card__time">{{ timeline.time }}</p>

    <p v-html="timeline.event" class="timeline-card__event"/>

    <i :class="`icon-${timeline.icon}`"/>

    <p v-html="timeline.location" class="timeline-card__location"></p>

    <a :href="timeline.locationUrl" target="_blank" class="timeline-card__button">Види на мапи</a>
  </section>
</template>
