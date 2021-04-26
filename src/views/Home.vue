<template>
  <div class="home" v-if="!loading">
    <div class="infos">
      <div class="infosHome">
        <h1>{{ request.titulo }}</h1>
        <h2>{{ request.descricao }}</h2>
      </div>
      <div class="imgHome">
        <img src="@/assets/aprender.png" alt="imgHome" />
      </div>
    </div>
    <transition-group name="avaliacoesAnimation" mode="in-out" tag="div" appear>
      <div
        class="avaliacaoArea"
        v-for="(avaliacao, key) in request.avaliacoes"
        :key="'avaliacao' + key"
      >
        <p>
          <strong>{{ avaliacao.nome }}</strong>
        </p>
        <span>
          {{ avaliacao.descricao }}
        </span>
      </div>
    </transition-group>
  </div>
  <div v-else class="loading">
    <img src="@/assets/loadingAnimation.svg" alt="loadingAnimation" />
    <h1>Loading...</h1>
  </div>
</template>

<script>
import requestAPI from "@/mixins/requestApi.js";

export default {
  name: "Home",
  data() {
    return {
      loading: true,
    };
  },
  mixins: [requestAPI],
  created() {
    this.requestAPI("home");
  },
};
</script>

<style scoped>
.infos {
  display: flex;
}
.infosHome {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
h1 {
  font-size: 70px;
}
h2 {
  font-size: 25px;
}
.imgHome {
  display: flex;
  align-items: center;
  height: 400px;
}
.imgHome img {
  width: 300px;
}
.avaliacaoArea {
  padding: 20px;
  box-shadow: 3px 3px 2px 1px rgba(36, 80, 74, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
  border-radius: 10px;
}
.avaliacaoArea:last-child {
  margin-bottom: 0px;
}
.avaliacaoArea p {
  margin: 0px 0px 20px 0px;
  font-size: 25px;
}
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
}

.avaliacoesAnimation-enter-active {
  transition: all 1s ease;
}
.avaliacoesAnimation-enter {
  opacity: 0;
  transform: translate3d(-80px, 0, 0);
}
.avaliacoesAnimation-enter-to {
  opacity: 1;
  transform: translate3d(0px, 0, 0);
}

@media (max-width: 550px) {
  .imgHome {
    display: none;
  }
  .infosHome {
    margin-bottom: 50px;
  }
}
</style>
