<template>

        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" v-for="post in posts" :key="post.id">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{post.title}}</h5>
                    <small>{{post.updated_at}}</small>
                </div>
                <p class="mb-1">{{post.body}}</p>
            </a>
        </div>



</template>

<script>
    export default {
        data() {
            return {
                posts: []
            }
        },
        mounted() {
            axios.get('/api/posts').then(response => {
                console.log(response.data.posts.data);
                this.posts = response.data.posts.data;
            })
        }
    }
</script>
