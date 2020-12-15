<template>
  <div class="popup__wrapper" ref="popup__wrapper">
    <div class='popup'>
      <div class="popup__header">
        <span>{{popupTitle}}</span>
        <span>
        <i
            class="material-icons"
            @click="closePopup"
        >
          close
        </i>
      </span>
      </div>
      <div class="popup__content">
        <slot></slot>
      </div>
      <div class="popup__footer">
        <button
            class="submit_btn"
            @click="addToCartPopup"
        >
          Купить
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {
    popupTitle: {
      type: String,
      default: 'Popup name'
    },
  },
  methods: {
    addToCartPopup() {
      this.$emit('addToCartPopup');
    },
    closePopup() {
      this.$emit('closePopup');
    },
  },
  mounted() {
    let vm = this;
    document.addEventListener('click', function (item) {
      if (item.target === vm.$refs['popup__wrapper']) {
        vm.closePopup()
      }
    })
  }
}
</script>

<style lang="scss">

.popup__wrapper {
  background: rgba(64,64,64, .4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
}
.popup {
  padding: 16px;
  position: fixed;
  top: 25%;
  left: 40%;
  width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;

  &__header, &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__header {
    justify-content: space-between;

    color: #f16d7f;

    margin-bottom: 20px;

    & .material-icons {
      color: black;
      font-size: 25px;
      transition: color .25s, transform .25s;

      &:hover {
        color: #f16d7f;
        transform: scale(1.4);
      }
    }
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .submit_btn {
    width: 100px;
    height: 40px;
    padding: 8px;
    color: #ffffff;
    background: #f16d7f;
    border: 1px solid transparent;
    transition: all .25s;

    &:hover {
      color: #f16d7f;
      border: 1px solid #f16d7f;
      background: #FFFFFF;
    }
  }

  .close_modal {
    padding: 8px;
    color: #ffffff;
    background: red;
  }

}

</style>
