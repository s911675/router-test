<script setup>
import axios from 'axios';

axios.get();
</script>
<template>
  <div>
    <h2>Hello Destination {{ $route.params.id }}</h2>
  </div>
</template>
