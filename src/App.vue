<script setup lang="ts">
import { useTheme } from 'vuetify'
import { useDialogStore } from './stores/dialog'
import { useDrawerStore } from './stores/drawer'
import { useMessageBoxStore } from './stores/drawer/message-box'
import ScrollToTop from '@core/components/ScrollToTop.vue'
import initCore from '@core/initCore'
import { initConfigStore, useConfigStore } from '@core/stores/config'
import { hexToRgb } from '@core/utils/colorConverter'

const { global } = useTheme()

// ℹ️ Sync current theme with initial loader theme
initCore()
initConfigStore()

const configStore = useConfigStore()

const drawerStore = useDrawerStore()
const { isOpen, component, title } = storeToRefs(drawerStore)
const { closeDrawer } = drawerStore

const { isOpen: isOpenDialog, width: widthDialog, component: dialogComponent } = storeToRefs(useDialogStore())
const { closeDialog } = useDialogStore()

const { isOpen: isOpenMessageBox } = storeToRefs(useMessageBoxStore())
</script>

<template>
  <VLocaleProvider :rtl="configStore.isAppRTL">
    <!-- ℹ️ This is required to set the background color of active nav link based on currently active global theme's primary -->
    <VApp :style="`--v-global-theme-primary: ${hexToRgb(global.current.value.colors.primary)}`">
      <RouterView />

      <VNavigationDrawer
        v-model="isOpenMessageBox"
        temporary
        location="bottom"
        width="450px"
      >
        <MessageBox />
      </VNavigationDrawer>

      <VNavigationDrawer
        v-model="isOpen"
        temporary
        location="end"
        width="450"
      >
        <div class="h-screen bg-surface">
          <div
            class="border-b d-flex justify-space-between align-center px-4 py-2"
            style="height: 60px;"
          >
            <div class="text-h6">
              {{ title }}
            </div>
            <div>
              <VIcon
                icon="tabler-x"
                size="small"
                class="rounded-lg"
                color="grey-800"
                @click="closeDrawer"
              />
            </div>
          </div>
          <PerfectScrollbar
            :options="{ wheelPropagation: false }"
            style="height: calc(100vh - 60px); overflow: auto;"
          >
            <Component :is="component" />
          </PerfectScrollbar>
        </div>
      </VNavigationDrawer>

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
