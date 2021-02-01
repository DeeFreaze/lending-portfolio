<template>
  <section id="contacts">
    <v-container class="mx-auto">
      <v-row>
        <v-img
            :src="require('@/assets/preview-shape-logo.png')"
            class="ml-0 mr-5"
            contain
            height="115"
            width="115"
            max-width="115"
        />
        <div class="my-auto">
          <h1 class="display-1 font-weight-bold">Contact me</h1>
        </div>
      </v-row>

      <v-container class="mx-auto">
        <v-row>
          <v-col cols="6" class="px-16">
            <h1 class="font-weight-light mb-12">How can I help you?</h1>

            <v-form
                ref="form"
                v-model="valid"
                lazy-validation
            >
              <v-text-field
                  v-model="name"
                  :counter="25"
                  :rules="nameRules"
                  label="Name"
                  required
                  filled
              ></v-text-field>

              <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  required
                  filled
              ></v-text-field>

              <v-textarea
                  v-model="message"
                  :rules="messageRules"
                  label="Message"
                  required
                  filled
                  height="200"
              ></v-textarea>

              <v-btn
                  :disabled="!valid"
                  color="amber accent-3"
                  class="my-6 black--text font-weight-bold"
                  @click="validate"
              >
                Send
              </v-btn>
            </v-form>
          </v-col>

          <v-col cols="6" class="pa-16">
            <div class="box py-9">
              <h1 class="ml-12 ma-3 pt-12 font-weight-medium">Contacts</h1>

              <br />

              <v-icon x-large class="ml-12 ma-3">email</v-icon>
              <span class="ma-2 font-weight-medium">vladyslav.zelenskyi.dev@google.com</span>

              <br />

              <v-icon x-large class="ml-12 ma-3">call</v-icon>
              <span class="ma-2 font-weight-medium">+38 (099) 310-50-57</span>

              <br />

              <v-icon x-large class="ml-12 ma-3">query_builder</v-icon>
              <span class="ma-2 font-weight-medium">10:00 - 22:00</span>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Contact',

  data: () => ({
    valid: true,

    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length < 20) || 'Name must be less than 20 characters',
    ],

    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],

    message: '',
    messageRules: [
      v => !!v || 'Message is required',
    ],
  }),

  methods: {
    validate () {
      this.$refs.form.validate()
    },
  },
}
</script>

<style scoped>
  .box {
    position: relative;
  }
  .box::before {
    content: "";
    position: absolute;
    border-top: 2px solid #FFD700;
    width: 100px;
    border-left: 2px solid #FFD700;
    height: 170px;
  }
  .box::after {
    content: "";
    position: absolute;
    border-bottom: 2px solid #FFD700;
    width: 100px;
    border-right: 2px solid #FFD700;
    height: 170px;
    right: 0;
    bottom: 0
  }

</style>