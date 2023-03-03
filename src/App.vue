<script setup>
import TheNavigation from '@/components/TheNavigation.vue'
import SwiperTest from '@/components/SwiperTest.vue'
import {useCounterStore} from '@/store/counterStore.js'
import car from '@/assets/car.png'
import {menus} from '@/db.json'

console.log(menus);

const counterStore = useCounterStore();

const publicCar = 'publicCar.png'
const carUrl = new URL('./assets/car.png', import.meta.url).href;
//
// const autoImportsModules = import.meta.glob('@/autoImports/*.js')
// console.log(autoImportsModules)
// for (const path in autoImportsModules) {
//   autoImportsModules[path]();
// }

const autoImportsModules = import.meta.glob('./autoImports/*.js', {eager: true})
console.log(autoImportsModules);

console.log(import.meta.env)
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
  <div>
    <img src="@/assets/car.png" alt=""><br>
    <img :src="car" alt=""><br>
    <img :src="publicCar" alt=""><br>
    <img :src="carUrl" alt=""><br>
  </div>
  <div>
    {{ menus }}
  </div>
</template>

<style scoped>
img {
  width: 200px;
}
</style>
