<template>
  <div v-if="!loading">
    <h1>{{ request.titulo }}</h1>
    <h3>{{ request.descricao }}</h3>
    <transition-group
      class="areaCursos"
      appear
      tag="div"
      mode="in-out"
      name="cursos"
    >
      <router-link
        :to="{ name: 'Curso', params: { curso: `${curso.id}` } }"
        v-for="curso in request.cursos"
        :key="curso.nome"
        :id="curso.id"
      >
        <h2>{{ curso.nome }}</h2>
        <p id="descricao">{{ curso.descricao }}</p>
        <p><strong>Total de Aulas:</strong> {{ curso.totalAulas }}</p>
        <p><strong>Horas:</strong> {{ curso.horas }}</p>
      </router-link>
    </transition-group>

    <router-view></router-view>
  </div>
  <div v-else>
    <div class="loading">
      <img src="@/assets/loadingAnimation.svg" alt="loading" />
      <h1>Loading...</h1>
    </div>
  </div>
</template>

<script>
import requestAPI from "@/mixins/requestApi.js";

export default {
  name: "Cursos",
  props: ["curso"],
  data() {
    return {
      loading: true,
    };
  },
  mixins: [requestAPI],
  created() {
    this.requestAPI("cursos");
  },
};
</script>

<style scoped>
@keyframes cursoAnimation {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}

.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
}
.areaCursos {
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.areaCursos a {
  text-align: justify;
  padding: 10px;
  margin: 0px 5px 20px 5px;
  text-decoration: none;
  background: #4e9c92;
  border-radius: 10px;
  color: #fff;
  width: 300px;
}
.areaCursos #javascript:hover,
.areaCursos #html-e-css:hover,
.areaCursos #ux-design:hover {
  animation: cursoAnimation 0.3s both;
}
.areaCursos a:last-child {
  margin-right: 0px;
}
.areaCursos h2 {
  text-align: center;
  font-size: 30px;
}
.areaCursos #descricao {
  height: 90px;
}

.cursos-enter {
  opacity: 0;
  transform: translate3d(0, -40px, 0);
}
.cursos-enter-active {
  transition: all 1s ease;
}
.cursos-enter-to {
  opacity: 1;
  transform: translate3d(0, 0px, 0);
}
</style>
