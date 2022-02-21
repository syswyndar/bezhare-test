<template>
<div class="section-container">
    <div class="container">
        <div class="filtering-container">
            <search></search>
            <button @click.prevent="modalFn(true)">Category</button>
        </div>
    </div>
  <div class="container">
      <div class="container-card">
          <company-card v-for="business in listBusiness.data.list" :key="business.id" :businessList="business"></company-card>
      </div>
  </div>
  <div class="footer">
    <div class="pagination-container">
        <div class="pagination">
            <button v-show="listBusiness.data.pageNum !== 1" class="btn" @click.prevent="pagination(listBusiness.data.pageNum - 1)">prev</button>
            <pagination v-for="page in listBusiness.data.navigatepageNums" :key="page" :pageNum="page" :activePage="listBusiness.data.pageNum"></pagination>
            <button v-show="listBusiness.data.pageNum !== listBusiness.data.navigateLastPage" class="btn" @click.prevent="pagination(listBusiness.data.pageNum + 1)">next</button>
        </div>
        <div class="page-info">
            <p>page {{listBusiness.data.pageNum}} of {{listBusiness.data.pages}}</p>
        </div>
    </div>
  </div>
  <div class="modal" v-if="this.isModal === true">
      <filter-modal @closeModal="modalFn(false)"></filter-modal>
  </div>
</div>
</template>

<script>
import CompanyCard from '../components/CompanyCard.vue'
import Pagination from '../components/Pagination.vue'
import Search from '../components/Search.vue'
import FilterModal from '../components/FilterModal.vue'

export default {
    name: "Home",
    data() {
        return {
            isModal: false
        }
    },
    components: { 
      CompanyCard,
      Pagination,
      Search,
      FilterModal
    },
    created() {
        this.fetchBusiness()
    },
    methods : {
        fetchBusiness() {
            this.$store.dispatch('fetchBusiness')
        },
        modalFn(payload) {
            this.isModal = payload
        },
        pagination(num) {
            this.$store.dispatch('pagination', num)
        }
    },
    computed: {
        listBusiness() {
            return this.$store.state.businessListData
        }
    }
    

}
</script>

<style>
.section-container {
    display: relative;
}
.filtering-container {
    width: 80%;
    display: flex;
    justify-content: space-between;
}
.container {
    width: 100%;
    display: flex;
    justify-content: center;
}
.container-card {
    justify-content: center;
    width: 80%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
}

.footer {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.pagination-container {
    display: flex;
    justify-content: space-between;
    width: 80%;
    
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
}
.pagination button {
    cursor: pointer;
}
.pagination button:hover {
    box-shadow: 2px 2px 5px -1px rgba(97, 97, 97, 0.55);
}

.btn {
    padding: 0.5rem 1rem;
    background-color: white;
    border: 1px solid rgba(222,222,222,0.8);
    border-radius: 3px;
}
.modal {
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    z-index: 1;
}
.page-info p {
    font-size: 1em;
}

.filtering-container button {
    padding: 0.5rem 1rem;
    background-color: rgb(70, 69, 69);
    border-radius: 3px;
    color: white;
    border: none;
    cursor: pointer;
}
.filtering-container button:hover {
    box-shadow: 2px 2px 5px -1px rgba(97, 97, 97, 0.55);
}



</style>