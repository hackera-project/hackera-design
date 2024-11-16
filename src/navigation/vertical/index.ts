import { useUserStore } from '@/stores/auth/me'

export default computed(() => {
  const { user } = storeToRefs(useUserStore())

  if (user.value.role === 'hacker') {
    return [
      {
        title: 'programs',
        to: { name: 'hacker-programs' },
        icon: { icon: 'tabler-bug' },
      },
      {
        title: 'reports',
        to: { name: 'hacker-reports' },
        icon: { icon: 'tabler-clipboard-text' },
      },
      {
        title: 'leaderboard',
        to: { name: 'hacker-leaderboard' },
        icon: { icon: 'tabler-chart-bar' },
      },
      {
        title: 'profile',
        to: { name: 'hacker-profile' },
        icon: { icon: 'tabler-user' },
      },
    ]
  }

  return [
    {
      title: 'programs',
      to: { name: 'company-programs' },
      icon: { icon: 'tabler-bug' },
    },
    {
      title: 'company-profile',
      to: { name: 'company-profile' },
      icon: { icon: 'tabler-building-bank' },
    },
    {
      title: 'profile',
      to: { name: 'company-admin-profile' },
      icon: { icon: 'tabler-user' },
    },
  ]
})
