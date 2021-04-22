<template>
<nav class="navbar navbar-light bg-light">
<!-- <nav class="navbar container" role="navigation" aria-label="main navigation"> -->
  <div class="container">
        <!-- <div class="navbar-brand"> -->
          <a class="navbar-item" href="/"><img src="/images/logo.png" width="50" alt="logo"></a>
            <div class="responsive"><i data-icon="m" class="ion-navicon-round"></i></div>

            <!-- <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a> -->
 
    <div id="navbar" class="navbar-menu">
          <div class="navbar-start">
            <router-link to="/" class="navbar-item">Home</router-link>
            <router-link to="/about" class="navbar-item">About</router-link>
            <router-link to="/contact" class="navbar-item">Contact</router-link>
          </div>
            <div class="navbar-end">
              <div class="navbar-item">
                  <div class="buttons">

                          <router-link to="/contact/index" class="navbar-item"> Browse Contacts</router-link>
                          

                          <!-- Check that the SDK client is not currently loading before accessing is methods -->
                          <div v-if="!$auth.loading">
                            <!-- show login when not authenticated -->
                            <a v-if="!$auth.isAuthenticated" @click="login" class="button is-dark"><strong>Log In</strong></a>
                            <!-- show logout when authenticated -->
                            <a v-if="$auth.isAuthenticated" @click="logout" class="button is-dark"><strong>Log out</strong></a>
                          </div>
                  </div>
              </div>
            </div>
      </div>
    </div>
</nav>
</template>

<script>
    export default {
      name: 'Nav',
      methods: {
        // Log the user in
        login() {
          this.$auth.loginWithRedirect();
        },
        // Log the user out
        logout() {
          this.$auth.logout({
            returnTo: window.location.origin
          });
        }
      }
    }
</script>

<style lang="scss" scoped>
  nav {
    // margin-top: 25px;
    // margin-bottom: 30px;

    margin-top: 0;
    margin-bottom: 0;
    
    
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #d88d00;
      }
    }  
  } 
</style>