<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useDialogStore } from './stores/dialog'
import ScrollToTop from '@core/components/ScrollToTop.vue'
import initCore from '@core/initCore'
import { initConfigStore, useConfigStore } from '@core/stores/config'
import { hexToRgb } from '@core/utils/colorConverter'

const { global } = useTheme()

// ℹ️ Sync current theme with initial loader theme
initCore()
initConfigStore()

const configStore = useConfigStore()

const { isOpen: isOpenDialog, width: widthDialog, component: dialogComponent } = storeToRefs(useDialogStore())
const { closeDialog } = useDialogStore()
</script>

<template>
  <VLocaleProvider :rtl="configStore.isAppRTL">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <RouterView />

      <VDialog
        v-model="isOpenDialog"
        :width="widthDialog"
      >
        <DialogCloseBtn @click="closeDialog" />
        <Component :is="dialogComponent" />
      </VDialog>
      <ScrollToTop />
    </VApp>
  </VLocaleProvider>
</template>
