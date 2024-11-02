<script lang="ts" setup>
import { useUserStore } from '@/stores/auth/me'
import { useDialogStore } from '@/stores/dialog'
import { useReportStore } from '@/stores/report/show'

const show = reactive({ description: false, reproduce: false })
const { openDialog } = useDialogStore()

const reportStore = useReportStore()
const { report, loading } = storeToRefs(reportStore)
const { setId, fetch, openFeedbackBox } = reportStore

setId(Number(useRoute().params.id))
fetch()

const { user } = storeToRefs(useUserStore())
</script>

<template>
  <div>
    <VProgressLinear
      v-if="loading.fetch"
      indeterminate
      class="mb-2"
    />
    <VRow>
      <VCol cols="8">
        <div>
          <div class="text-h4 mb-4">
            {{ report.title }}
          </div>

          <VCard>
            <template #title>
              <div class="d-flex justify-space-between align-center">
                <div class="text-h4">
                  {{ $t('description') }}
                </div>
                <VBtn
                  icon
                  variant="text"
                  @click="() => show.description = !show.description"
                >
                  <VIcon
                    icon="tabler-chevron-down"
                    style="transition: ease 0.5s all;"
                    :style="show.description ? 'transform: rotate(180deg)' : ''"
                  />
                </VBtn>
              </div>
            </template>

            <VExpandTransition>
              <VCardText v-show="show.description">
                <TextEditor
                  v-model="report.description"
                  preview
                />
              </VCardText>
            </VExpandTransition>
          </VCard>

          <VCard class="mt-4">
            <template #title>
              <div class="d-flex justify-space-between align-center">
                <div class="text-h4">
                  {{ $t('reproduce-steps') }}
                </div>
                <VBtn
                  icon
                  variant="text"
                  @click="() => show.reproduce = !show.reproduce"
                >
                  <VIcon
                    icon="tabler-chevron-down"
                    style="transition: ease 0.5s all;"
                    :style="show.reproduce ? 'transform: rotate(180deg)' : ''"
                  />
                </VBtn>
              </div>
            </template>

            <VExpandTransition>
              <VCardText v-show="show.reproduce">
                <TextEditor
                  v-model="report.reproduce_steps"
                  preview
                />
              </VCardText>
            </VExpandTransition>
          </VCard>

          <template
            v-for="feedback in report.feedbacks"
            :key="feedback.id"
          >
            <VRow
              class="mt-4"
              :justify="feedback.user.id === user.id ? 'start' : 'end'"
            >
              <VCol cols="7">
                <VCard>
                  <template #title>
                    <div class="d-flex justify-space-between align-center">
                      <div class="d-flex align-center ga-2">
                        <VAvatar>
                          <VImg src="data:image/jpeg;base64,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" />
                        </VAvatar>
                        <div>
                          {{ feedback.user.name }}
                        </div>
                      </div>

                      <div class="text-body-1">
                        {{ feedback.created_at }}
                      </div>
                    </div>
                  </template>
                  <VCardText>
                    <TextEditor
                      v-model="feedback.content"
                      preview
                    />
                  </VCardText>
                </VCard>
              </VCol>
            </VRow>
          </template>
        </div>
      </VCol>

      <VCol cols="4">
        <VCard :title="$t('report-details')">
          <VCardText>
            <VRow>
              <!-- reported at -->
              <VCol
                cols="4"
                class="font-weight-bold"
              >
                {{ $t('reported-at') }}
              </VCol>
              <VCol cols="8">
                {{ report.created_at }}
              </VCol>

              <!-- reported by -->
              <VCol
                cols="4"
                class="font-weight-bold"
              >
                {{ $t('reported-by') }}
              </VCol>
              <VCol cols="8">
                {{ report.hacker?.name }}
              </VCol>

              <!-- CWE -->
              <VCol
                cols="4"
                class="font-weight-bold"
              >
                {{ $t('CWE') }}
              </VCol>
              <VCol cols="8">
                {{ report.cwe }}
              </VCol>

              <!-- CVE -->
              <VCol
                cols="4"
                class="font-weight-bold"
              >
                {{ $t('CVE') }}
              </VCol>
              <VCol cols="8">
                {{ report.cve }}
              </VCol>

              <!-- severity -->
              <VCol
                cols="4"
                class="font-weight-bold"
              >
                {{ $t('severity') }}
              </VCol>
              <VCol cols="8">
                {{ report.severity }}
              </VCol>
            </VRow>

            <VDivider class="my-4" />

            <VRow>
              <VCol
                cols="4"
                class="font-weight-bold"
              >
                {{ $t('status') }}
              </VCol>
              <VCol cols="8">
                <VChip
                  color="info"
                  :label="false"
                >
                  {{ report.status }}
                </VChip>
              </VCol>
              <VCol
                cols="4"
                class="font-weight-bold"
              >
                {{ $t('payment') }}
              </VCol>
              <VCol cols="8">
                {{ report.payment }}
              </VCol>
            </VRow>
          </VCardText>
        </VCard>

        <VBtn
          block
          class="mt-2"
          prepend-icon="tabler-info-circle"
          @click="() => openFeedbackBox()"
        >
          {{ $t('write-feedback') }}
        </VBtn>

        <VBtn
          block
          class="mt-2"
          prepend-icon="tabler-info-circle"
        >
          {{ $t('update-status') }}
        </VBtn>

        <VBtn
          block
          class="mt-2"
          variant="outlined"
          prepend-icon="tabler-message"
          @click="() => openDialog('hacker-comment', '500px')"
        >
          {{ $t('write-comment') }}
        </VBtn>
      </VCol>
    </VRow>
  </div>
</template>
