<script setup lang="ts">
//
withDefaults(
  defineProps<{
    counting?: boolean
    countTime: number
  }>(),
  {
    counting: true
  }
)
const emit = defineEmits<{
  (e: 'end'): void
}>()

const onCountdownEnd = () => {
  emit('end')
}
</script>
<template>
  <vue-countdown
    v-if="counting"
    :time="countTime"
    @end="onCountdownEnd"
    v-slot="{ days, hours, minutes, seconds }"
  >
    <ul
      class="p3 lg:p6 flex items-center select-none bg-[#2a2a2a] space-x-3 lg:space-x-6 rounded-2"
    >
      <li class="square">
        <span>{{ days }}</span>
        <i>d</i>
      </li>
      <li class="square">
        <span>{{ hours }}</span>
        <i>h</i>
      </li>
      <li class="square">
        <span>{{ minutes }}</span>
        <i>m</i>
      </li>
      <li class="square">
        <span class="text-[var(--vt-c-main)]">{{ seconds }}</span>
        <i>s</i>
      </li>
    </ul>
  </vue-countdown>
</template>
<style scoped lang="less">
//
.square {
  --uno: 'w15 lg:w20 flex items-center justify-center text-6 lg:text-8 font-700';
  i {
    --uno: text-4 ml1;
  }
}
</style>
