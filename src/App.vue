<script setup>
import TheNavigation from '@/components/TheNavigation.vue'
import SwiperTest from '@/components/SwiperTest.vue'
import 'swiper/css'</script>
<template>
    <div>
        <router-view />
        <header>header</header>
        <nav>
            <the-navigation />
        </nav>
        <aside>aside</aside>
        <main>main
            <section>section
                <article>article</article>
            </section>
        </main>
        <footer>footer</footer>

        <swiper-test />
    </div>
</template>
