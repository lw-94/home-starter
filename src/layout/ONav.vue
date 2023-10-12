<script setup lang="ts">
import Logo from '@/assets/svg/logo.svg'
import { getAppUrl } from '@/utils'
//
const goApp = () => {
  location.href = getAppUrl()
}
</script>
<template>
  <div class="fixed top-0 z-999 flex items-center justify-center w-full h52px lg:h96px bg-l">
    <div class="flex items-center justify-between flex-1 px3 lg:px26">
      <section>
        <img :src="Logo" class="w40 lg:w246px" />
      </section>
      <section>
        <CBtn title="Launch App" @click="goApp" />
      </section>
    </div>
  </div>
</template>
<style scoped lang="less">
//
.bg-l {
  background: linear-gradient(180deg, black, transparent);
}
</style>
