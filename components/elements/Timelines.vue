<script setup>
import TimelineCard from "~/components/elements/TimelineCard.vue";

const props = defineProps({
  timelinesData: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>

  <div class="timelines">

    <div class="timelines__wrapper">

      <TimelineCard v-for="timeline in timelinesData" :timeline="timeline"/>
    </div>
  </div>
</template>
