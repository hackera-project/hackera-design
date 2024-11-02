<script setup lang="ts">
import { router } from '@/plugins/1.router'
import { useProgramUpdateStore } from '@/stores/program/update'
import { useProgramAssetsStore } from '@/stores/program/update/asset'
import { maxSeverityOptions } from '@/stores/program/update/asset/store'
import { useReportForm } from '@/stores/report/store'

const programStore = useProgramUpdateStore()
const { program } = storeToRefs(programStore)

programStore.setId(Number(router.currentRoute.value.params.id))

const assetsStore = useProgramAssetsStore()
const { assetsOption } = storeToRefs(assetsStore)

const reportForm = useReportForm()
const { form, loading } = storeToRefs(reportForm)
const { submit } = reportForm

assetsStore.fetch()
programStore.fetch()
</script>

<template>
  <div>
    <div class="text-h4 mb-4">
      {{ $t('create-report') }} ({{ program.title }})
    </div>

    <VRow>
      <VCol cols="8">
        <VCard :title="$t('general-info')">
          <VCardText>
            <VRow>
              <VCol cols="6">
                <AppTextField
                  v-model="form.title"
                  :label="$t('title')"
                />
              </VCol>
              <VCol cols="6">
                <AppAutocomplete
                  v-model="form.asset_id"
                  :items="assetsOption"
                  item-value="id"
                  item-title="title"
                  :label="$t('asset')"
                />
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
        <VCard
          :title="$t('description')"
          class="mt-4"
        >
          <VCardText>
            <TextEditor v-model="form.description" />
          </VCardText>
        </VCard>

        <VCard
          :title="$t('reproduce-steps')"
          class="mt-4"
        >
          <VCardText>
            <TextEditor v-model="form.reproduce_steps" />
          </VCardText>
        </VCard>
      </VCol>

      <VCol cols="4">
        <VCard :title="$t('vulnerability-info')">
          <VCardText>
            <VRow>
              <VCol cols="12">
                <AppSelect
                  v-model="form.severity"
                  :label="$t('severity')"
                  :items="maxSeverityOptions"
                  item-title="title"
                  item-value="value"
                  chips
                  clearable
                />
              </VCol>
              <VCol cols="12">
                <AppTextField
                  v-model="form.cve"
                  :label="$t('CVE')"
                />
              </VCol>
              <VCol cols="12">
                <AppTextField
                  v-model="form.cwe"
                  :label="$t('CWE')"
                />
              </VCol>
            </VRow>
          </VCardText>
        </VCard>
        <VCard
          class="mt-4"
          :title="$t('image')"
        >
          <VCardText>
            <VFileInput
              chips
              accept="image/*"
              multiple
            />
          </VCardText>
        </VCard>
        <VCard
          class="mt-4"
          :title="$t('video')"
        >
          <VCardText>
            <VFileInput
              chips
              accept="video/*"
              multiple
            />
          </VCardText>
        </VCard>
        <VBtn
          class="mt-4"
          block
          :loading="loading.submit"
          :disabled="loading.submit"
          @click="() => submit()"
        >
          {{ $t('submit-report') }}
        </VBtn>
      </VCol>
    </VRow>
  </div>
</template>
