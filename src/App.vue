<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './../node_modules/Bulma/CSS/bulma.css'

</script>

<template>

  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="GiveCard gives debit cards to the homeless, and provides an online platform where you can donate money directly to the regulated card of a specific homeless person, and get notified on how they spend your donation.">
    
    <title>GiveCard :: Reporting Page </title>
    <link rel="icon" type="image/png" href="./images/favicon.png" />
    <link rel="stylesheet" href="css/style.css">
  
  </head>
    <!-- <body> -->
    <!-- <div id="site-wrap" data-animsition-in-class="fade-in" data-animsition-out-class="fade-out"> -->
      <div>
        <div class="section">
      <div class="navbar is-dark">
      <div class="container">
        <div class="navbar-brand">
        <a class="navbar-brand">
          <img src="./images/givecard-new-logo.png" class="img-fluid logo" style="max-width:150px">
        </a>
        </div>
        <div class="navbar-menu is-active">
          <div class="navbar-start is-dark">
          <div class="navbar-item">
          <RouterLink to="/" class="router-link">Reporting</RouterLink>
          </div>
          <div class="navbar-item">
          <RouterLink to="/spending" class="router-link">Spending</RouterLink>
          </div>
          <div class="navbar-item">
          <RouterLink to="/budget" class="router-link">Budgeting</RouterLink>
          </div>
          <!--<div class="navbar-item">
          <RouterLink to="/testing_async" class="router-link">Testing</RouterLink>
          </div> -->
        </div>
        <div class="navbar-end"></div>
        </div>
      </div>
    </div>
  </div>

    <div class="section">
      <div class="container">
      <div>
        <RouterView />
      </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
@import './assets/main_site.css';
router-link {
  color:white
}
/* header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  display: inline;
  font-size: 12px;
  text-align: left;
  margin-top: 2rem;
  margin-left: 1rem;
  margin-right: 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>