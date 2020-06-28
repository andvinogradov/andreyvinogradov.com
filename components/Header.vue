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
        </a>
      </NuxtLink>
      <NuxtLink
        to="/ru"
        :class="{ _active: isActiveLang('ru') }"
        v-slot="{ href }"
      >
        <a :href="href">
          Русский
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
        <NuxtLink :to="item.path" :class="{ _active: $route.path === item.path }">
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
      margin-bottom: 10px;
      color: #111;
      font-weight: bold;
      font-size: 32px;
      line-height: 32px;
      text-decoration: none;
    }

    &__description {
      margin-bottom: 32px;
      color: #888;
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
        display: block;
        margin-bottom: 16px;

        &._active {
          font-weight: bold;
        }
      }
    }
  }

  .header-nav {
    display: flex;
    height: 48px;
    margin: 0 -32px;
    padding: 0 32px;
    color: #eee;
    font-size: 14px;
    background: linear-gradient(#252525, #0a0a0a);

    a {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 20px;
      text-decoration: none;

      &._active {
        font-weight: bold;
      }
    }

    li {
      height: 100%;

      &:hover {
        color: #000;
        background: #eee;
      }
    }
  }
</style>
