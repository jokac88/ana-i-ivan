<template>
  <div class="timelines">
    <TimelineCard v-for="timeline in timelines" :timeline="timeline"/>
  </div>
</template>

<script>
import TimelineCard from "~/components/elements/TimelineCard.vue";

export default {
  name: "Timelines",
  components: {
    TimelineCard,
  },
  props: {
    timelines: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
