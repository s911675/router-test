import {defineStore} from "pinia";
import axios from "axios";
import {find} from "lodash"
import {useRouter} from 'vue-router';
import { ref } from 'vue';

export const useMenuStore = defineStore("menuStore", {
    const menus = ref([]);
    const router = useRouter();
    const routes = router.getRoutes();
    async function fetchMenus() {
        let serverMenus = (await axios.get("http://localhost:3000/menus")).data;


        const routes = router.getRoutes();

        const menus = [];
        for (const menu of serverMenus) {
            const route = find(routes, el => el.meta.menuId = menu.id);
            if (route) {
                menu.route = route;
                menus.push(menu);
            }
        }
        this.menus = menus;
    };

        return { menus, fetchMenus };
});
