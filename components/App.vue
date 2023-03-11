<template>
  <div class="flex-container">
    <Header :data="data.header"/>
    <Main :data="data.timelines"/>
  </div>
</template>

<script>
import data from "~/data.json";
import Header from "~/components/common/Header";
import Main from "~/components/common/Main";

export default {
  name: "App",
  components: {
    Header,
    Main
  },
  data() {
    return {
      data
    }
  },
}
</script>
