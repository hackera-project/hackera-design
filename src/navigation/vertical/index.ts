export default computed(() => {
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
