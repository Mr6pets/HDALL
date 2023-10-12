<script setup>
</script>

<template>
  <div>
    <router-link :to="{name:'home'}">home </router-link>
    <router-link :to="{name:'article'}">article</router-link>
      <hr>
    <router-view></router-view>
  </div>
  
</template>

<style scoped>

</style>
