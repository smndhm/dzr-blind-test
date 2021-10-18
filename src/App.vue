<template>
  <header>
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
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700&display=swap');
html,
body {
  height: 100%;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
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
  font-size: 15rem;
  line-height: 1;
  font-weight: 700;
  transition: 400ms ease;
}
body.blindtest {
  h1 {
    font-size: 4rem;
  }
}
</style>
