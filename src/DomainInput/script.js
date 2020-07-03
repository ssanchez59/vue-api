import bus from '../bus';

export default {
  name: 'DomainInput',
  data() {
    return {
      username: '',
    };
  },
  methods: {
    onSubmit(event) {
      if (this.username && this.username !== '') {
        bus.$emit('new-username', this.username);
      }
    },
  },
};
