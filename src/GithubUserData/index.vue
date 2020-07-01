<template>
  <div v-if="data">
    <h4>{{ data.name }}</h4>

    <div>
      <b>Servers:</b>
      <pre>{{ data.Servers | pretty }}</pre>
    </div>
    <p>
      <b>Servers Have Changed:</b>
      {{ data.Servers_changed }}
    </p>
    <p>
      <b>SSL Grade: {{ data.Ssl_grade }}</b>
    </p>
    <p>
      <b>Previous SSL Grade:</b>
      {{ data.Previous_ssl_grade }}
    </p>
    <p>
      <b>Logo:</b>
      {{ data.Logo }}
    </p>
    <p>
      <b>Title:</b>
      {{ data.Title }}
    </p>
    <p>
      <b>Is Down:</b>
      {{ data.Is_down }}
    </p>
  </div>
</template>
<script src="./script.js"></script>
<style scoped src="./style.css"></style>
