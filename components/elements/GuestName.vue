<script setup>
const props = defineProps({
  guestName: {
    type: String,
    default: ''
  },
  index: {
    type: Number,
    default: 0
  },
});
</script>

<template>
<div class="guest-name">

  <p class="guest-name__number">{{ index + 1 }}.</p>

  <p class="guest-name__text">{{guestName}}</p>

  <button
      @click="$emit('delete-guest', index)"
      type="button"
      class="guest-name__delete-button"
  >
    -
  </button>
</div>
</template>
