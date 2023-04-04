<script>
import axios from 'axios';

export default {
    name: 'HomepageApp',
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/comics',
            comics: []
        }
    },
    methods:{
        getComics(){
            axios.get(this.url)
            .then(response=>{
                this.comics= response.data.comics
            })
        }
    },
    created(){
        this.getComics();
    }
}

</script>

<template>

    <div v-for="comic in comics">
        <p>Titolo: {{ comic.name }}</p>
        <router-link :to=" {name: 'show-comic', params: {id: comic.id}}">
            Vai a comic
        </router-link>
    </div>

</template>

<style scoped>
</style>