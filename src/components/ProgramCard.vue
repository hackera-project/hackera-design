<script setup lang="ts">
interface Asset {
  count: number
  type: string
}

interface Props {
  id: number
  title: string
  company: string
  assets: Array<Asset>
  logo: string
}

defineProps<Props>()
</script>

<template>
  <VCard
    class="h-100"
    :to="`/hacker/programs/${id}`"
  >
    <VImg
      :src="logo"
      width="100%"
      height="200"
    />
    <VCardTitle>
      <div>
        {{ title }}
      </div>
      <div class="text-subtitle-1">
        {{ company }}
      </div>
    </VCardTitle>

    <VCardText>
      <div class="d-flex flex-wrap ga-2">
        <template
          v-for="asset in assets"
          :key="asset.tyep"
        >
          <VChip
            class="rounded-pill"
            color="info"
            size="small"
          >
            {{ asset.count }}
            <VDivider
              vertical
              class="mx-2"
            />
            {{ asset.type }}
          </VChip>
        </template>
      </div>
    </VCardText>

    <VCardText class="text-h5 font-weight-bold">
      100$ - 6000$
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
