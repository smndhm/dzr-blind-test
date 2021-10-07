<template>
  <swiper
    v-if="blindTests"
    :slides-per-view="2"
    :space-between="50"
    :loop="true"
    :centered-slides="true"
    :hash-navigation="{
      watchState: true,
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
    const dzr = new Deezer();
    this.blindTests = await dzr.getBlindTests();
  },
};
</script>
