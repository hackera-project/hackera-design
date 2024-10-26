<script lang="ts" setup>
import { useDestroyStore } from '@/stores/destroy'

const destroyStore = useDestroyStore()
const { resource, name, loading } = storeToRefs(destroyStore)
const { remove } = destroyStore
</script>

<template>
  <VCard :title="$t('remove-title', { resource })">
    <VCardText>
      {{ $t('remove-confirmation', { name }) }}
    </VCardText>
    <VCardText class="d-flex justify-end">
      <VBtn
        color="error"
        :loading="loading"
        :disabled="loading"
        @click="remove"
      >
        {{ $t('remove') }}
      </VBtn>
    </VCardText>
  </VCard>
</template>
