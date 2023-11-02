<template>
  <div class="d-lg-flex">
    <SidebarPrimary class="col-2 d-none d-lg-block" />
    <div class="col-lg-10">
      <NavbarPrimary />
      <router-view />
      <NabarMobile class="d-lg-none" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NavbarPrimary from '@/components/NavbarPrimary.vue'
import NabarMobile from '@/components/NavbarMobile.vue'
import SidebarPrimary from '@/components/SidebarPrimary.vue'
</script>

<style scoped></style>
