<script setup lang="ts">
import { useTimeout } from '@vueuse/core'
import anime from 'animejs'
import { RouterView } from 'vue-router'

// loading anime
const ready = useTimeout(2000)
onMounted(() => {
  anime({
    targets: '.loading',
    duration: 2000,
    easing: 'linear',
    width: '100%'
  })
})
</script>

<template>
  <RouterView v-if="ready" />
  <div v-else class="loading w0 h4 bg-emerald hover:cursor-none"></div>
  <CParticle />
</template>

<style scoped lang="less"></style>
