<script setup>
import {useRouter} from 'vue-router';
import {ref} from 'vue';
import {useMenuStore} from "@/store/menuStore.js";

const router = useRouter();

defineProps({
  msg: {type: String, default: null},
});
const count = ref(0);

const menuStore = useMenuStore();

const handleRouterLink = (route) => {
  router.push({
    name: route.name,
    params: {id: '1'},
  });
};
</script>

<template>
  <div id="nav">
    <h1>{{ msg }}</h1>Click on the Vite and Vue logos to learn more
    <button @click="count++">
      {{ count }}
    </button>

    <div
        v-for="(menu, index) in menuStore.menus"
        :key="index"
        class="item"
    >
      {{
        menu
      }}xx
    </div>
    <div
        v-for="(route, index) in router.getRoutes()"
        :key="index"
        class="item"
        @click="handleRouterLink(route)"
    >
      {{
        route.name
      }}
    </div>
  </div>
</template>

<style scoped>
#nav .router-active-link {
  color: red;
  border-bottom: 2px solid pink;

}
</style>
