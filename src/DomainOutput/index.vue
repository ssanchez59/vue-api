<template>
  <div>
    <p v-if="currentUsername == null">Enter a domain above to see their server data</p>
    <p v-else>
      Below are the results for {{ currentUsername }}
      <server-data :data="githubData[currentUsername]"></server-data>
    </p>
    <p>
      <b>Previously viewed domains.</b>
      <domain-data :data="domainData"></domain-data>
    </p>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
