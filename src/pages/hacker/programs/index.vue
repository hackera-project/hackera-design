<script setup lang="ts">
import { useProgramsStore } from '@/stores/program'

const programsStore = useProgramsStore()
const { programs, loading, page, meta } = storeToRefs(programsStore)
const { fetch } = programsStore

fetch()
</script>

<template>
  <VCard
    :title="$t('programs')"
    :loading="loading.fetch"
  >
    <VCardText>
      <VRow>
        <template
          v-for="program in programs"
          :key="program"
        >
          <VCol
            cols="3"
            align-self="stretch"
          >
            <ProgramCard
              :program="program"
            />
          </VCol>
        </template>
      </VRow>
    </VCardText>
  </VCard>
</template>
