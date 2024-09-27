<script lang="ts" setup>
const enable = ref(true)
</script>

<template>
  <div>
    <div class="d-flex justify-space-between align-center">
      <div class="text-h5">
        {{ $t('payments') }}
      </div>
      <div>
        <VSwitch
          v-model="enable"
          size="large"
          :label="$t('enable')"
        />
      </div>
    </div>

    <VRow class="mt-2">
      <VCol cols="6">
        <AppTextField
          :label="$t('low-severity')"
          :disabled="!enable"
        />
      </VCol>
      <VCol cols="6">
        <AppTextField :label="$t('medium-severity')" :disabled="!enable" />
      </VCol>
      <VCol cols="6">
        <AppTextField :label="$t('high-severity')" :disabled="!enable" />
      </VCol>
      <VCol cols="6">
        <AppTextField :label="$t('critical-severity')" :disabled="!enable" />
      </VCol>
    </VRow>

    <div class="d-flex justify-end mt-4">
      <VBtn :disabled="!enable">
        {{ $t('save') }}
      </VBtn>
    </div>
  </div>
</template>
