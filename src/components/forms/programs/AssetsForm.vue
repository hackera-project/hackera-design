<script lang="ts" setup>
import { useDestroyStore } from '@/stores/destroy'
import { headers, severityMap, useProgramAssetsStore } from '@/stores/program/update/asset'
import { useProgramAssetsForm } from '@/stores/program/update/asset/store'

const { openForm } = useProgramAssetsForm()

const assetsStore = useProgramAssetsStore()
const { assets, loading } = storeToRefs(assetsStore)
const { fetch, destroy } = assetsStore

fetch()

const { openDialog } = useDestroyStore()
</script>

<template>
  <div>
    <div class="d-flex justify-space-between align-center mb-4">
      <div class="text-h5">
        {{ $t('assets') }}
      </div>
      <VBtn
        prepend-icon="tabler-plus"
        @click="() => openForm()"
      >
        {{ $t('add-asset') }}
      </VBtn>
    </div>
    <VDataTable
      :headers
      :items="assets"
      :loading="loading.fetch"
      hide-default-footer
    >
      <template #item.type="{ item }">
        {{ $t(item.type) }}
      </template>

      <template #item.max_severity="{ item }">
        <VChip>
          {{ $t(severityMap[item.max_severity]) }}
        </VChip>
      </template>

      <template #item.actions="{ item }">
        <div class="d-flex">
          <VBtn
            icon="tabler-pencil"
            variant="text"
            @click="() => openForm(item.id)"
          />
          <VBtn
            icon="tabler-trash"
            color="error"
            variant="text"
            @click="openDialog($t('asset'), $t(item.type), destroy(item.id))"
          />
        </div>
      </template>
    </VDataTable>
  </div>
</template>
