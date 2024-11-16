<script lang="ts" setup>
import { useProgramUpdateStore } from '@/stores/program/update'

const programStore = useProgramUpdateStore()
const { program, loading } = storeToRefs(programStore)
const { setId, fetch } = programStore

setId(Number(useRoute().params.id))
fetch()
</script>

<template>
  <VRow>
    <VCol cols="9">
      <VProgressLinear
        v-if="loading.fetch"
        class="mb-2"
        indeterminate
      />
      <div class="text-h4 mb-4">
        {{ program.title }}
      </div>
      <VCard
        v-if="program.payments?.enable"
        :title="$t('payments')"
      >
        <VCardText>
          <VRow>
            <VCol cols="3">
              <div class="text-h5 text-error">
                Critical
              </div>
              <div>
                {{ program.payments?.critical_severity.min }} - {{ program.payments?.critical_severity.max }}
              </div>
            </VCol>
            <VCol cols="3">
              <div class="text-h5 text-error">
                High
              </div>
              <div>
                {{ program.payments?.high_severity.min }} - {{ program.payments?.high_severity.max }}
              </div>
            </VCol>
            <VCol cols="3">
              <div class="text-h5 text-warning">
                Medium
              </div>
              <div>
                {{ program.payments?.medium_severity.min }} - {{ program.payments?.medium_severity.max }}
              </div>
            </VCol>
            <VCol cols="3">
              <div class="text-h5 text-info">
                Low
              </div>
              <div>
                {{ program.payments?.low_severity.min }} - {{ program.payments?.low_severity.max }}
              </div>
            </VCol>
          </VRow>
        </VCardText>
      </VCard>

      <AssetsCard />

      <VCard
        :title="$t('description')"
        class="mt-4"
      >
        <VCardText>
          <TextEditor
            v-model="program.description"
            preview
          />
        </VCardText>
      </VCard>
      <VCard
        :title="$t('program-exclusions')"
        class="mt-4"
      >
        <VCardText>
          <TextEditor
            v-model="program.exclusion"
            preview
          />
        </VCardText>
      </VCard>
    </VCol>

    <VCol cols="3">
      <VCard>
        <VCardText class="d-flex flex-column align-center">
          <div class="mb-4">
            {{ $t('do-you-want-to-submit-report') }}
          </div>
          <VBtn :to="`/hacker/programs/${$route.params.id}/reports/create`">
            {{ $t('submit-report') }}
          </VBtn>
        </VCardText>
      </VCard>

      <VCard class="mt-4 bg-background">
        <VCardText>
          Some metrics should be here. We need to talk about it for future phases.
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
