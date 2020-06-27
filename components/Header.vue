<template>
  <div class="header">
    <a class="header__title" href="/">
      Андрей Виноградов
    </a>

    <div class="header__description">
      Композитор, аранжировщик, исполнитель на колесной лире
    </div>

    <div class="header__image">
      <img src="~assets/images/header.jpg">
    </div>

    <ul class="header-nav">
      <li
        v-for="(item, index) in $store.state.nav"
        :key="index"
      >
        <RouterLink :to="item.path">
          {{ item.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .header {
    padding: 40px 40px 0;
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
      margin-bottom: 40px;
      color: #7a7a7a;
      font-size: 16px;
      line-height: 24px;
    }

    &__image {
      margin: 0 -40px;
    }
  }

  .header-nav {
    display: flex;
    height: 48px;
    margin: 0 -40px;
    padding: 0 40px;
    background: linear-gradient(#252525, #0a0a0a);
    color: #eee;
    font-size: 14px;

    a {
      display: flex;
      align-items: center;
      height: 100%;
      padding: 0 20px;
      text-decoration: none;

      &.nuxt-link-exact-active {
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
