<script setup>
import data from "~/store/data.json";
import Header from "~/components/common/Header";
import Timelines from "~/components/common/Timelines";
import Story from "~/components/common/Story";
import Form from "~/components/common/Form";
import BackToTop from "~/components/common/BackToTop";

const {
  header: headerData,
  timelines: timelinesData,
  story: storyData,
  form: formData,
  countdown: countdownData
} = data;
</script>

<template>
  <Header :header-data="headerData"/>
  <Timelines :timelines-data="timelinesData"/>
  <Story :story-data="storyData"/>
  <Form :form-data="formData" :countdown-data="countdownData"/>
  <BackToTop/>
</template>
