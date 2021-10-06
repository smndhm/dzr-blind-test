<template>
  <router-link :to="`/playlist/${playlist.id}`"
    ><img class="cover" :src="playlist.picture_big" alt=""
  /></router-link>
  <h3>
    <router-link
      :to="`/playlist/${playlist.id}`"
      v-html="playlist.title"
    ></router-link>
  </h3>
</template>

<script>
export default {
  name: 'playlist',
  props: {
    playlist: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.cover {
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
}
</style>
