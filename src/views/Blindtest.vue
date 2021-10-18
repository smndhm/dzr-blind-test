<template>
  <div id="progress" :style="`width:${blindtest.audio.progress}%`"></div>
  <section v-if="playlist">
    <h2 v-html="playlist.title"></h2>
    <p v-html="playlist.description"></p>
    <div>
      <h4
        v-show="blindtest.step === 'answer'"
        v-html="blindtest.song.title"
      ></h4>
      <h5
        v-show="blindtest.step === 'answer'"
        v-html="blindtest.song.artist.name"
      ></h5>
      <h6
        v-show="blindtest.step === 'answer'"
        v-html="blindtest.song.album.title"
      ></h6>
    </div>
    <button @click="next" v-if="blindtest.audio.ready" v-html="button"></button>
  </section>
</template>

<script>
import Deezer from '@/services/deezer.service';

export default {
  name: 'Blindtest',
  data() {
    return {
      blindtest: {
        audio: { ready: false, player: null, progress: 0 },
        song: null,
        step: 'start',
      },
      button: 'Start',
      playlist: null,
      tracks: null,
      index: 0,
      songReady: false,
      songEnded: false,
      progress: 0,
    };
  },
  methods: {
    setSong() {
      this.blindtest.song = this.tracks[this.index];
      this.blindtest.audio.player = new Audio(this.blindtest.song.preview);
      this.blindtest.audio.player.addEventListener('canplaythrough', () => {
        this.blindtest.audio.ready = true;
      });
      this.blindtest.audio.player.addEventListener('timeupdate', () => {
        const { currentTime, duration } = this.blindtest.audio.player;
        this.blindtest.audio.progress = (currentTime * 100) / duration;
      });
      this.blindtest.audio.player.addEventListener('ended', () => {
        this.blindtest.step = 'answer';
      });
    },
    next() {
      if (this.blindtest.step === 'start') {
        this.blindtest.audio.player.play();
        this.blindtest.step = 'playing';
        this.button = 'See answer';
      } else if (this.blindtest.step === 'playing') {
        this.blindtest.step = 'answer';
        this.button = 'Next';
      } else if (this.blindtest.step === 'answer') {
        this.blindtest.audio.player.pause();
        this.index += 1;
        this.setSong();
        this.blindtest.audio.player.play();
        this.blindtest.step = 'playing';
        this.button = 'See answer';
      }
    },
  },
  async beforeCreate() {
    document.body.classList.add('blindtest');

    const dzr = new Deezer();
    this.playlist = await dzr.getBlindTest(this.$route.params.id);
    const tracks = this.playlist.tracks.data;
    for (let i = tracks.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [tracks[i], tracks[j]] = [tracks[j], tracks[i]];
    }
    this.tracks = tracks;
    this.setSong();
  },
};
</script>

<style lang="scss" scoped>
#progress {
  position: fixed;
  top: 0;
  left: 0;
  background-color: aqua;
  height: 2px;
}
</style>
