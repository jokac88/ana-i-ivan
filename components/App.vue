<script setup>
import Header from "~/components/common/Header";
import Timeline from "~/components/common/Timeline";
import Story from "~/components/common/Story";
import Footer from "~/components/common/Footer";
import BackToTop from "~/components/common/BackToTop";
import data from "~/store/data.json";

const {
  header: headerData,
  timeline: timelineData,
  story: storyData,
  form: formData,
  countdown: countdownData
} = data;
</script>

<template>
  <Header :header-data="headerData"/>
  <Timeline :timeline-data="timelineData"/>
  <Story :story-data="storyData"/>
  <Footer :form-data="formData" :countdown-data="countdownData"/>
  <BackToTop/>
</template>
