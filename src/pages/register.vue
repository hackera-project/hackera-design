<script setup lang="ts">
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'

import registerMultiStepIllustrationDark from '@images/illustrations/register-multi-step-illustration-dark.png'
import registerMultiStepIllustrationLight from '@images/illustrations/register-multi-step-illustration-light.png'

import registerMultiStepBgDark from '@images/pages/register-multi-step-bg-dark.png'
import registerMultiStepBgLight from '@images/pages/register-multi-step-bg-light.png'
import { useRegisterStore } from '@/stores/auth/register'

const registerMultiStepBg = useGenerateImageVariant(registerMultiStepBgLight, registerMultiStepBgDark)

definePage({
  meta: {
    layout: 'blank',
    public: true,
  },
})

const currentStep = ref(0)
const isPasswordVisible = ref(false)

const registerMultiStepIllustration = useGenerateImageVariant(registerMultiStepIllustrationLight, registerMultiStepIllustrationDark)

const steps = [
  {
    title: 'Role',
    icon: 'tabler-user',
  },
  {
    title: 'Personal Information',
    icon: 'tabler-info-circle',
  },
  {
    title: 'Company Information',
    icon: 'tabler-building',
  },
]

const roles = [
  { title: 'Hacker', value: 'hacker' },
  { title: 'Company Admin', value: 'company-admin' },
]

const registerStore = useRegisterStore()
const { form, loading } = storeToRefs(registerStore)
const { submit } = registerStore
</script>

<template>
  <RouterLink to="/">
    <div class="auth-logo d-flex align-center gap-x-3">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="auth-title">
        {{ themeConfig.app.title }}
      </h1>
    </div>
  </RouterLink>

  <VRow
    no-gutters
    class="auth-wrapper"
  >
    <VCol
      md="4"
      class="d-none d-md-flex"
    >
      <!-- here your illustration -->
      <div class="d-flex justify-center align-center w-100 position-relative">
        <VImg
          :src="registerMultiStepIllustration"
          class="illustration-image flip-in-rtl"
        />

        <img
          class="bg-image position-absolute w-100 flip-in-rtl"
          :src="registerMultiStepBg"
          alt="register-multi-step-bg"
          height="340"
        >
      </div>
    </VCol>

    <VCol
      cols="12"
      md="8"
      class="auth-card-v2 d-flex align-center justify-center pa-10"
      style="background-color: rgb(var(--v-theme-surface));"
    >
      <VCard
        flat
        class="mt-12 mt-sm-10"
      >
        <AppStepper
          v-model:current-step="currentStep"
          :items="steps"
          :direction="$vuetify.display.smAndUp ? 'horizontal' : 'vertical'"
          icon-size="22"
          class="stepper-icon-step-bg mb-12"
        />

        <VWindow
          v-model="currentStep"
          style="max-inline-size: 681px;"
        >
          <VForm>
            <VWindowItem>
              <h4 class="text-h4">
                Choose Your Role
              </h4>
              <p class="text-body-1 mb-6">
                Do you want to continue as a Hacker or Company Admin?
              </p>

              <VRow>
                <VCol cols="12">
                  <AppSelect
                    v-model="form.role"
                    :label="$t('role')"
                    :items="roles"
                    item-value="value"
                    item-title="title"
                  />
                </VCol>
              </VRow>
            </VWindowItem>

            <VWindowItem>
              <h4 class="text-h4">
                Personal Information
              </h4>
              <p>
                Enter Your Personal Information
              </p>

              <VRow>
                <VCol
                  cols="12"
                  md="6"
                >
                  <AppTextField
                    v-model="form.name"
                    :label="$t('name')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <AppTextField
                    v-model="form.username"
                    :label="$t('username')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <AppTextField
                    v-model="form.email"
                    :label="$t('email')"
                  />
                </VCol>

                <VCol
                  cols="12"
                  md="6"
                >
                  <AppTextField
                    v-model="form.password"
                    :label="$t('password')"
                    placeholder="············"
                    :type="isPasswordVisible ? 'text' : 'password'"
                    :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                    @click:append-inner="isPasswordVisible = !isPasswordVisible"
                  />
                </VCol>
              </VRow>
            </VWindowItem>

            <VWindowItem>
              <h4 class="text-h4">
                Company Information
              </h4>
              <p>
                Enter Your Company Information
              </p>

              <VRow>
                <VCol cols="12">
                  <AppTextField
                    v-model="form.company_title"
                    :label="$t('company-title')"
                  />
                </VCol>
              </VRow>
            </VWindowItem>
          </VForm>
        </VWindow>

        <div class="d-flex flex-wrap justify-space-between gap-x-4 mt-6">
          <VBtn
            color="secondary"
            :disabled="currentStep === 0"
            variant="tonal"
            @click="currentStep--"
          >
            <VIcon
              icon="tabler-arrow-left"
              start
              class="flip-in-rtl"
            />
            {{ $t('previous') }}
          </VBtn>

          <VBtn
            v-if="steps.length - 1 === currentStep || (currentStep === 1 && form.role === 'hacker')"
            color="success"
            :loading="loading.submit"
            :disabled="loading.submit"
            @click="submit"
          >
            submit
          </VBtn>

          <VBtn
            v-else
            @click="currentStep++"
          >
            {{ $t('next') }}
            <VIcon
              icon="tabler-arrow-right"
              end
              class="flip-in-rtl"
            />
          </VBtn>
        </div>

        <div class="mt-2 d-flex justify-center">
          <span class="d-inline-block">
            Already have an account?
          </span>
          <RouterLink
            to="/login"
            class="text-primary ms-1 d-inline-block text-body-1"
          >
            Please login
          </RouterLink>
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth.scss";

.illustration-image {
  block-size: 550px;
  inline-size: 248px;
}

.bg-image {
  inset-block-end: 0;
}
</style>
