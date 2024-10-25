<script setup lang="ts">
import { useProgramExclusionsUpdateStore } from '@/stores/program/update/exclusions'

const programForm = useProgramExclusionsUpdateStore()
const { form, loading } = programForm
const { update } = programForm
</script>

<template>
  <div>
    <TextEditor
      v-model="form.exclusion"
      :placeholder="$t('program-exclusions')"
      class="mb-4"
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
