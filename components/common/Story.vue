<script setup>

const props = defineProps({
  storyData: {
    type: Object,
    default: () => {
    },
  },
})
</script>

<template>
  <section class="story">
    <div class="story__wrapper">
      <div class="story__heading">
        {{ storyData.heading }}
      </div>
      <div class="story__flex-container">
        <div class="story__image">
          <img src="~/assets/img/hug.png" alt="~/assets/img/hug.png"/>
        </div>
        <div class="story__text">
          {{ storyData.text }}
        </div>
      </div>
    </div>
  </section>
</template>
