<template>
  <div id="app">
    <app-header></app-header>
    <sidebar></sidebar>
    <app-content></app-content>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import AppHeader from './layout/AppHeader.vue'
  import Sidebar from './layout/Sidebar.vue'
  import AppContent from './layout/AppContent.vue'
  import AppFooter from './layout/AppFooter.vue'
export default {
    name: 'app',
    components: {
      AppHeader,
      Sidebar,
      AppContent,
      AppFooter
    }
  }
</script>

<style>

</style>
