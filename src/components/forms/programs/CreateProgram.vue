<script lang="ts" setup>
import { useDialogStore } from '@/stores/dialog'
import { useProgramForm } from '@/stores/program/store'

const { closeDialog } = useDialogStore()

const programForm = useProgramForm()
const { form, loading } = storeToRefs(programForm)
const { submit } = programForm
</script>

<template>
  <VCard :title="$t('create-program')">
    <VCardText>
      <AppTextField
        v-model="form.title"
        :label="$t('title')"
      />
    </VCardText>
    <VCardActions>
      <div class="d-flex justify-end">
        <VBtn
          variant="elevated"
          :loading="loading.submit"
          :disabled="loading.submit"
          @click="submit"
        >
          {{ $t('create') }}
        </VBtn>
        <VBtn
          :disabled="loading.submit"
          @click="closeDialog"
        >
          {{ $t('cancel') }}
        </VBtn>
      </div>
    </VCardActions>
  </VCard>
</template>
