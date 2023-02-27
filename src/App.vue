<script setup>
import TheNavigation from '@/components/TheNavigation.vue';</script>

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
    </main>
    <footer>footer</footer>
  </div>
</template>
