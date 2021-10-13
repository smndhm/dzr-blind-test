<template>
  <header :class="{ blindtest: this.$route.name === 'Blindtest' }">
    <h1><router-link class="outline" to="/">Blind Test</router-link></h1>
  </header>
  <router-view />
</template>

<script>
import 'normalize.css';
import 'swiper/swiper.min.css';

export default {
  name: 'App',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
html,
body {
  height: 100%;
}

body {
  font-family: 'Oswald', sans-serif;
  text-align: center;
  font-size: 1.6rem;
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  & > header,
  & > footer {
    flex-shrink: 0;
  }
  & > section {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

a.outline {
  text-decoration: none;
  color: inherit;
  &:hover,
  &:focus,
  &:active {
    // text-decoration: underline;
    -webkit-text-stroke: 0.025em black;
    color: white;
  }
}
</style>

<style lang="scss" scoped>
h1 {
  margin: 0;
  font-size: 8rem;
  line-height: 1;
}
header.blindtest {
  h1 {
    font-size: 4rem;
  }
}
</style>
