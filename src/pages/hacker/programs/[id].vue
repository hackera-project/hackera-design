<script lang="ts" setup>
const tab = ref('test')
</script>

<template>
  <VRow>
    <VCol cols="9">
      <VCard>
        <VTabs
          v-model="tab"
          grow
        >
          <VTab key="test">
            something
          </VTab>
          <VTab>
            sometine else
          </VTab>
        </VTabs>

        <VTabsWindow
          v-model="tab"
          class=""
        >
          <VTabsWindowItem key="test">
            dadsfdfdaf
          </VTabsWindowItem>
        </VTabsWindow>
      </VCard>
    </VCol>
    <VCol
      cols="3"
    >
      <VCard>
        <VCardText class="d-flex flex-column align-center">
          <div class="mb-4">
            Do you want to sent a report?
          </div>
          <VBtn>
            submit a report
          </VBtn>
        </VCardText>
      </VCard>

      <template
        v-for="i in 10"
        :key="i"
      >
        <VCard class="mt-4 bg-background">
          <VCardText>
            <div class="text-h5 text-error">
              Critical
            </div>
            <div>
              800 - 1000
            </div>
          </VCardText>
          <VCardText>
            <div class="text-h5 text-warning">
              Medium
            </div>
            <div>
              600 - 800
            </div>
          </VCardText>
          <VCardText>
            <div class="text-h5 text-info">
              Low
            </div>
            <div>
              0 - 400
            </div>
          </VCardText>
        </VCard>
      </template>

      <VCard class="mt-4 bg-background">
        <VCardText>
          <div class="text-h5 text-error">
            Critical
          </div>
          <div>
            800 - 1000
          </div>
        </VCardText>
        <VCardText>
          <div class="text-h5 text-warning">
            Medium
          </div>
          <div>
            600 - 800
          </div>
        </VCardText>
        <VCardText>
          <div class="text-h5 text-info">
            Low
          </div>
          <div>
            0 - 400
          </div>
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
