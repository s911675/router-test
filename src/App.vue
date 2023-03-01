<script setup>
import TheNavigation from '@/components/TheNavigation.vue'
import SwiperTest from '@/components/SwiperTest.vue'
import {useCounterStore} from '@/store/counterStore.js'

const counterStore = useCounterStore();
</script>

<template>
  <div>
    <router-view/>
    <header>header</header>
    <nav>
      <the-navigation/>
    </nav>
    <aside>aside</aside>
    <main>main
      <section>section
        <article>article</article>
      </section>
      ¡
    </main>
    <footer>footer</footer>

    <swiper-test/>

    <button @click="counterStore.increment">double</button>
    <br>
    <button @click="counterStore.changeAuthUser(3)">change authId</button>
    <br>
    <button @click="counterStore.changePost({id:2, name:'changed'})">change post</button>
    <div>
      {{ counterStore.doubleCount }}<br>
      {{ counterStore.authUser }}<br>
      {{ counterStore.authUser.posts }}<br>
      {{ counterStore.authUser.getPost(2) }}
    </div>
  </div>
</template>
