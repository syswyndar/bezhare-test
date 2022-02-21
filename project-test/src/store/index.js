import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const BASE_URL = 'http://localhost:3000'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    businessListData: [],
    categoryList: []
  },
  mutations: {
    FETCH_ALL_BUSINESS(state, data) {
      state.businessListData = data
    },
    PAGINATION(state, data) {
      state.businessListData = data
    },
    SEARCH(state, data) {
      state.businessListData = data
    },
    CATEGORIES(state, data){
      state.categoryList = data
    },
    BUSINESS_WITH_FILTER(state, data) {
      state.businessListData = data
    }
  },
  actions: {
    fetchBusiness(context) {
      axios.get(`${BASE_URL}/allBusiness`)
      .then(({data}) => {
        context.commit('FETCH_ALL_BUSINESS', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    pagination(context, payload) {
      axios.get(`${BASE_URL}/allBusiness/?page=${payload}`)
      .then(({data}) => {
        context.commit('PAGINATION', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    searchFn(context, payload) {
      // console.log(payload)
      axios.get(`${BASE_URL}/allBusiness/search/${payload}`)
      .then(({data}) => {
        context.commit('SEARCH', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    fetchCategories(context) {
      axios.get(`${BASE_URL}/categories`)
      .then(({data}) => {
        context.commit('CATEGORIES', data)
      })
      .catch(err => {
        console.log(err)
      })
    },
    filterFn(context, payload) {
      return new Promise((resolve, reject) => {
        // axios.get(`${BASE_URL}/allBusiness`, {category: payload})
        console.log(payload, '<<<<<<<<<<<<<<<')
        axios({
          method: 'get',
          url: `${BASE_URL}/allBusiness/?category=${payload}`,
        })
        .then(({data}) => {
          context.commit('BUSINESS_WITH_FILTER', data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
      })
    },
  },
  modules: {
  }
})
