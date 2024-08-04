<template>
  <div id="ncms">
    <h1>Admin</h1>
    <!-- Netlify CMS será carregado aqui -->
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  if (process.client) {
    import('netlify-cms-app').then(CMS => {
      CMS.default.init()
    }).catch(err => {
      console.error('Erro ao inicializar o Netlify CMS:', err)
    })
  }
})
</script>

<style scoped>
</style>
