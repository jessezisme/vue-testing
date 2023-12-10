<template>
  <header class="flex items-center justify-center">
    <ul class="flex gap-[4]">
      <li>
        <button v-if="!userStore.isLoggedIn" @click="userStore.login({ name: 'foo', password: 'bar' })" data-test="login">
          Login
        </button>
        <button v-else @click="userStore.logout" data-test="logout">Logout</button>
      </li>
      <li><router-link to="{name: 'home'}">Home</router-link></li>
    </ul>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>
