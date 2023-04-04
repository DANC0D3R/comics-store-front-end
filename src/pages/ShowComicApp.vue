<script>
import axios from 'axios';

export default {
    name: 'HomepageApp',
    data() {
        return {
            url: 'http://127.0.0.1:8000/api/comics',
            comic: null
        }
    },
    methods:{
        getShowComics(){
            axios.get(`http://127.0.0.1:8000/api/comics/${this.$route.params.id}`)
            .then(response=>{
                console.log(response.data.comics);
                // this.comic = response.data.comics
            })
        }
    },
    created(){
        this.getShowComics();
    }
}

</script>

<template>
    
    <div>
        <h2>
            {{ comic.name }}
        </h2>
    </div>

</template>

<style scoped>
</style>