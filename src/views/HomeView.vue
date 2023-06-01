<template>
  <v-container>
    <div>
      <nav>
        <router-link to="/product-list-page">상품 리스트</router-link> |
      </nav>
      
    </div>
  </v-container>
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',

    components: {
      HelloWorld,
    },
  }
</script>
