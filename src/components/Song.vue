<template>
  <img :src="song.album.cover" alt="" />
  <img :src="`https://api.deezer.com/artist/${song.artist.id}/image`" alt="" />
  <h4 v-html="song.title"></h4>
  <h5 v-html="song.artist.name"></h5>
  <h6 v-html="song.album.title"></h6>
  <audio controls :src="song.preview">
    Your browser does not support the
    <code>audio</code> element.
  </audio>
</template>

<script>
export default {
  name: 'song',
  props: {
    song: {
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
