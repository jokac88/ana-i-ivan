<script setup>
import throttle from 'lodash/throttle';

let isVisible = ref(false);

onMounted(() => window.addEventListener('scroll', onScroll));
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll));

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

const onScroll = throttle(() => {
  const currentScrollYPosition = document.documentElement.scrollTop || document.body.scrollTop;

  isVisible.value = currentScrollYPosition >= 600;
}, 500);
</script>

<template>
  <div
      class="back-to-top"
      :class="{'back-to-top--is-visible': isVisible}"
      @click="backToTop"
  >
    <i class="icon-double-arrow-top"/>
  </div>
</template>
