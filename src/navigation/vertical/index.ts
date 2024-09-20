import { router } from '@/plugins/1.router'

export default computed(() => {
  if (router.currentRoute.value.name.startsWith('company')) {
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
  }

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
})
