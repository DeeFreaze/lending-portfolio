<template>
  <v-footer
      color="grey darken-4"
      class="py-4"
      height=300
  >
    <v-container class="mx-auto">
      <v-row justufy>
        <v-col cols="5">
          <v-img
              :src="require('@/assets/logo.png')"
              class="mr-5"
              contain
              height="68"
              width="68"
              max-width="68"
              @click="$vuetify.goTo(0)"
          />
        </v-col>

        <v-spacer />

        <v-col cols="2" align="center" >
          <v-btn
              class="mr-0"
              title="Go to top"
              fab
              outlined
              @click="$vuetify.goTo(0)"
          >
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>

        </v-col>

        <v-spacer />

        <v-col cols="5" align-self="center">
          <v-btn
              v-for="(item, i) in items"
              :key="i"
              :href="item.href"
              color="primary"
              text
              icon
              x-large
              target="_blank"
          >
            <v-icon v-text="item.icon" />
          </v-btn>

          <v-btn
              class="hidden-sm-and-down"
              plain
              @click="$vuetify.goTo('#contacts')"
          >
            Contacts
          </v-btn>

          <span class="font-weight-normal">+38(099)310-50-57</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: 'CoreFooter',

  data: () => ({
    items: [
      // {
      //   href: '#!',
      //   icon: 'mdi-twitter',
      // },
      {
        href: '#!',
        icon: 'mdi-instagram',
      },
      // {
      //   href: '#!',
      //   icon: 'mdi-facebook',
      // },
      // {
      //   href: '#!',
      //   icon: 'mdi-google-plus',
      // },
      {
        href: '#!',
        icon: 'mdi-reddit',
      },
      {
        href: '#!',
        icon: 'mdi-discord',
      },
      // {
      //   href: '#!',
      //   icon: 'mdi-pinterest',
      // },
    ],
  }),
}
</script>
