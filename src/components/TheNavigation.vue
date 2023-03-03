<script setup>
import { useRouter } from 'vue-router'
import { useMenuStore } from '@/store/menuStore.js'

const router = useRouter()

defineProps({
    msg: { type: String, default: null },
})

const menuStore = useMenuStore()
menuStore.fetchMenus()

const handleRouterLink = (route) => {
    router.push({
        name: route.name,
        params: { id: '1' },
    })
}

// console.log(import.meta.env.MODE)
// console.log(import.meta.env.BASE_URL)
</script>

<template>
    <div id='nav'>
        <div
            v-for='(menu, index) in menuStore.menus'
            :key='index'
            class='item'
            @click='handleRouterLink'
        >
            {{
                menu.name
            }}
        </div>
    </div>
</template>

<style scoped>
</style>
