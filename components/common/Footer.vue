<script setup>
import Form from "~/components/common/Form";
import Countdown from "~/components/common/Countdown";
import Story from "~/components/common/Story";

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
  },
  storyData: {
    type: Object,
    default: () => {
    }
  }
})
</script>

<template>
    <footer class="footer">
        <Story :story-data="storyData"/>
        <Form :form-data="formData"/>
        <Countdown :countdown-data="countdownData"/>
    </footer>
</template>
