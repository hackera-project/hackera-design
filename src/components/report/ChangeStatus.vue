<script setup lang="ts">
import { useReportUpdateStore } from '@/stores/report/update'
import { reportStatusOptions, severityOptions } from '@/utils/options'

const reportUpdate = useReportUpdateStore()
const { form, loading } = storeToRefs(reportUpdate)
const { submit } = reportUpdate
</script>

<template>
  <VCard
    :title="$t('update-status')"
    :loading="loading.fetch"
  >
    <VCardText>
      <VRow>
        <VCol cols="6">
          <AppSelect
            v-model="form.status"
            :label="$t('status')"
            :items="reportStatusOptions"
          />
        </VCol>
        <VCol cols="6">
          <AppSelect
            v-model="form.severity"
            :label="$t('severity')"
            :items="severityOptions"
          />
        </VCol>
        <VCol cols="6">
          <AppTextField
            v-model="form.payment"
            :label="$t('payment')"
          />
        </VCol>
        <VCol cols="12">
          <AppTextarea
            v-model="form.description"
            :label="$t('description')"
          />
        </VCol>
      </VRow>
      <div class="d-flex justify-end mt-4">
        <VBtn :loading="loading.submit" :disabled="loading.submit" @click="submit">
          {{ $t('save') }}
        </VBtn>
      </div>
    </VCardText>
  </VCard>
</template>
