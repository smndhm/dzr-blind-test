<template>
  <section v-if="blindTests">
    <div>
      <h2>Choose a playlist to play with&nbsp;:</h2>
      <swiper
        :slides-per-view="2"
        :space-between="50"
        :loop="true"
        :centered-slides="true"
        :breakpoints="{
          900: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }"
      >
        <swiper-slide
          :data-hash="index"
          v-for="(blindTest, index) in blindTests"
          :key="blindTest.id"
        >
          <playlist v-model:playlist="blindTests[index]"></playlist>
        </swiper-slide>
      </swiper>
    </div>
  </section>
  <footer>
    <p>Inspired by some drunken evening 🥃</p>
  </footer>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import Deezer from '@/services/deezer.service';
import Playlist from '@/components/Playlist.vue';

export default {
  name: 'Home',
  components: {
    Swiper,
    SwiperSlide,
    Playlist,
  },
  data() {
    return {
      blindTests: null,
    };
  },
  async beforeCreate() {
    document.body.classList.remove('blindtest');
    const dzr = new Deezer();
    this.blindTests = await dzr.getBlindTests();
  },
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 3rem;
  margin: 3rem 0;
}
footer {
  p {
    margin: 0.5rem 0;
    font-size: 1.5rem;
  }
}
</style>
