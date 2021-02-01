<template>
  <v-app-bar color="black" flat>
    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-img
            :src="require('@/assets/logo.png')"
            class="mr-5"
            contain
            height="68"
            width="68"
            max-width="68"
            @click="$vuetify.goTo(0)"
        />
        <h2>Fullstack Developer</h2>

        <v-spacer />
        <v-btn
            v-for="(link, i) in links"
            :key="i"
            v-bind="link"
            class="hidden-sm-and-down"
            plain
            @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>

<!--        text-decoration-underline-->

        <span class="font-weight-normal mx-5">+38(099)310-50-57</span>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
// Utilities
import {
  mapGetters,
  mapMutations,
} from 'vuex'

export default {
  name: 'CoreAppBar',

  computed: {
    ...mapGetters(['links']),
  },

  methods: {
    onClick (e, item) {
      e.stopPropagation()

      if (item.to || !item.href) return

      this.$vuetify.goTo(item.href.endsWith('!') ? 0 : item.href)
    },
  },
}
</script>
