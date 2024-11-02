<script setup lang="ts">
import { useMessageBoxStore } from '@/stores/drawer/message-box'

const messageBox = useMessageBoxStore()
const { content, loading } = storeToRefs(messageBox)
const { submit } = messageBox
</script>

<template>
  <div class="d-flex justify-center">
    <VCard
      style="width: 900px"
      class="rounded-0 rounded-t"
      :title="$t('write-message')"
    >
      <VCardText>
        <TextEditor v-model="content" />

        <VBtn
          block
          class="mt-4"
          :loading="loading"
          :disabled="loading"
          @click="() => submit()"
        >
          {{ $t('send') }}
        </VBtn>
      </VCardText>
    </VCard>
  </div>
</template>
