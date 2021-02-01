<template>
  <div id="home">
    <v-main class="black">

      <main-greeting/>

      <why-me />

      <about />

      <contact />

    </v-main>

<!--    <articles>-->
<!--      <banner />-->
<!--    </articles>-->

  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {
    MainGreeting: () => import('@/components/home/MainGreeting'),
    About: () => import('@/components/home/About'),
    WhyMe: () => import('@/components/home/WhyMe'),
    Contact: () => import('@/components/home/Contact'),
  },
}
</script>
