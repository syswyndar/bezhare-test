<template>
    <div class="form-check">
        <label class="form-check-label" for="">{{categoryList.paramName}}</label>
        <input type="checkbox" class="form-check-input" :value="categoryList.paramCode" v-model="this.checkedItems" @click.prevent="addItems"/>
  </div>
</template>

<script>
export default {
    name: 'CategoryList',
    props: ['categoryList'],
    data() {
        return {
            checkedItems: []
        }
    },
    methods: {
        addItems() {
            this.$emit('checkedItems', this.checkedItems)
        }
    }
}
</script>

<style>



</style>