<script lang="ts" setup>
import { useProgramGeneralUpdateStore } from '@/stores/program/update/general'

const options = [
  { label: 'VDP', value: 'vdp' },
  { label: 'BBP', value: 'bbp' },
  { label: 'Private', value: 'private' },
  { label: 'Campaign', value: 'campaign' },
]

const programForm = useProgramGeneralUpdateStore()
const { form, loading } = storeToRefs(programForm)
const { update } = programForm
</script>

<template>
  <div>
    <VRow>
      <VCol cols="4">
        <AppSelect
          v-model="form.type"
          :items="options"
          :label="$t('type')"
          item-value="value"
          item-title="label"
        />
      </VCol>
      <VCol cols="4">
        <AppTextField
          v-model="form.deadline"
          :label="$t('deadline')"
          type="number"
        />
      </VCol>
    </VRow>

    <TextEditor
      v-model="form.description"
      class="my-4"
      :placeholder="$t('program-description')"
    />
    <div class="d-flex justify-end">
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
