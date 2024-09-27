<script setup lang="ts"></script>

<template>
  <div>
    <TextEditor :placeholder="$t('program-exclusions')" class="mb-4" />
    <div class="d-flex justify-end">
      <VBtn>
        {{ $t('save') }}
      </VBtn>
    </div>
  </div>
</template>
