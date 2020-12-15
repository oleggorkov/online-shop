<template>
  <a href="#" class="product-card">
    <popup
        v-if="isPopupVisible"
        @closePopup="closeInfoPopup"
        :popupTitle="product_data.name"
        @addToCartPopup="addToCart"
    >
      <div class="popup__content">
        <img v-bind:src="require('../../assets/images/pictures/' + product_data.image)" alt="picture">
        <div class="popup__info">
          <div class="product-card__footer-name">{{ product_data.name }}</div>
          <div class="product-card__footer-price">{{ product_data.price }} $</div>
        </div>
      </div>
    </popup>
    <a href="#"
       class="product-card__image"
       @click="showPopup"
    >
      <img v-bind:src="require('../../assets/images/pictures/' + product_data.image)" alt="picture">
    </a>
    <div class="product-card__footer">
      <div class="product-card__footer-name">{{ product_data.name }}</div>
        <div class="product-card__footer-buy">
          <div class="product-card__footer-price">{{ product_data.price }} $</div>
          <button
              class="product-card__button"
              @click="addToCart"
          >
            <span>{{ title }}</span>
          </button>
        </div>
    </div>
  </a>
</template>

<script>

import Popup from "@/components/popup";

export default {

  name: "product-card",
  props: {
    title: {
      type : String,
      default: 'Купить'
    },
    product_data: {
      type: Object,
      default: () => {}
    }
  },
  components: {
    Popup
  },
  data() {
    return {
      isPopupVisible: false
    }
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product_data)
    },
    showPopup() {
      this.isPopupVisible = true;
    },
    closeInfoPopup() {
      this.isPopupVisible = false;
    }
  }
}

</script>

<style lang="scss">

.product-card {
  width: 275px;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-decoration: none;

  margin-bottom: 40px;

  box-shadow: 0 0 8px 0 #e3e0e0;

  transition: all .35s;

  &:hover {
    box-shadow: 0 0 20px 0 #f16d7f;
  }

  &__button {
    width: auto;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: #f16d7f;
    color: #FFFFFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0;

    border: 1px solid transparent;

    padding: 13px 30px;

    transition: background .25s, color .25s, border .25s;

    &:hover {
      background: #FFFFFF;
      color: #f16d7f;
      border: 1px solid #f16d7f;
    }
  }

  &__image {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 100%;

      object-fit: contain;
    }
  }

  &__footer {
    width: 100%;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 20px;

    &-name {
      width: 100%;
      height: auto;

      font-size: 18px;
      line-height: 27px;
      letter-spacing: 0;
      text-align: left;
      color: black;
    }

    &-buy {
      width: 100%;

      display: flex;
      align-items: center;
      justify-content: space-between;

      margin-top: 15px;
    }

    &-price {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0;
      text-align: left;
      color: #f16d7f;

    }

  }
}

.popup__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;
}

.popup__info {
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;

  & .product-card__footer-name {
    width: auto;
  }
}

</style>
