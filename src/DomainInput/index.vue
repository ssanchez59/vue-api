<template>
  <form v-on:submit.prevent="onSubmit">
    <input
      type="text"
      onkeyup="this.value = this.value.toLowerCase();"
      v-model="domainName"
      placeholder="Enter a domain here"
    />
    <button type="submit">Go!</button>
  </form>
</template>

<script src="./script.js"></script>
<style scoped src="./style.css"></style>
