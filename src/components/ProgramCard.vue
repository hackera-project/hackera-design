<script setup lang="ts">
import type { Program } from '@/stores/program'

interface Props {
  program: Program
}

defineProps<Props>()
</script>

<template>
  <VCard
    class="h-100"
    :to="`/hacker/programs/${program.id}`"
  >
    <VImg
      :src="program"
      width="100%"
      height="200"
    />
    <VCardTitle>
      <div>
        {{ program.title }}
      </div>
      <div class="text-subtitle-1">
        {{ program.company?.title }}
      </div>
    </VCardTitle>

    <VCardText>
      <div class="d-flex flex-wrap ga-2">
        <template
          v-for="count, asset in program.assets"
          :key="asset"
        >
          <VChip
            class="rounded-pill"
            color="info"
            size="small"
          >
            {{ count }}
            <VDivider
              vertical
              class="mx-2"
            />
            {{ $t(asset) }}
          </VChip>
        </template>
      </div>
    </VCardText>

    <VCardText class="text-h5 font-weight-bold">
      {{ program.payments.min }} - {{ program.payments.max }}
    </VCardText>

    <div class="d-flex justify-space-between px-4 pb-2">
      <div>
        <VChip
          size="lg"
          prepend-icon="tabler-users"
          variant="text"
        >
          12
        </VChip>
      </div>
      <div>
        <VChip
          size="lg"
          prepend-icon="tabler-bug"
          variant="text"
        >
          20
        </VChip>
      </div>
      <div>
        <VChip
          size="lg"
          prepend-icon="tabler-coin"
          variant="text"
        >
          500
        </VChip>
      </div>
    </div>
  </VCard>
</template>
