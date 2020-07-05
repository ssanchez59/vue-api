import bus from '../bus';
import Vue from 'vue';
import ServerData from '../ServerData/index.vue';
import DomainData from '../DomainData/index.vue';

export default {
  name: 'DomainOutput',
  components: {
    'server-data': ServerData,
    'domain-data': DomainData,
  },
  data() {
    return {
      currentDomainName: null,
      serverData: {},
      domainData: {},
    };
  },
  mounted() {
    this.getDomains();
  },
  methods: {
    onDomainNameChange(name) {
      this.currentDomainName = name;
      this.fetchServerData(name);
    },
    fetchServerData(name) {
      // if we have data already, don't request again
      if (this.serverData.hasOwnProperty(name)) return;

      const url = `http://localhost:8000/search/${name}`;
      axios.get(url).then((r) => {
        Vue.set(this.serverData, name, r.data);
        this.getDomains();
      });
    },
    getDomains() {
      const url1 = `http://localhost:8000/getDomains`;
      axios.get(url1).then((r) => {
        // console.log('domains', r.data);
        Vue.set(this.domainData, 'domains', r.data);
      });
    },
  },
  created() {
    bus.$on('new-domainName', this.onDomainNameChange);
  },
  destroyed() {
    bus.$off('new-domainName', this.onDomainNameChange);
  },
};
