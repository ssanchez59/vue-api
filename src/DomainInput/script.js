import bus from '../bus';

export default {
  name: 'DomainInput',
  data() {
    return {
      domainName: '',
    };
  },
  methods: {
    onSubmit(event) {
      if (this.domainName && this.domainName !== '') {
        bus.$emit('new-domainName', this.domainName);
      }
    },
  },
};
