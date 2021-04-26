<template>
  <div class="containerContato">
    <div v-if="loading" class="loading">
      <img src="@/assets/loadingAnimation.svg" alt="loadingAnimation" />
      <h1>Loading...</h1>
    </div>
    <transition>
      <div v-if="request">
        <div>
          <h1>{{ request.titulo }}</h1>
          <h3>{{ request.descricao }}</h3>
          <p>Telefone: {{ request.contato.telefone }}</p>
          <p>Email: {{ request.contato.email }}</p>
          <p>Endereço: {{ request.contato.endereco }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import requestAPI from "@/mixins/requestApi.js";

export default {
  name: "Contato",
  mixins: [requestAPI],
  created() {
    this.requestAPI("contato");
  },
};
</script>

<style scoped>
.loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 70px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
  transform: translate3d(-10px, 0, 0);
}
</style>
