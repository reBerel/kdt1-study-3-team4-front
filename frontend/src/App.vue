<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <a href="/">
        <span style="font-size: 20px; color: white;">
          ho<v-icon>mdi-home</v-icon>me
          </span>
        </a>
        <a class="listLink" href="/product-history-page">
          <abbr title="내 정보">            
          <v-icon>mdi-account-box</v-icon>
        </abbr>  
        </a>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
.listLink{
  color: white !important;
  height: 18px;
  padding-left: 20px;
  text-decoration: none;
  right: 0;
}
abbr{
  position: relative;
}
abbr[title]:hover::after {
  content: ' (' attr(title) ') ';
    position: absolute;
    left: 110%;
    width: 500px;
    text-decoration: none;
}

</style>