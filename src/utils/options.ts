import { getI18n } from '@/plugins/i18n'

const { t } = getI18n().global

export const severityOptions = [
  { title: t('low-severity'), value: 1 },
  { title: t('medium-severity'), value: 2 },
  { title: t('high-severity'), value: 3 },
  { title: t('critical-severity'), value: 4 },
]

export const reportStatusOptions = [
  { title: t('in-progress'), value: 'in-progress' },
  { title: t('approved'), value: 'approved' },
  { title: t('rejected'), value: 'rejected' },
  { title: t('duplicated'), value: 'duplicated' },
]

export const reportStatusColor = (status: string) => {
  if (status === 'in-progress')
    return 'info'
  
  if (status === 'approved')
    return 'success'

  if (status === 'rejected')
    return 'error'

  return 'warning'
}
