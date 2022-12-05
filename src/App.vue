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
      <!-- header -->
        <header class="templateux-navbar dark" role="banner">
            <div class="row justify-content-between">
              <nav class="col-12 site-nav">
                <!-- logo -->
                <a>
                  <img src= ./images/givecard-new-logo.png class="img-fluid logo" style="max-width:150px">
                </a>
                <!-- for mobile viewing? -->
                <button class="d-block d-md-none hamburger hamburger--spin
                              templateux-toggle templateux-toggle-light ml-auto
                              templateux-toggle-menu" data-toggle="collapse"
                              data-target="#mobile-menu" aria-controls="mobile-menu"
                              aria-expanded="false" aria-label="Toggle navigation"
                              style="float:right">
                    <span class="hamburger-box">
                      <span class="hamburger-inner"></span>
                    </span>
                  </button>

                  <!-- navbar links to other pages -->
                  <ul class="sf-menu templateux-menu d-none d-md-block">
                    <li><RouterLink to="/" class="animsition-link">Home</RouterLink></li>
                    <li><RouterLink to="/about" class="animsition-link">Activity</RouterLink></li>
                    <li><RouterLink to="/budget" class="animsition-link">Budgeting</RouterLink></li>
                  </ul>
              </nav>
            </div> <!-- row -->
        </header>

        <!-- actual web page -->
        <div class="templateux-section" style="padding-top:200px">
            <RouterView />
         </div>

</template>

<style scoped>
  @import './assets/main_site.css'
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