<template>
  <div class="cart-item">
    <a href="#" class="cart-item__image">
      <img v-bind:src="require('../../assets/images/pictures/' + cart_item_data.image)" alt="picture">
    </a>
    <div class="cart-item__info">
      <div class="cart-item__name">{{cart_item_data.name}}</div>
      <div class="cart-item__price">{{cart_item_data.price}} $</div>
    </div>
    <div class="cart-item__quantity">
      <p>Количество</p>
      <div class="cart-item__quantity-block">
        <div
            class="cart-item__quantity-block-btn"
            @click="minusItem"
        >
          -
        </div>
        <div>{{cart_item_data.quantity}}</div>
        <div
            class="cart-item__quantity-block-btn"
            @click="plusItem"
        >
          +
        </div>
      </div>
    </div>
    <button
        @click="deleteFromCart"
        class="cart-item__button">
      <i class="material-icons">clear</i>
    </button>
  </div>
</template>

<script>

export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  mounted() {
    this.$set(this.cart_item_data, 'quantity', 1)
  },
  methods: {
    deleteFromCart() {
      this.$emit('deleteFromCart')
    },
    minusItem() {
      this.$emit('minus-item');
    },
    plusItem() {
      this.$emit('plus-item');
    }
  }
}
</script>

<style lang="scss">

.cart-item {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 40px;

  border: 1px solid #ddd4d4;
  box-shadow: 0 0 8px 0 #e3e0e0;
  padding: 10px;

  &__image {
    width: 150px;

    img {
      width: 100%;
    }
  }

  &__name {
    font-size: 20px;
    margin-bottom: 10px;
  }

  &__price {
    font-size: 22px;
    color: #f16d7f;
  }

  &__quantity {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
      font-size: 20px;

      &:first-child {
        margin-bottom: 10px;
      }
    }

    &-block {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-around;

      font-size: 20px;

      &-btn {
        width: 20px;
        height: 20px;

        display: flex;
        align-items: center;
        justify-content: center;

        color: #FFFFFF;
        background: #f16d7f;
        font-size: 15px;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }

  &__button {
    width: 25px;
    height: 25px;

    border: none;
    background: transparent;

    & .material-icons {
      font-size: 25px;
      transition: color .25s, transform .25s;

      &:hover {
        color: #f16d7f;
        transform: scale(1.4);
      }
    }
  }
}

</style>
