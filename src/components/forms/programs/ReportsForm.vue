<script lang="ts" setup>
const headers = [
  { title: 'Asset', key: 'asset', sortable: false },
  { title: 'Reported by', key: 'reported_by', sortable: false },
  { title: 'Reported at', key: 'reported_at', sortable: false },
  { title: 'Status', key: 'status', sortable: false },
  { title: 'Payment', key: 'payment', sortable: false },
  { title: '', key: 'action', sortable: false },
]

const items = [
  { asset: 'digikala.com', reported_by: 'Mammad', reported_at: '2022-12-03 14:20', status: 'in-progress', payment: '150' },
  { asset: 'google.com', reported_by: 'Ali', reported_at: '2022-12-03 14:20', status: 'pending', payment: '' },
  { asset: 'com.android.cafebazar', reported_by: 'Asghar', reported_at: '2022-12-03 14:20', status: 'closed', payment: '400' },
  { asset: '*.mtn.ir', reported_by: 'Akbar', reported_at: '2022-12-03 14:20', status: 'rejected', payment: '' },
]

const getStatusColor = (status: string) => {
  if (status === 'pending')
    return 'warning'

  if (status === 'rejected')
    return 'error'

  if (status === 'closed')
    return 'success'

  return 'info'
}
</script>

<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-4">
      <div class="text-h5">
        {{ $t('reports') }}
      </div>
    </div>
    <VDataTable
      :headers
      :items
      hover
    >
      <template #item.status="{ item }">
        <VChip
          :label="false"
          :color="getStatusColor(item.status)"
        >
          {{ $t(item.status) }}
        </VChip>
      </template>
      <template #item.action>
        <VBtn
          icon
          variant="text"
          to="/reports/1"
        >
          <VIcon icon="tabler-eye" />
        </VBtn>
      </template>
      <template #bottom>
        <div class="d-flex justify-space-between align-center mt-3">
          <div class="text-subtitle-1">
            paginate decs
          </div>
          <VPagination total-visible="7" />
        </div>
      </template>
    </VDataTable>
  </div>
</template>
