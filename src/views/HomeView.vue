<script setup lang="ts">
import CardComp from './CardComp.vue'
import Img1 from '@/assets/svg/img1.svg'
import Img2 from '@/assets/svg/img2.svg'
import Img3 from '@/assets/svg/img3.svg'
import Img4 from '@/assets/svg/img4.svg'
import Img5 from '@/assets/svg/img5.svg'
import Img6 from '@/assets/svg/img6.svg'
import Base from '@/assets/svg/base.svg'
import Eth from '@/assets/svg/eth.svg'
import Op from '@/assets/svg/op.svg'
import Arb from '@/assets/svg/arb.svg'
import Bsc from '@/assets/svg/bsc.svg'
import Radiant from '@/assets/svg/radiant.svg'
import Liquity from '@/assets/svg/liquity.svg'
import Metamask from '@/assets/svg/metamask.svg'
import BaseText from '@/assets/svg/base-text.svg'
import Okx from '@/assets/svg/okx.svg'
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import ScrollReveal from 'scrollreveal'
import anime from 'animejs'
import Typed from 'typed.js'

const hue = ref(0)
const typedTitle = ref()

onMounted(() => {
  typedTitle.value = new Typed('.t1', {
    strings: ['The first native DeFi lending protocol on BaseChain'],
    typeSpeed: 50,
    cursorChar: ''
  })
  anime({
    targets: hue,
    value: 360,
    round: 1,
    easing: 'linear',
    duration: 5000,
    loop: true
  })
  //
  ScrollReveal().reveal('.t1')
  ScrollReveal().reveal('.t2', {
    scale: 1.5,
    delay: 4000,
    beforeReveal(domEl) {
      console.log('beforeReveal')
    },
    afterReveal: (domEl) => {
      console.log('afterReveal')
    }
  })
  ScrollReveal().reveal('.ins', {
    scale: 0.85,
    reset: true,
    viewFactor: 0.5
  })
  ScrollReveal().reveal('.img6', {
    scale: 0.7,
    viewFactor: 0.5,
    reset: true
  })
  ScrollReveal().reveal('.text6', {
    distance: '150%',
    origin: 'left',
    viewFactor: 0.5,
    reset: true
  })
  sec4List.value.forEach((item, idx) => {
    ScrollReveal().reveal(`.RChainItem${idx}`, { delay: idx * 100, opacity: 0, reset: true })
  })
  sec5List.value.forEach((item, idx) => {
    ScrollReveal().reveal(`.RCoopItem${idx}`, {
      delay: idx * 100,
      opacity: 0,
      distance: '150%',
      origin: 'bottom',
      reset: true
    })
  })
})
onUnmounted(() => {
  typedTitle.value.destroy()
})
const appStore = useAppStore()
const { getProjectInfo } = appStore
const { isEnd, noPublicInfo } = storeToRefs(appStore)

const sec2List = ref([
  {
    icon: Img1,
    text: 'High deposit income and low lending interest rate agreement'
  },
  {
    icon: Img2,
    text: 'High capital utilization and safe over-borrowing'
  },
  {
    icon: Img3,
    text: 'LUSD stablecoin protocol bound to the pure digital asset ETH'
  },
  {
    icon: Img4,
    text: 'Use dynamic liquidity to ensure low slippage of LP'
  },
  {
    icon: Img5,
    text: `100% of platform's revenue will be repurchased and destroyed BAND`
  }
])
const sec4List = ref([
  {
    title: 'Base Chain',
    icon: Base,
    bgColor: '#0036A7'
  },
  {
    title: 'Ethereum',
    icon: Eth,
    bgColor: '#273A83'
  },
  {
    title: 'Optimism',
    icon: Op,
    bgColor: '#67111B'
  },
  {
    title: 'Arbitrum',
    icon: Arb,
    bgColor: '#213147'
  },
  {
    title: 'BSC Chain',
    icon: Bsc,
    bgColor: '#2d2613'
  }
])
const sec5List = ref([
  {
    icon: Radiant
  },
  {
    icon: Liquity
  },
  {
    icon: Metamask
  },
  {
    icon: BaseText
  },
  {
    icon: Okx
  }
])

const goDetails = () => {
  window.open('https://docs.baselend.finance/product-guide/stablecoin')
}

onMounted(() => {
  // getProjectInfo()
})
</script>
<template>
  <div class="home">
    <div class="pt52px lg:pt96px cover-bg h100vh flex flex-col items-center justify-center">
      <section class="w-full lg:max-w1280px flex flex-col lg:flex-row items-center justify-between">
        <div class="px-3 mr10 lg:mr30">
          <p>{{ hue }}</p>
          <p
            class="text-9 lg:text-18 font-700 capitalize t1 bdl-[var(--vt-c-linear)]"
            :style="`filter: hue-rotate(${hue}deg)`"
          ></p>
          <p class="mt5 inline-block text-4 lg:text-9 font-500 t2 hvr-pulse-grow">
            Not just BaseChain
          </p>
        </div>
        <div v-if="!isEnd && !noPublicInfo" class="mt14">
          <CardComp />
        </div>
      </section>
    </div>
    <div class="lg:max-w1280px mx-3 lg:mx-auto">
      <section class="mt20 lg:mt40">
        <p class="text-9 lg:text-12 font-700">Why BaseLend?</p>
        <ul class="mt15 grid grid-rows-5 lg:grid-cols-2 lg:grid-rows-3 gap-4">
          <li
            v-for="(item, idx) in sec2List"
            :key="idx"
            class="ins flex items-center p8 bg-[#212121] rounded-4 hvr-bounce-to-right"
          >
            <img :src="item.icon" class="w70px lg:w140px" />
            <p class="ml6 lg:ml11 text-4 lg:text-6 font-700 leading-120%">{{ item.text }}</p>
          </li>
        </ul>
      </section>
      <section class="mt20 lg:mt40">
        <p class="text-9 lg:text-12 font-700">LUSD Stablecoin</p>
        <div class="mt15 flex flex-col lg:flex-row items-center">
          <ul class="flex flex-col text-4 lg:text-6 leading-150% space-y-5 text6">
            <li>
              LUSD is a stablecoin pegged to the U.S. dollar, and only supports the digital asset
              ETH as collateral to withdraw interest-free loans.
            </li>
            <li>LUSD is a more efficient and easier to use stablecoin.</li>
            <li>LUSD is governanceless, ensuring the protocol is fully decentralized.</li>
            <li
              class="pt4 lg:pt8 flex items-center text-[var(--vt-c-main)] text-4 lg:text-6 space-x-1 cursor-pointer hover:op-[.8] transition-all"
              @click="goDetails"
            >
              <span>Click For Details</span>
              <div class="i-mdi:arrow-top-right"></div>
            </li>
          </ul>
          <img :src="Img6" class="mt9 lg:mt0 lg:ml30 w40 lg:w60 hvr-pulse-grow img6" />
        </div>
      </section>
      <section class="mt20 lg:mt40">
        <p class="text-9 lg:text-12 font-700 leading-120%">Supported main chains</p>
        <ul class="mt10 lg:mt19 grid grid-cols-3 lg:grid-cols-5 lg:grid-rows-1 gap-4">
          <li
            v-for="(item, idx) in sec4List"
            :key="idx"
            class="py6 flex! flex-col items-center justify-center rounded-4 hvr-float"
            :class="`RChainItem${idx}`"
            :style="`background: ${item.bgColor};`"
          >
            <img :src="item.icon" class="w14 lg:w21" />
            <span class="mt5 text-4 lg:text-5 font-700">{{ item.title }}</span>
          </li>
        </ul>
      </section>
      <section class="my20 lg:my40">
        <p class="text-9 lg:text-12 font-700">Cooperation</p>
        <ul class="mt10 lg:mt19 grid grid-cols-2 lg:grid-cols-5 lg:grid-rows-1 gap-4">
          <li
            v-for="(item, idx) in sec5List"
            :key="idx"
            class="py6 flex flex-col items-center justify-center rounded-4 filter-grayscale-[.5] hover:filter-grayscale-0 transition-all scale-[.8]"
            :class="`RCoopItem${idx}`"
          >
            <img :src="item.icon" class="w90% lg:w-auto" />
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<style scoped lang="less">
//
.cover-bg {
  background: url('@/assets/img/bg.png') 50% / cover;
}
</style>
