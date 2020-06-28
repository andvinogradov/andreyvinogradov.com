<template>
  <div class="page">
    <h1>{{ page.title }}</h1>

    <nuxt-content :document="page"/>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, store, params, route, error }) {
    const slug = params.slug || 'index'

    console.log(slug)

    const page = await $content(store.state.lang, slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found' });
      })

    return {
      page
    }
  },

  head () {
    return {
      title: this.page.title
    }
  }
}
</script>

<style lang="scss">
  .page {
    h1 {
      margin-bottom: 32px;
      font-weight: bold;
      font-size: 28px;
      line-height: 28px;
    }

    p {
      margin: 16px 0;
      color: #333;
      font-size: 16px;
      line-height: 24px;
    }
  }
</style>
