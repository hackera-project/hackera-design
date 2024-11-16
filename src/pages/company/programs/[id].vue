<script setup lang="ts">
import { router } from '@/plugins/1.router'
import { useProgramUpdateStore } from '@/stores/program/update'

const tab = ref('general')

const programUpdateStore = useProgramUpdateStore()
const { program, loading } = storeToRefs(programUpdateStore)
const { fetch, setId } = programUpdateStore

setId(Number(router.currentRoute.value.params.id))
fetch()
</script>

<template>
  <div>
    <VProgressLinear
      v-if="loading.fetch"
      indeterminate
    />
    <div class="text-h4 mb-4">
      {{ program.title }}
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
