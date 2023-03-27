<script setup>
import Form from "~/components/common/Form";
import Countdown from "~/components/common/Countdown";

const props = defineProps({
  formData: {
    type: Object,
    default: () => {
    },
  },
  countdownData: {
    type: Object,
    default: () => {
    }
  }
})
</script>

<template>
  <footer class="footer">
    <Form :form-data="formData"/>
    <Countdown :countdown-data="countdownData"/>
  </footer>
</template>
