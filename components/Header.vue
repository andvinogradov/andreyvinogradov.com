<template>
  <div class="header">
    <NuxtLink class="header__title" to="/">
      <template v-if="isActiveLang('ru')">
        Андрей Виноградов
      </template>
      <template v-if="isActiveLang('en')">
        Andrey Vinogradov
      </template>
    </NuxtLink>

    <div class="header__description">
      <template v-if="isActiveLang('ru')">
        Композитор, аранжировщик, исполнитель на колесной лире
      </template>
      <template v-if="isActiveLang('en')">
        Composer, arranger, hurdy-gurdy player
      </template>
    </div>

    <div class="header__lang">
      <NuxtLink
        to="/en"
        :class="{ _active: isActiveLang('en') }"
        v-slot="{ href }"
      >
        <a :href="href">
          English

          <img src="~assets/images/uk.svg">
        </a>
      </NuxtLink>
      <NuxtLink
        to="/ru"
        :class="{ _active: isActiveLang('ru') }"
        v-slot="{ href }"
      >
        <a :href="href">
          Русский

          <img src="~assets/images/russia.svg">
        </a>
      </NuxtLink>
    </div>

    <div class="header__image">
      <img src="~assets/images/header.jpg">
    </div>

    <ul class="header-nav">
      <li
        v-for="(item, index) in $store.state.nav"
        :key="index"
      >
        <NuxtLink
          :to="item.path"
          :class="{ _active: isNavItemActive(item) }"
        >
          {{ item.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    isActiveLang (lang) {
      return this.$store.state.lang === lang
    },

    isNavItemActive (item) {
      if (
        /^\/(ru|en)\/index/.test(item.path) &&
        /^\/(ru|en)$/.test(this.$route.path)
      ) {
        return true
      }

      return this.$route.path === item.path
    }
  }
}
</script>

<style lang="scss">
  .header {
    position: relative;
    padding: 32px 32px 0;
    background: #fff;

    &__title {
      display: block;
      margin-bottom: 8px;
      color: #000;
      font-weight: bold;
      font-size: 32px;
      line-height: 32px;
      text-decoration: none;
    }

    &__description {
      margin-bottom: 32px;
      color: #777;
      font-size: 16px;
      line-height: 24px;
    }

    &__image {
      min-height: 432px;
      margin: 0 -32px;
    }

    &__lang {
      position: absolute;
      top: 32px;
      right: 32px;
      color: #333;
      text-align: right;

      a {
        position: relative;
        display: block;
        margin-bottom: 16px;
        padding-right: 32px;
        font-size: 16px;
        line-height: 20px;
        text-decoration: none;

        &._active {
          font-weight: bold;
        }

        img {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: 20px;
          height: 20px;
          margin: auto;
        }
      }
    }
  }

  .header-nav {
    position: relative;
    display: flex;
    margin: -64px -32px 0;
    padding: 16px 32px 0;
    color: #fff;
    font-size: 14px;
    background: linear-gradient(rgba(#000, 0) 20%, rgba(#000, 0.7) 100%);

    a {
      display: flex;
      align-items: center;
      height: 48px;
      margin-right: 4px;
      padding: 0 20px;
      text-decoration: none;

      &:active,
      &:focus {
        outline: 0;
      }

      &._active {
        color: #333;
        background: #fff;
      }
    }

    li {
      height: 100%;

      &:hover {
        a {
          color: #333;
          background: #fff;
        }
      }
    }
  }
</style>
