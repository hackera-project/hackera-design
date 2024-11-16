<script lang="ts" setup>
import { useProfileStore } from '@/stores/profile'

const fileInputRef = ref()

const profileStore = useProfileStore()
const { socialForm, generalForm, tempImage, loading } = storeToRefs(profileStore)
const { fetch, submitGeneral, submitSocial } = profileStore

fetch()
</script>

<template>
  <div>
    <VCard :title="$t('general')">
      <VCardText>
        <VRow>
          <VCol cols="3">
            <div class="d-flex justify-center">
              <VAvatar size="180">
                <VImg
                  cover
                  :src="tempImage || generalForm.logo"
                />
              </VAvatar>
            </div>

            <div class="d-flex justify-center mt-2">
              <VBtn @click="fileInputRef?.click()">
                {{ $t('upload-profile') }}
              </VBtn>
              <VFileInput
                ref="fileInputRef"
                v-model="generalForm.logoFile"
                class="d-none"
                accept="image/*"
              />
            </div>
          </VCol>
          <VCol cols="9">
            <VRow>
              <VCol cols="6">
                <AppTextField
                  v-model="generalForm.name"
                  :label="$t('name')"
                />
              </VCol>
              <VCol cols="6">
                <AppTextField
                  v-model="generalForm.username"
                  :label="$t('username')"
                />
              </VCol>
              <VCol cols="6">
                <AppTextField
                  v-model="generalForm.email"
                  :label="$t('email')"
                  readonly
                />
              </VCol>
              <VCol cols="6">
                <AppTextField
                  v-model="generalForm.website"
                  :label="$t('website')"
                />
              </VCol>
            </VRow>
          </VCol>
        </VRow>
        <div class="d-flex justify-end">
          <VBtn
            :loading="loading.general"
            :disabled="loading.general"
            @click="submitGeneral"
          >
            {{ $t('save') }}
          </VBtn>
        </div>
      </VCardText>
    </VCard>

    <VCard
      :title="$t('social-media')"
      class="mt-4"
    >
      <VCardText>
        <VRow>
          <VCol cols="6">
            <AppTextField
              v-model="socialForm.linkedin"
              :label="$t('linkedin')"
              prepend-inner-icon="tabler-brand-linkedin"
            />
          </VCol>
          <VCol cols="6">
            <AppTextField
              v-model="socialForm.x"
              :label="$t('x')"
              prepend-inner-icon="tabler-brand-x"
            />
          </VCol>
          <VCol cols="6">
            <AppTextField
              v-model="socialForm.github"
              :label="$t('github')"
              prepend-inner-icon="tabler-brand-github"
            />
          </VCol>
          <VCol cols="6">
            <AppTextField
              v-model="socialForm.gitlab"
              :label="$t('gitlab')"
              prepend-inner-icon="tabler-brand-gitlab"
            />
          </VCol>
        </VRow>
        <div class="d-flex justify-end mt-4">
          <VBtn
            :loading="loading.social"
            :disabled="loading.social"
            @click="submitSocial"
          >
            {{ $t('save') }}
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </div>
</template>
