<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
</script>

<style scoped lang="scss"></style>
