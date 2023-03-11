<template>
  <div class="container">
    <div class="headline">
      Ана Цветковић и Иван Јовковић
    </div>
    <div class="text">
      <!--      <p>Луд је био тај дан, када уходали смо заједно у овај сан.У њему дивни догађаји су се низали и до нас редом су стизали.</p>-->
      <!--      <p>Корак по корак, све смо заједно прошли и на нову идеју дошли, да уз стисак руке, упловимо у нове луке, уз најлепше звуке!</p>-->
      <!--      <p><b>СА РАДОШЋУ ВАС ПОЗИВАМО</b> да будете наши гости и својим присуством улепшате наш посебан дан :)</p>-->
      <p>Драги наши, са радошћу вас позивамо да заједно прославимо нашу љубав!</p>
    </div>
    <div class="date">
      20. maj 2023.
    </div>
    <div class="timeline">
      <TimelineCard v-for="timeline in timelines" :timeline="timeline"/>
    </div>
  </div>
  <i class="icon-crkva"/>
</template>

<script>
import TimelineCard from "~/components/boxes/TimelineCard.vue";
import timelines from "~/timelines.json";

export default {
  name: "App",
  components: {TimelineCard},
  data() {
    return {
      timelines
    }
  },
}
</script>

<style scoped>

</style>
