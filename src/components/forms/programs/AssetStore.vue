<script lang="ts" setup>
import { useDrawerStore } from '@/stores/drawer'
import { maxSeverityOptions, typeOptions, useProgramAssetsForm } from '@/stores/program/update/asset/store'

const assetForm = useProgramAssetsForm()
const { form, loading } = storeToRefs(assetForm)
const { submit } = assetForm

const { closeDrawer } = useDrawerStore()
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <AppSelect
          v-model="form.type"
          :items="typeOptions"
          :label="$t('type')"
          item-title="title"
          item-value="value"
          chips
          clearable
        />
      </VCol>
      <VCol cols="12">
        <AppTextField
          v-model="form.asset_value"
          :label="$t('value')"
        />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="form.max_severity"
          :items="maxSeverityOptions"
          :label="$t('max-severity')"
          item-title="title"
          item-value="value"
          chips
          clearable
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex align-center"
      >
        <VBtn
          class="me-2"
          :loading="loading.submit"
          :disabled="loading.submit"
          @click="submit"
        >
          {{ $t('save') }}
        </VBtn>
        <VBtn
          color="error"
          variant="tonal"
          @click="closeDrawer"
        >
          {{ $t('cancel') }}
        </VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>
