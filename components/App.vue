<script setup>
import Header from "~/components/common/Header";
import Timelines from "~/components/common/Timelines";
import Story from "~/components/common/Story";
import Footer from "~/components/common/Footer";
import BackToTop from "~/components/common/BackToTop";
import data from "~/store/data.json";

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
  <Footer :form-data="formData" :countdown-data="countdownData"/>
  <BackToTop/>
</template>
