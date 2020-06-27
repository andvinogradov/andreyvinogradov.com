export const actions = {
  async nuxtServerInit ({ commit }, { $content }) {
    const nav = await $content().only(['path', 'title']).sortBy('order').fetch()

    commit('SET_NAV', nav)
  }
}

export const state = () => ({
  nav: []
})

export const mutations = {
  SET_NAV (state, nav) {
    state.nav = nav
  }
}
