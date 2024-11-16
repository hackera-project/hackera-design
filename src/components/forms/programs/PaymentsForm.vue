<script lang="ts" setup>
import { useProgramPaymentsUpdateStore } from '@/stores/program/update/payments'

const programForm = useProgramPaymentsUpdateStore()
const { form, loading } = storeToRefs(programForm)
const { update } = programForm
</script>

<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <div class="text-h5">
        {{ $t('payments') }}
      </div>
      <div>
        <VSwitch
          v-model="form.enable"
          size="large"
          :label="$t('enable')"
        />
      </div>
    </div>

    <VRow
      class="mt-2"
      align="center"
    >
      <VCol cols="1">
        {{ $t('low-severity') }}:
      </VCol>

      <VCol cols="2">
        <AppTextField
          v-model="form.low_severity.min"
          :label="$t('min')"
          :disabled="!form.enable"
          type="number"
        />
      </VCol>
      <VCol cols="2">
        <AppTextField
          v-model="form.low_severity.max"
          :label="$t('max')"
          :disabled="!form.enable"
          type="number"
        />
      </VCol>

      <VCol
        cols="1"
        offset="1"
      >
        {{ $t('medium-severity') }}:
      </VCol>

      <VCol cols="2">
        <AppTextField
          v-model="form.medium_severity.min"
          :label="$t('min')"
          :disabled="!form.enable"
          type="number"
        />
      </VCol>
      <VCol cols="2">
        <AppTextField
          v-model="form.medium_severity.max"
          :label="$t('max')"
          :disabled="!form.enable"
          type="number"
        />
      </VCol>
    </VRow>

    <VRow align="center">
      <VCol cols="1">
        {{ $t('high-severity') }}:
      </VCol>

      <VCol cols="2">
        <AppTextField
          v-model="form.high_severity.min"
          :label="$t('min')"
          :disabled="!form.enable"
          type="number"
        />
      </VCol>
      <VCol cols="2">
        <AppTextField
          v-model="form.high_severity.max"
          :label="$t('max')"
          :disabled="!form.enable"
          type="number"
        />
      </VCol>

      <VCol
        cols="1"
        offset="1"
      >
        {{ $t('critical-severity') }}:
      </VCol>

      <VCol cols="2">
        <AppTextField
          v-model="form.critical_severity.min"
          :label="$t('min')"
          :disabled="!form.enable"
          type="number"
        />
      </VCol>
      <VCol cols="2">
        <AppTextField
          v-model="form.critical_severity.max"
          :label="$t('max')"
          :disabled="!form.enable"
          type="number"
        />
      </VCol>
    </VRow>

    <div class="d-flex justify-end mt-4">
      <VBtn
        :loading="loading"
        :disabled="loading"
        @click="update"
      >
        {{ $t('save') }}
      </VBtn>
    </div>
  </div>
</template>
