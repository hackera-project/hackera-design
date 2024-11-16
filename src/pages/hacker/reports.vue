<script lang="ts" setup>
import { useDialogStore } from '@/stores/dialog'
import { headers, useReportsStore } from '@/stores/report'
import {reportStatusColor } from '@/utils/options'

const reportsStore = useReportsStore()
const { reports, loading, page, meta } = storeToRefs(reportsStore)

reportsStore.fetch()

const { openDialog } = useDialogStore()
</script>

<template>
  <VCard
    :title="$t('reports')"
    :loading="loading.fetch"
  >
    <VCardText>
      <VDataTable
        :headers
        :items="reports"
      >
        <template #item.status="{ item }">
          <VChip
            :label="false"
            :color="reportStatusColor(item.status)"
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
            <VPagination
              v-model="page"
              :length="meta.last_page"
              total-visible="7"
            />
          </div>
        </template>
      </VDataTable>
    </VCardText>
  </VCard>
</template>
