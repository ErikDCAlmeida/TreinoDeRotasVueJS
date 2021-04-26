<template>
  <div class="areaCurso">
    <div v-if="cursoAtual">
      <h1>Aulas de: {{ cursoAtual.nome }}</h1>
      <transition-group
        mode="out-in"
        tag="div"
        name="aulasAnimation"
        appear
        v-if="cursoAtual"
        class="areaAulasBtns"
      >
        <router-link
          :to="{ name: 'Aula', params: { aula: `${aulas.id}` } }"
          v-for="aulas in cursoAtual.aulas"
          :key="aulas.id"
        >
          {{ aulas.nome }}
        </router-link>
      </transition-group>
      <h2 v-else>Não há aulas no momento!</h2>
    </div>
    <div v-if="loading">
      <img src="@/assets/loadingAnimation.svg" alt="loadingAnimation" />
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
import requestAPI from "../mixins/requestApi.js";

export default {
  mixins: [requestAPI],
  props: ["curso"],
  data() {
    return {
      loading: true,
      cursoAtual: null,
    };
  },
  created() {
    this.requestAPI("curso");
  },
  methods: {
    pegarCursoCorreto() {
      if (this.request) {
        this.request.forEach((obj) => {
          if (obj.id === this.curso) {
            this.cursoAtual = obj;
          }
        });
      }
    },
  },
  watch: {
    $route: "pegarCursoCorreto",
    loading: "pegarCursoCorreto",
  },
};
</script>

<style scoped>
.areaCurso {
  padding: 30px 0px;
}
.areaAulasBtns {
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.areaAulasBtns a {
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px 30px;
  background: #4e9c92;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  width: 250px;
  margin: 0px 5px 20px 5px;
  height: 70px;
}

.aulasAnimation-enter,
.aulasAnimation-leave-active {
  opacity: 0;
  transform: translate3d(0, -50px, 0);
}
.aulasAnimation-enter-active {
  transition: all 1s;
}
</style>
