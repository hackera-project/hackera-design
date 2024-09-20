<script setup lang="ts">
const tab = ref('general')
</script>

<template>
  <div>
    <div class="text-h4 mb-4">
      Program Title
    </div>
    <VCard>
      <VTabs
        v-model="tab"
        grow
      >
        <VTab value="general">
          {{ $t('general') }}
        </VTab>
        <VTab value="assets">
          {{ $t('assets') }}
        </VTab>
        <VTab value="scope-exclusions">
          {{ $t('scope-exclusions') }}
        </VTab>
        <VTab value="payments">
          {{ $t('payments') }}
        </VTab>
        <VTab value="reports">
          {{ $t('reports') }}
        </VTab>
      </VTabs>

      <VCardText>
        <VTabsWindow v-model="tab">
          <VTabsWindowItem value="general">
            <GeneralForm />
          </VTabsWindowItem>
          <VTabsWindowItem value="assets">
            <AssetsForm />
          </VTabsWindowItem>
          <VTabsWindowItem value="scope-exclusions">
            <ScopeExclusionsForm />
          </VTabsWindowItem>
          <VTabsWindowItem value="payments">
            <PaymentsForm />
          </VTabsWindowItem>
          <VTabsWindowItem value="reports">
            <ReportsForm />
          </VTabsWindowItem>
        </VTabsWindow>
      </VCardText>
    </VCard>
  </div>
</template>
