<template>
  <div class="page">
    <h1>{{ page.title }}</h1>

    <nuxt-content :document="page"/>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params, route, error }) {
    const slug = params.slug || 'index'
    const lang = /en/.test(route.path) ? 'en' : 'ru'

    const page = await $content(lang, slug)
      .fetch()
      .catch(err => {
        error({ statusCode: 404, message: 'Page not found' });
      })

    return {
      page
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
