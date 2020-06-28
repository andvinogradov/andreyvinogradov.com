<template>
  <div class="layout">
    <div class="container">
      <Header />

      <div class="content">
        <nuxt/>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
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
    box-shadow: 0 0 40px rgba(#000, 0.2);
  }

  .content {
    padding: 40px;
    background: #fff;
  }

  .layout {
    margin: 32px 0;
  }
</style>
