<script setup>
import data from "~/store/data.json";
import Header from "~/components/common/Header";
import Timelines from "~/components/elements/Timelines.vue";
import Form from "~/components/common/Form";
import BackToTop from "~/components/common/BackToTop";

const {header: headerData, timelines: timelinesData, form: formData} = data;
</script>

<template>

  <Header :headerData="headerData"/>

  <Timelines :timelinesData="timelinesData"/>

  <Form :formData="formData"/>

  <BackToTop/>
</template>
