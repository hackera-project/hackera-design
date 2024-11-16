<script lang="ts" setup>
import { headers, severityMap, useProgramAssetsStore } from '@/stores/program/update/asset'

headers.pop()

const assetsStore = useProgramAssetsStore()
const { assets, loading } = storeToRefs(assetsStore)
const { fetch } = assetsStore

fetch()
</script>

<template>
  <VCard
    :title="$t('assets')"
    class="mt-4"
    :loading="loading.fetch"
  >
    <VCardText>
      <VDataTable
        :headers
        :items="assets"
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
      </VDataTable>
    </VCardText>
  </VCard>
</template>
