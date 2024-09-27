<script lang="ts" setup>
const options = ['VDP', 'BBP', 'Private']
</script>

<template>
  <div>
    <VRow>
      <VCol cols="4">
        <AppSelect
          :items="options"
          :label="$t('type')"
        />
      </VCol>
      <VCol cols="4">
        <AppTextField
          :label="$t('deadline')"
          type="number"
        />
      </VCol>
    </VRow>

    <TextEditor
      class="my-4"
      :placeholder="$t('program-description')"
    />
    <div class="d-flex justify-end">
      <VBtn>
        {{ $t('save') }}
      </VBtn>
    </div>
  </div>
</template>
