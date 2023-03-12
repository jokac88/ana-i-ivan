<template>
  <div class="timeline-card">
    <p class="timeline-card__time">{{ timeline.time }}</p>
    <p class="timeline-card__description">{{ timeline.description }}</p>
    <i :class="`icon-${timeline.icon}`"/>
    <p v-html="timeline.location" class="timeline-card__location"></p>
    <a :href="timeline.locationUrl" target="_blank" class="timeline-card__button">Види на мапи</a>
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
