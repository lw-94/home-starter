<script setup lang="ts">
import Logo from '@/assets/svg/logo.svg'
import { useAppStore } from '@/stores/app'
import { getAppUrl } from '@/utils'
import { storeToRefs } from 'pinia'
//
const appStore = useAppStore()
const { getProjectInfo } = appStore
const { projectInfo, countdownTime } = storeToRefs(appStore)

const btnTitle = computed(() => {
  if (!projectInfo.value) return ''
  switch (projectInfo.value.status) {
    case 1: // before whitelist
    case 3: // before public
      return 'Launch'
    case 2: // whitelist ing
    case 4: // public ing
      return 'Buy Now'
    default:
      return ''
  }
})

const title = computed(() => {
  if (!projectInfo.value) return ''
  switch (projectInfo.value.status) {
    case 1: // before whitelist
      return 'Countdown to Whitelist Launch'
    case 2: // whitelist ing
      return 'Countdown to the end of Whitelist Period'
    case 3: // before public
      return 'Countdown to Public Launch'
    case 4: // public ing
      return 'Countdown to the end of Public Period'
    default:
      return ''
  }
})

const onEnd = () => {
  getProjectInfo()
}

const goApp = () => {
  const appUrl = getAppUrl()
  location.href = appUrl + '/launchpad'
}
</script>
<template>
  <div class="p6 bg-[#0f0f0f] rounded-4">
    <img :src="Logo" class="w50%" />
    <p class="mt10 text-4 capitalize">{{ title }}</p>
    <div class="mt3">
      <CCountDown :countTime="countdownTime || 1" @end="onEnd" />
    </div>
    <div class="mt6">
      <CBtn :title="btnTitle" @click="goApp" />
    </div>
  </div>
</template>
<style scoped lang="less">
//
</style>
