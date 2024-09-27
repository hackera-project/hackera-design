<script lang="ts" setup>
import { useDialogStore } from '@/stores/dialog'

const { t } = useI18n()

const headers = [
  { title: t('title'), key: 'title', sortable: false },
  { title: t('assets'), key: 'assets', sortable: false },
  { title: t('paid'), key: 'paid', sortable: false },
  { title: t('reports'), key: 'reports', sortable: false },
  { title: t('actions'), key: 'actions', sortable: false },
]

const items = [
  { title: 'Test bug bounty 1', assets: 45, paid: 3000, reports: 120 },
  { title: 'Test bug bounty 2', assets: 20, paid: 100, reports: 20 },
  { title: 'Test bug bounty 3', assets: 4, paid: 90, reports: 25 },
  { title: 'Test bug bounty 4', assets: 5, paid: 300, reports: 9 },
]

const { openDialog } = useDialogStore()
</script>

<template>
  <VCard>
    <template #title>
      <div class="d-flex justify-space-between align-center">
        <VCardTitle>
          {{ $t('programs') }}
        </VCardTitle>
        <VBtn
          size="small"
          prepend-icon="tabler-plus"
          @click="() => openDialog('create-program-form', '600px')"
        >
          {{ $t('add-program') }}
        </VBtn>
      </div>
    </template>

    <VCardText>
      <VDataTable
        :headers
        :items
      >
        <template #item.actions="{ item }">
          <div class="d-flex">
            <VBtn
              icon
              variant="text"
              size="small"
              to="/company/programs/1"
            >
              <VIcon icon="tabler-pencil" />
            </VBtn>
            <VBtn
              icon
              variant="text"
              size="small"
              color="error"
            >
              <VIcon icon="tabler-trash" />
            </VBtn>
          </div>
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
