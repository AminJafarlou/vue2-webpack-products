<template>
  <header class="navbar">
    <p>AzkiVam</p>
    <div class="nav-items">
      <div class="header-link">
        <router-link class="link" to="/">Home</router-link>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  color: #fff;
  height: 60px;
  padding: 10px;
  display: flex;
  align-items: center;
  background-color: blue;
  justify-content: space-between;
}
.nav-items {
  display: flex;
}
.header-link {
  margin-inline: 8px;
}
.link {
  text-decoration: none;
  color: #fff;
}
</style>
