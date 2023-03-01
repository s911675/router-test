import {computed, reactive, ref} from 'vue';
import {defineStore} from 'pinia';

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0);
    const name = ref('Eduardo');
    const users = reactive([
        {
            id: 1,
            name: 'name1',
        }, {
            id: 2,
            name: 'name2',
        }, {
            id: 3,
            name: 'name3',
        },
    ]);
    const posts = reactive([
        {
            id: 1,
            name: 'post1',
        }, {
            id: 2,
            name: 'post2',
        }, {
            id: 3,
            name: 'post3',
        },
    ]);


    let authId = ref(2);

    const doubleCount = computed(() => count.value * 2);
    const authUser = computed(() => {
        const user = users.find(user => user.id === authId.value);
        if (!user) {
            return null;
        } else {
            return {
                ...user,
                get posts() {
                    return [1, 2, 3]
                },
                get getPost() {
                    return postId => posts.find(post => post.id === postId)
                },
            }
        }
    });

    function increment() {
        count.value++;
    }

    function changePost(changedPost) {
        const postFound = posts.find(post => post.id === changedPost.id);
        postFound.name = changedPost.name;
        console.log(posts);
        debugger;
    }

    function changeAuthUser(changeId) {
        debugger;
        authId.value = changeId;
    }

    return {count, name, doubleCount, increment, authUser, changePost, changeAuthUser};
});
