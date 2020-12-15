<template>
  <ul class="list-menu">
    <li class="list-menu__item">
      <router-link :to="{name: 'catalog', params: {PRODUCTS}}">
        Каталог
      </router-link>
    </li>
    <li class="list-menu__item">
      <a href="#">Доставка</a>
    </li>
    <li class="list-menu__item">
      <a href="#">Оплата</a>
    </li>
    <li class="list-menu__item">
      <a href="#">Контакты</a>
    </li>
    <li class="list-menu__item">
      <a href="#">О галерее</a>
    </li>
  </ul>
</template>

<script>

import {mapGetters} from 'vuex';

export default {
  name: "list-menu",
  components: {},
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
  },
}
</script>

<style lang="scss">

.list-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__item {

    &:not(:last-of-type) {
      margin-right: 48px;
    }

    a {
      display: block;

      text-decoration: none;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 21px;
      letter-spacing: 0;
      color: black;
      white-space: nowrap;

      transition: color 0.25s;

      &:hover {
        color: #f16d7f;
        text-decoration: underline;
      }
    }
  }
}

</style>
