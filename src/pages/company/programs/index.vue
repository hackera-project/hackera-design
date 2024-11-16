<script lang="ts" setup>
import { headers, useProgramsStore } from '@/stores/program'
import { useProgramForm } from '@/stores/program/store'

const { openForm } = useProgramForm()

const programsStore = useProgramsStore()
const { programs, loading, page, meta } = storeToRefs(programsStore)
const { fetch, getColor } = programsStore

fetch()
</script>

<template>
  <VCard :loading="loading.fetch">
    <template #title>
      <div class="d-flex justify-space-between align-center">
        <VCardTitle>
          {{ $t('programs') }}
        </VCardTitle>
        <VBtn
          size="small"
          prepend-icon="tabler-plus"
          @click="openForm"
        >
          {{ $t('add-program') }}
        </VBtn>
      </div>
    </template>

    <VCardText>
      <VDataTable
        :headers
        :items="programs"
      >
        <template #item.status="{ item }">
          <VChip
            :label="false"
            :color="getColor(item.status)"
            density="compact"
          >
            {{ $t(item.status) }}
          </VChip>
        </template>
        <template #item.actions="{ item }">
          <div class="d-flex">
            <VBtn
              icon
              variant="text"
              size="small"
              :to="`/company/programs/${item.id}`"
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
          <div class="d-flex justify-space-between align-center mt-3">
            <div class="text-subtitle-1" />
            <VPagination
              v-model="page"
              total-visible="7"
              :length="meta.last_page"
            />
          </div>
        </template>
      </VDataTable>
    </VCardText>
  </VCard>
</template>
