<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    icon?: string
    doing?: boolean
    afterIcon?: string
    disabled?: boolean
    text?: boolean
    fontSize?: string
  }>(),
  {
    title: 'button',
    icon: '',
    doing: false,
    afterIcon: '',
    disabled: false,
    text: false,
    fontSize: ''
  }
)
</script>
<template>
  <div
    class="flex items-center justify-center box-border bg-transparent h-[28px] lg:h-[44px] px3 lg:px6 rounded-2 transition-opacity cursor-pointer"
    :class="{
      'text-white bg': !text,
      'border border-solid border-[var(--vt-c-main)]': text,
      disable: disabled,
      'hover:op-[.8]': !disabled
    }"
  >
    <div v-if="doing" class="to-rotate mr1 i-line-md:loading-loop"></div>
    <img v-if="icon" :src="icon" class="w-5 h-5 mr1" />
    <span
      class="text-center text-[12px] lg:text-[16px] leading-5 select-none"
      :class="{ 'text-[var(--vt-c-main)]': text }"
      :style="`font-size: ${fontSize}px`"
      >{{ title }}</span
    >
    <img v-if="afterIcon" :src="afterIcon" class="w-3 h-3 ml-1" />
  </div>
</template>
<style scoped lang="less">
.disable {
  filter: grayscale(1);
  background: gray !important;
  pointer-events: none;
}

.bg {
  background: var(--vt-c-main);
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.to-rotate {
  animation: spin 1s linear infinite;
}
</style>
