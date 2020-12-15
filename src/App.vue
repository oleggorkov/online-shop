<template>
  <div id="app">
    <header-component />
    <main class="main">
      <div class="main__wrapper">
        <keep-alive>
          <router-view />
        </keep-alive>
      </div>
    </main>
  </div>
</template>

<script>

import HeaderComponent from './components/header-component';

export default {
  name: 'app',
  components: {
    HeaderComponent
  },
}
</script>

<style lang="scss">

#app {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.main {
  width: 100%;
  height: auto;

  display: flex;
  justify-content: flex-start;
  flex: 1 0 auto;

  padding: 45px 0;

  &__wrapper {
    width: 100%;
    height: auto;
    max-width: 1216px;

    margin-left: auto;
    margin-right: auto;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
  }

  &__heading {
    width: 100%;
    height: auto;

    font-size: 24px;
    font-weight: 700;
    line-height: 36px;
    letter-spacing: 0;
    text-align: left;
  }
}


</style>
