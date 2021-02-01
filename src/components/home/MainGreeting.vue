<template>
  <section id="main-greeting">
    <v-container fluid>
      <v-row>
        <v-col cols="6" class="my-16" align-self="center" style="padding-left: 15%">
          <h1 class="font-weight-light my-5">Hello! My name is</h1>
          <h1 class="display-2 font-weight-bold my-5">Vladyslav Zelesnkyi</h1>
          <h1 class="font-weight-light my-5">I`m Fullstack Developer</h1>

          <v-btn
              x-large
              class="my-3 black--text font-weight-bold"
              @click="$vuetify.goTo('#contacts')"
              color="amber accent-3"
          >
            Contact me
          </v-btn>

          <br/><br/><br/><br/><br/><br/><br/><br/>

          <v-btn
              v-for="(item, i) in items"
              :key="i"
              :href="item.href"
              text
              x-large
              icon
              target="_blank"
          >
            <v-icon v-text="item.icon" />
          </v-btn>

          <v-btn
              class="mr-0"
              title="Go to top"
              icon
              @click="$vuetify.goTo('#about')"
              x-large
          >
            <v-icon>mdi-arrow-down</v-icon>
          </v-btn>
        </v-col>

        <v-col cols="6" class="py-12 mb-16">
          <v-img
              :src="require('@/assets/vlados.jpg')"
              width="90%"
          >

          </v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

export default {
  name: 'MainGreeting',

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