<script setup lang="ts">
import { RouterView } from 'vue-router'

import Nav from '@/layout/ONav.vue'

import OFooter from './OFooter.vue'
</script>
<template>
  <div class="flex flex-col">
    <Nav />
    <RouterView />
    <OFooter />
  </div>
</template>

<style lang="less" scoped></style>
