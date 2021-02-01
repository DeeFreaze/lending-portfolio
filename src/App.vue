<template>
  <div id="app">
    <v-app>
      <core-app-bar />

      <core-view />

      <core-footer />
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',

  components: {
    CoreFooter: () => import('@/components/core/Footer'),
    CoreAppBar: () => import('@/components/core/AppBar'),
    CoreView: () => import('@/components/core/View'),
  },
}
</script>


