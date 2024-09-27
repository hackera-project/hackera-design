<script lang="ts" setup>
import { useDrawerStore } from '@/stores/drawer'

const headers = [
  { title: 'Type', key: 'type' },
  { title: 'Value', key: 'value' },
  { title: 'Max severity', key: 'max_severity' },
  { title: 'Actions', key: 'actions' },
]

const items = [
  { type: 'source code', value: 'https://github.com/contentauth/c2pa-js', max_severity: 4 },
  { type: 'Google play id', value: 'com.hotwire.hotels', max_severity: 3 },
  { type: 'App Store id', value: '427916203', max_severity: 3 },
]

const { openDrawer } = useDrawerStore()
</script>

<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-4">
      <div class="text-h5">
        {{ $t('assets') }}
      </div>
      <VBtn
        prepend-icon="tabler-plus"
        @click="() => openDrawer('asset-store', $t('create-asset'))"
      >
        {{ $t('add-asset') }}
      </VBtn>
    </div>
    <VDataTable
      :headers
      :items
    >
      <template #item.actions>
        <div class="d-flex">
          <VBtn
            icon="tabler-pencil"
            variant="text"
            @click="() => openDrawer('asset-store', $t('edit-asset'))"
          />
          <VBtn
            icon="tabler-trash"
            color="error"
            variant="text"
          />
        </div>
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
