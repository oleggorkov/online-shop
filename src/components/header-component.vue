<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__content">
        <logo />
        <list-menu />
      </div>
      <router-link class="header__cart" :to="{name: 'cart', params: {cart_data: CART}}">
          <i class="material-icons">add_shopping_cart</i>
          <span>{{CART.length}}</span>
      </router-link>
    </div>
  </header>
</template>

<script>

import ListMenu from "../components/list-menu";
import logo from "../components/logo";
import {mapGetters} from 'vuex';

export default {

  name: "header-component",
  components: {
    ListMenu,
    logo
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
        'CART'
    ])
  }
}

</script>

<style lang="scss">


.header {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: flex-start;
  flex: 0 0 auto;

  border-bottom: 1px solid gray;

  &__content {
    display: flex;
  }

  &__wrapper {
    width: 100%;
    height: 96px;
    max-width: 1216px;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .list-menu {
    margin-left: 48px;
  }

  &__cart {
    width: 35px;
    height: 35px;

    display: flex;
    align-content: center;
    justify-content: center;

    position: relative;

    text-decoration: none;

    & .material-icons {
      font-size: 30px;
      color: #f16d7f;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      color: #FFFFFF;
      background: #f16d7f;
      font-size: 12px;
      right: -12px;
      top: -7px;
    }
  }
}

</style>
