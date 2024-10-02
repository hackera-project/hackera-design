<script lang="ts" setup>
import { useDialogStore } from '@/stores/dialog'

const { t } = useI18n()

const headers = [
  { title: 'Company', key: 'company', sortable: false },
  { title: 'Asset', key: 'asset', sortable: false },
  { title: 'Reported at', key: 'reported_at', sortable: false },
  { title: 'Status', key: 'status', sortable: false },
  { title: 'Payment', key: 'payment', sortable: false },
  { title: '', key: 'action', sortable: false },
]

const items = [
  { company: 'Digikala', asset: 'digikala.com', reported_at: '2022-12-03 14:20', status: 'in-progress', payment: '150' },
  { company: 'Google', asset: 'google.com', reported_at: '2022-12-03 14:20', status: 'pending', payment: '' },
  { company: 'Cafebazar', asset: 'com.android.cafebazar', reported_at: '2022-12-03 14:20', status: 'closed', payment: '400' },
  { company: 'MTN', asset: '*.mtn.ir', reported_at: '2022-12-03 14:20', status: 'rejected', payment: '' },
]

const { openDialog } = useDialogStore()

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
  <VCard :title="$t('reports')">
    <VCardText>
      <VDataTable
        :headers
        :items
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
          <VBtn
            icon
            variant="text"
            @click="() => openDialog('hacker-comment', '500px')"
          >
            <VIcon icon="tabler-message" />
          </VBtn>
        </template>
        <template #bottom>
          <div class="d-flex justify-end mt-4">
            <VPagination length="7" />
          </div>
        </template>
      </VDataTable>
    </VCardText>
  </VCard>
</template>
