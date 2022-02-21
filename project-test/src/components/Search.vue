<template>
<div class="search-page">
    <input v-model="name" @change="searchFn()" class="search" type="text" placeholder="Find a Business">
</div>
  
</template>

<script>
export default {
    name: "Search",
    data() {
        return {
            name: ''
        }
    },
    methods: {
        searchFn() {
            this.$store.dispatch('searchFn', this.name)
        }
    }

}
</script>

<style>
.search {
    width: 100%;
    padding: 0.5rem 1rem;
}
.search-page {
    width: 90%;
}
</style>