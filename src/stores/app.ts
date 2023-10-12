import { getProjectWithId } from '@/apis/home'
import { dayjs } from 'element-plus'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const projectInfo = ref()
  const isWhiteListStage = computed(() => {
    if (!projectInfo.value) return
    return [-1, 0, -10].includes(projectInfo.value.status)
  })

  const whitelistStartTime = computed(() => {
    if (!projectInfo.value) return
    return dayjs(projectInfo.value.sale1_launch_time)
  })
  const whitelistEndTime = computed(() => {
    if (!projectInfo.value) return
    return dayjs(projectInfo.value.sale1_end_time)
  })
  const publicStartTime = computed(() => {
    if (!projectInfo.value) return
    return dayjs(projectInfo.value.sale2_launch_time)
  })
  const publicEndTime = computed(() => {
    if (!projectInfo.value) return
    return dayjs(projectInfo.value.sale2_end_time)
  })

  const countdownTime = computed(() => {
    if (!projectInfo.value) return 1000
    switch (projectInfo.value.status) {
      case 1: // before whitelist
        return whitelistStartTime.value?.diff(dayjs())
      case 2: // whitelist ing
        return whitelistEndTime.value?.diff(dayjs())
      case 3: // before public
        return publicStartTime.value?.diff(dayjs())
      case 4: // public ing
        return publicEndTime.value?.diff(dayjs())
      case 5: // after public
        return 0
      case 6: // finish
        return 0

      default:
        return 0
    }
  })

  const isEnd = computed(() => {
    if (!projectInfo.value) return true
    return projectInfo.value.status > 4
  })

  const noPublicInfo = computed(() => {
    if (!projectInfo.value) return true
    return (
      projectInfo.value.status === 3 &&
      projectInfo.value.sale2_launch_time === '2000-01-01T00:00:00Z'
    )
  })

  const getProjectInfo = async () => {
    const data = await getProjectWithId({ project_id: '1' })
    projectInfo.value = data.data
  }

  return {
    projectInfo,
    countdownTime,
    isEnd,
    noPublicInfo,
    getProjectInfo
  }
})
