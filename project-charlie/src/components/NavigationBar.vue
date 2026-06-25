<template>
  <div class="navigation-bar">
    <div class="logo-container">
      <router-link class="nav-link" to="/">
        <img src="../assets/logo.png"/>
      </router-link>
    </div>
    <div class="link-container">
      <router-link class="nav-link" to="/cinematography">Cinematography</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
}
</script>
