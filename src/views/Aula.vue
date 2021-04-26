<template>
  <div v-if="loading">
    <img src="@/assets/loadingAnimation.svg" alt="loadingAnimation" />
  </div>
  <div class="areaVideo" v-else>
    <iframe
      width="100%"
      height="650px"
      :src="`https://www.youtube.com/embed/${aulas}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
import requestAPI from "../mixins/requestApi";

export default {
  props: ["aula"],
  mixins: [requestAPI],
  data() {
    return {
      loading: true,
      aulas: null,
    };
  },
  created() {
    this.requestAPI("aula");
  },
  methods: {
    pegarAulasDoCurso() {
      if (this.request) {
        this.aulas = this.request.filter(this.verificarElemento)[0].youtube;
      }
    },
    verificarElemento(value) {
      if (value.id === this.aula) {
        return value;
      }
    },
  },
  watch: {
    $route: "pegarAulasDoCurso",
    loading: "pegarAulasDoCurso",
  },
};
</script>

<style>
@media (max-width: 440px) {
  iframe {
    height: 325px;
  }
}
</style>
