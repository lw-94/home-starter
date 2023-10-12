<script setup lang="ts">
import Logo from '@/assets/svg/logo.svg'
import Tag from '@/assets/svg/tag.svg'
import Twitter from '@/assets/svg/twitter-line.svg'
import Telegram from '@/assets/svg/telegram-line.svg'
import Email from '@/assets/svg/mail.svg'
//
const linkArr = ref([
  {
    title: '© Base Lend 2023',
    children: []
  },
  {
    title: 'Information',
    children: [
      {
        title: 'Docs',
        icon: Tag,
        link: 'https://docs.baselend.finance'
      }
    ]
  },
  {
    title: 'Get in touch',
    children: [
      {
        title: 'Email',
        icon: Email,
        link: 'service@baselend.finance'
      },
      {
        title: 'Twitter',
        icon: Twitter,
        link: 'https://twitter.com/BaseLendFi'
      },
      {
        title: 'Telegram',
        icon: Telegram,
        link: 'https://t.me/BaseLend'
      }
    ]
  }
])

const onClickLink = (link: string) => {
  if (link.startsWith('service')) {
    // is mail
    window.open('mailto:' + link)
  } else {
    window.open(link)
  }
}
</script>
<template>
  <div class="flex flex-col items-center justify-center bg-[#212121] py-10">
    <div class="lg:w1280px flex flex-col lg:flex-row px5 lg:px0 lg:items-start justify-between">
      <img :src="Logo" class="w220px" />
      <ul class="mt10 lg:mt0 flex flex-wrap justify-between lg:space-x-14">
        <li v-for="item in linkArr" :key="item.title" class="w165px lg:w[240px]">
          <dl>
            <dt class="py4 font-500 bd-[white]-b">
              {{ item.title }}
            </dt>
            <template v-for="itemChild in item.children">
              <dd
                v-if="itemChild"
                :key="itemChild.title"
                class="flex items-center py4 cursor-pointer hover:op-[.8]"
                @click="onClickLink(itemChild.link)"
              >
                <img :src="itemChild.icon" class="w4 h4 mr-[10px]" />
                <span class="font-300">{{ itemChild.title }}</span>
              </dd>
            </template>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped lang="less">
/**/
</style>
