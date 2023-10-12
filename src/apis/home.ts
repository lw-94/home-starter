import api from '@/utils/request'

import type { CResponse } from './../utils/request'

export const getProjectWithId = (params: { project_id: string }): Promise<CResponse<any>> =>
  api.get(``, params)
