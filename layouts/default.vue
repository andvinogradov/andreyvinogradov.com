<template>
  <div class="layout">
    <Header class="container" />

    <div class="container content">
      <nuxt/>
    </div>

    <Footer class="container" />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },

  head: {
    base: { href: 'https://vursen.github.io/andreyvinogradov/' }
  }
}
</script>

<style lang="scss">
  @import '~/styles/reset.scss';

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background: url('~assets/images/bg.jpg') repeat;
  }

  .container {
    width: 864px;
    margin: 0 auto;
  }

  .content {
    padding: 40px;
    background: #fff;
  }

  .layout {
    padding: 32px 0;
  }
</style>
