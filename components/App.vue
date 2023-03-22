<script setup>
import data from "~/store/data.json";
import Header from "~/components/common/Header";
import Timelines from "~/components/common/Timelines.vue";
import Story from "~/components/common/Story";
import Form from "~/components/common/Form";
import BackToTop from "~/components/common/BackToTop";

const {
  header: headerData,
  timelines: timelinesData,
  story: storyData,
  form: formData
} = data;
</script>

<template>
  <Header :headerData="headerData"/>
  <Timelines :timelinesData="timelinesData"/>
  <Story :storyData="storyData"/>
  <Form :formData="formData"/>
  <BackToTop/>
</template>
