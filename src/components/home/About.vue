<template>
  <section id="about" style="background-color: #212121">
    <v-container fluid>
      <v-row align-content="center" justify="center">
        <v-img
            :src="require('@/assets/preview-shape-logo.png')"
            class="ml-0 mr-5"
            contain
            height="115"
            width="115"
            max-width="115"
        />
        <div class="my-auto">
          <h1 class="display-1 font-weight-bold">Who am I?</h1>
        </div>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-img
              :src="require('@/assets/vlados.jpg')"
              width="100%"
              contain
          ></v-img>
        </v-col>

        <v-col cols="6" class="pa-8 pr-16">
          <v-divider color="yellow" width="200" class="mb-16"></v-divider>

          <span class="text-h5 font-weight-ligh">I am a Junior Fullstack Developer and I am eager to become a Seniour in programming. I am hightly-motivated, hard-working and an open-minded person, who likes to accept new ideas and share my own.
            <br />In my previous job I was involved in some programming processes and my education helped me to develop an ability  to feel the user’s goal on some level.  Now I am trying to keep up with the main trends in programming . But I desire to have more practice and interesting tasks.</span>

          <v-row align-content="center" justify="center" class="pt-16">
            <v-btn
                x-large
                class="my-3 black--text font-weight-bold"
                @click="$vuetify.goTo('#contacts')"
                color="amber accent-3"
            >
              Download CV
            </v-btn>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>

</script>