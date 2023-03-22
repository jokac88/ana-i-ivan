<script setup>
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  formEntry: {
    type: String,
    default: ''
  },
  checked: {
    type: String,
    default: ''
  },
})
</script>

<template>
  <label class="radio-button">
    {{ value }}
    <input
        type="radio"
        :name="formEntry"
        @click="$emit('radio-button-clicked', value)"
        :value="value"
        :checked="value === checked"
    />
    <span class="checkmark"/>
  </label>
</template>
