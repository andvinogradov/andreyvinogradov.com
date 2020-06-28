export const actions = {
  async nuxtServerInit ({ commit }, { route, $content }) {
    const lang = route.params.lang ?? 'ru'

    const nav = await $content(lang)
      .only(['path', 'title'])
      .sortBy('order')
      .fetch()

    commit('SET_LANG', lang)
    commit('SET_NAV', nav)
  }
}

export const state = () => ({
  nav: [],
  lang: null
})

export const mutations = {
  SET_NAV (state, nav) {
    state.nav = nav
  },

  SET_LANG (state, lang) {
    state.lang = lang
  }
}
