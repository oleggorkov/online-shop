<template>
  <div class="cart">
    <h1>Корзина</h1>
    <div class="cart__empty" v-if="!cart_data.length">Нет товаров в корзине...</div>
    <cart-item
      v-for="(item, index) in cart_data"
      :key="index"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(index)"
      @minus-item="minus_item(index)"
      @plus-item="plus_item(index)"
    />
    <div class="cart__total">
      <div class="cart__total-text">Итого:</div>
      <span>{{ cartTotalCost }} $</span>
    </div>
  </div>
</template>

<script>

import CartItem from "./cart-item";
import {mapActions} from 'vuex';

export default {
  name: "cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
  CartItem
  },
  methods: {
    ...mapActions([
      'DELETE_FROM_CART',
      'PLUS_ITEM_CART',
      'MINUS_ITEM_CART'
    ]),
    minus_item(index) {
      this.MINUS_ITEM_CART(index);
    },
    plus_item(index) {
      this.PLUS_ITEM_CART(index);
    },
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    }
  },
  computed: {
    cartTotalCost() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        })
        return result;
      } else {
        return 0;
      }
    }
  }
}
</script>

<style lang="scss">

.cart {
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  flex-direction: column;

  border: 2px solid #f16d7f;
  padding: 10px;

  h1 {
    width: 100%;

    display: flex;
    justify-content: center;

    margin-bottom: 30px;
  }

  &__empty {
    font-size: 15px;
    margin-top: 20px;
  }

  &__total {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    background: #b84848;
    padding: 20px;
    margin-top: 20px;

    &-text {
      color: #FFFFFF;
      font-size: 25px;
    }

    span {
      font-size: 25px;
      color: #FFFFFF;
    }
  }
}

</style>
