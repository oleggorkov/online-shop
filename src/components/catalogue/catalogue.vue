<template>
  <div class="catalogue">
    <v-notifications
        :messages="messages"
    />
    <div class="catalogue__content">
      <h1 class="main__heading">Каталог</h1>
      <v-select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
      />
    </div>
    <div class="catalogue__wrapper">
      <product-card
      v-for="product in filteredProducts"
      :key="product.article"
      v-bind:product_data="product"
      @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>

import ProductCard from "./product-card";
import {mapActions, mapGetters} from 'vuex';
import VSelect from "@/components/v-select";
import vNotifications from "@/components/notifications/notifications"

export default {

  name: "catalogue",
  components: {
    VSelect,
    ProductCard,
    vNotifications
  },
  data() {
    return {
      categories: [
          {
            name: 'Все',
            value: 'All'
          },
          {
            name: 'Мужские',
            value: 'm'
          },
        {
          name: 'Женские',
          value: 'f'
        }
          ],
      selected: 'Все',
      sortedProducts: [],
      messages: []
    }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
        return this.PRODUCTS
      }
    },
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
        .then(() => {
            let timeStamp = Date.now().toLocaleString();
            this.messages.unshift(
                {name: 'Товар добавлен в корзину', icon: 'check_circle', id: timeStamp}
            )
          })
    },
    sortByCategories(category) {
      this.sortedProducts = [];
      let vm = this;
      this.PRODUCTS.map(function (item) {
        if(item.category === category.name) {
          vm.sortedProducts.push(item);
        }
      })
      this.selected = category.name;
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}

</script>

<style lang="scss">

.catalogue {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;

  margin-top: 39px;

  &__content {
    width: 100%;
    height: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 30px;
  }

  &__wrapper {
    width: 100%;
    height: auto;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }
}


</style>
