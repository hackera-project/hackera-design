<script lang="ts" setup>
import { useDialogStore } from '@/stores/dialog'

const { closeDialog } = useDialogStore()
</script>

<template>
  <VCard :title="$t('create-program')">
    <VCardText>
      <AppTextField :label="$t('title')" />
    </VCardText>
    <VCardActions>
      <div class="d-flex justify-end">
        <VBtn
          to="/company/programs/1"
          variant="elevated"
          @click="() => closeDialog()"
        >
          {{ $t('create') }}
        </VBtn>
        <VBtn @click="() => closeDialog()">
          {{ $t('cancel') }}
        </VBtn>
      </div>
    </VCardActions>
  </VCard>
</template>
