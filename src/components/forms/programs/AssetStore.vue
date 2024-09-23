<script lang="ts" setup>
const type = ref('url')
const severity = ref('critical')

const typeOptions = ['url', 'wildcard', 'google_play_id', 'app_store_id', 'source_code']

const severityOptions = ['low', 'medium', 'high', 'critical']
</script>

<template>
  <VContainer>
    <VRow>
      <VCol cols="12">
        <AppSelect
          v-model="type"
          :items="typeOptions"
          :label="$t('type')"
          chips
          clearable
        />
      </VCol>
      <VCol cols="12">
        <AppTextField :label="$t('value')" />
      </VCol>

      <VCol cols="12">
        <AppSelect
          v-model="severity"
          :items="severityOptions"
          :label="$t('max-severity')"
          chips
          clearable
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex align-center"
      >
        <VBtn class="me-2">
          {{ $t('save') }}
        </VBtn>
        <VBtn
          color="error"
          variant="tonal"
        >
          {{ $t('cancel') }}
        </VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>
