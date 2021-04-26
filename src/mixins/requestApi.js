export default {
  data() {
    return {
      loading: true,
      request: null,
    };
  },
  methods: {
    requestAPI(url) {
      this.loading = true;
      fetch(`http://localhost:3000/${url}`)
        .then((r) => r.json())
        .then((r) => {
          setTimeout(() => {
            this.request = r;
            this.loading = false;
          }, 1000);
        });
    },
  },
};
