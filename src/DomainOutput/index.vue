<template>
  <div>
    <p v-if="currentDomainName == null">Enter a domain above to see its server data</p>
    <p v-else>
      Below are the results for {{ currentDomainName }}
      <server-data :data="serverData[currentDomainName]"></server-data>
    </p>
    <p>
      <b>Previously viewed domains.</b>
      <domain-data :data="domainData"></domain-data>
    </p>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
