<template>
    <div class="page-num">
        <button v-if="pageNum !== activePage" @click.prevent="pagination(pageNum)" class="btn">{{pageNum}}</button>
        <button v-if="pageNum === activePage" @click.prevent="pagination(pageNum)" class="active-btn">{{pageNum}}</button>
    </div>
</template>

<script>
export default {
    name: "Pagination",
    props: ['pageNum', 'activePage'],
    methods: {
        pagination(num) {
            this.$store.dispatch('pagination', num)
        }
    }
}
</script>

<style>
.page-num {
    margin: 0.5rem 0.5rem;
}
.btn {
    padding: 0.5rem 1rem;
    background-color: white;
    border: 1px solid rgba(222,222,222,0.8);
    border-radius: 3px;
}
.active-btn {
    padding: 0.5rem 1rem;
    background-color: rgb(70, 69, 69);
    border: 1px solid rgba(222,222,222,0.8);
    border-radius: 3px;
    color: white;
}

.active-btn:hover {
    box-shadow: 2px 2px 5px -1px rgba(97, 97, 97, 0.55);
}
.btn:hover {
    box-shadow: 2px 2px 5px -1px rgba(97, 97, 97, 0.55);
}

</style>