<template>
    <div class="card">
        <div >
            <img class="image" :src="businessList.logoUrl">
        </div>
        <div>
            <h2 class="heading">{{businessList.businessName}}</h2>
            <p class="category-name">{{businessList.businessCategory}}</p>
        </div>
    </div>
  
</template>

<script>
export default {
    name: "CompanyCard",
    props: ['businessList']

}
</script>

<style>
.card{
    width: 100%;
    height: auto;
    border-radius: 5px;
    border: 1px solid rgba(184, 184, 184, 0.55);
    padding: 5px;
}
.card:hover {
    box-shadow: 7px 8px 14px -2px rgba(199,198,198,1);
    -webkit-box-shadow: 7px 8px 14px -2px rgba(199,198,198,1);
    -moz-box-shadow: 7px 8px 14px -2px rgba(199,198,198,1);
    cursor: pointer;
}
.image {
    width: 100%;
    height: auto;
}
.heading {
    font-size: 1rem;
}
.category-name {
    font-size: 0.8rem;
}


</style>