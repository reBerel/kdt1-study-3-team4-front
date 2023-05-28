<template>
  <v-app>
    <v-app-bar
      app
      color="teal"
      dark
    >
      <div class="d-flex align-center">
        <a href="/">
        <span style="font-size: 20px; color: white;">
          ho<v-icon>mdi-home</v-icon>me
          </span>
        </a>
      </div>
      <a class="listLink" href="/order-history-page/1">
          <abbr title="내 정보">            
          <v-icon>mdi-account-box</v-icon>
        </abbr>  
        </a>
        <v-row justify="end">
          <v-col cols="auto">
            
            <router-link to="/account-creation-page">
              <v-btn color="teal lighten-2">
                <span>회원가입</span>
                  <v-icon right>mdi-account-plus-outline</v-icon>
              </v-btn>
                </router-link>
            <router-link to="/account-login-page">
              <v-btn color="teal lighten-2">
                <span>로그인</span>
                  <v-icon right>mdi-account-check-outline</v-icon>
              </v-btn>
            </router-link>
    </v-col>
  </v-row>
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
<style scoped>
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