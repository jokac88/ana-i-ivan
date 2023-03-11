<template>
  <main class="main">
    <div class="main__wrapper">
      <Timelines :timelines="data"/>
    </div>
  </main>
</template>

<script>
import Timelines from "~/components/elements/Timelines.vue";

export default {
  name: "Main",
  components: {
    Timelines,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
