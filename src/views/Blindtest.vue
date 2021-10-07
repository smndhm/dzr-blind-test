<template>
  <section v-if="playlist">
    <h2 v-html="playlist.title"></h2>
    <p v-html="playlist.description"></p>
    <div v-for="(track, index) in playlist.tracks.data" :key="track.id">
      <song v-model:song="playlist.tracks.data[index]"></song>
    </div>
  </section>
</template>

<script>
import Song from '@/components/Song.vue';
import Deezer from '@/services/deezer.service';

export default {
  name: 'Blindtest',
  components: {
    Song,
  },
  data() {
    return {
      playlist: null,
    };
  },
  async beforeCreate() {
    const dzr = new Deezer();
    this.playlist = await dzr.getBlindTest(this.$route.params.id);
  },
};
</script>
