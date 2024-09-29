<script setup lang="ts">
const content = ref('')

watch(content, () => {
  console.log(content.value)
})
</script>

<template>
  <div>
    <TextEditor
      v-model="content"
      :placeholder="$t('program-exclusions')"
      class="mb-4"
    />
    <div class="d-flex justify-end">
      <VBtn>
        {{ $t('save') }}
      </VBtn>
    </div>
  </div>
</template>
