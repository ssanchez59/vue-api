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
      currentUsername: null,
      githubData: {},
      domainData: {},
    };
  },
  mounted() {
    this.getDomains();
  },
  methods: {
    onUsernameChange(name) {
      this.currentUsername = name;
      this.fetchGithubData(name);
    },
    fetchGithubData(name) {
      // if we have data already, don't request again
      if (this.githubData.hasOwnProperty(name)) return;

      const url = `http://localhost:8000/search/${name}`;
      axios.get(url).then((r) => {
        Vue.set(this.githubData, name, r.data);
      });
    },
    getDomains() {
      const url1 = `http://localhost:8000/getDomains`;
      axios.get(url1).then((r) => {
        console.log('domains', r.data);
        Vue.set(this.domainData, 'domains', r.data);
      });
    },
  },
  created() {
    bus.$on('new-username', this.onUsernameChange);
  },
  destroyed() {
    bus.$off('new-username', this.onUsernameChange);
  },
};
