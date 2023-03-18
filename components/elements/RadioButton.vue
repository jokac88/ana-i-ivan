<script setup>
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  formEntry: {
    type: String,
    default: ''
  }
})
</script>

<template>

  <label class="form__radio-button">
    {{ value }}

    <input
        type="radio"
        :name="formEntry"
        :value="value"
        :checked="value === 'ДА'"
    />

    <span class="radio-button"/>
  </label>
</template>
