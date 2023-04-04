<script>
import axios from 'axios';

export default {
    name: 'ShowComicApp',
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/comics',
            comic: null
        }
    },
    methods:{
        getShowComics(){
            axios.get(`http://127.0.0.1:8000/api/comics/${this.$route.params.id}`)
            .then(response => {
                console.log(response);
                this.comic = response.data.comics
            })
        }
    },
    created(){
        this.getShowComics();
    }
}

</script>

<template>
    
    <div v-if="comic">
        <h2>{{ comic.name }}</h2>
        <p>{{ comic.description }}</p>
        <p><b>Prezzo:</b> € {{ comic.price }}</p>
        <p><b>Quantità disponibile:</b> {{ comic.quantity }}</p>
    </div>

</template>

<style scoped>
</style>