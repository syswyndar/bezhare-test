<template>
<div class="page-container">
    <div class="container-modal">
        <div class="modal-container">
            <div class="modal-header">
                <h4>Filter</h4>
                <button @click.prevent="closeModal">X</button>
            </div>
            <div class="modal-body">
                <div class="form-check" v-for="category in categoriesData" :key="category.paramCode" >
                    <label class="form-check-label" for="">{{category.paramName}}</label>
                    <input type="checkbox" class="form-check-input" :value="+category.paramCode" v-model="checkedItems"/>
                </div>
            </div>
            <div class="modal-footer">
                <button @click.prevent="filterFn" class="btn">Terapkan</button>
            </div>
        </div>
    </div>
</div>
  
</template>

<script>
export default {
    name: 'FilterModal',
    data() {
        return {
            checkedItems: []
        }
    },
    created() {
        this.fetchCategories()
    },
    methods: {
        fetchCategories() {
            this.$store.dispatch('fetchCategories')
        },
        closeModal() {
            this.$emit('closeModal')
        },
        filterFn() {
            this.$store.dispatch('filterFn', this.checkedItems)
            .then(() => {
                this.closeModal()
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    computed: {
        categoriesData() {
            return this.$store.state.categoryList.data
        }
    }
}
</script>

<style>
.page-container {
    width: 100%;
    height: 100%;
}
.container-modal {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(84, 84, 84, 0.665);
}
.modal-container {
    width: 60%;
    background-color: #fff;
    padding: 1.5rem 2rem;
    border-radius: 0.7rem;
}
.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.modal-header button {
    background-color: white;
    border: none;
    font-size: 1.5em;
    cursor: pointer;
}
.modal-body {
    margin: 1rem auto;
}
.modal-footer button {
    padding: 0.7rem 1rem;
    width: 100%;
    background-color: rgb(70, 69, 69);
    color: #fff;
    font-weight: bold;
    border: none;
    cursor: pointer;
}
.form-check {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
}
</style>