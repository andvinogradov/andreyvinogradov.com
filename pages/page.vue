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
    const lang = this.$store.state.lang

    return {
      htmlAttrs: {
        lang
      },

      title: this.page.title,
      titleTemplate: lang === 'ru'
        ? 'Андрей Виноградов | %s'
        : 'Andrey Vinogradov | %s'

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

    iframe {
      margin: 16px 0;
    }

    a {
      color: #1982d1;
      text-decoration: none;
    }

    strong {
      font-weight: bold;
    }

    em {
      font-style: italic;
    }
  }
</style>
