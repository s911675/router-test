<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

const onSwiper = (swiper) => {
    console.log(swiper)
}
const onSlideChange = () => {
    console.log('slide change')
}
</script>

<template>
    <swiper
        :slides-per-view='2'
        :space-between='50'
        class='swiper'
        style='border: 1px solid white;'
        @slideChange='onSlideChange'
        @swiper='onSwiper'
    >
        <swiper-slide v-for='index in 10' :key='index' class='swiper-slide'>Slide {{ index }}</swiper-slide>
        ...
    </swiper>
</template>


<style scoped>
.swiper-slide {
    color: red;
    border: 2px solid pink;
}
</style>
