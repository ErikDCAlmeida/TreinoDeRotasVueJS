<template>
  <header>
    <div class="containerHeader">
      <div class="areaLogo">
        <router-link :to="{ name: 'Home' }"><span>Techno</span></router-link>
      </div>
      <div class="areaMenu">
        <nav>
          <ul>
            <router-link :to="{ name: 'Cursos' }"><li>Cursos</li></router-link>
            <router-link :to="{ name: 'Contato' }"
              ><li>Contato</li></router-link
            >
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  background: #4e9c92;
  height: 70px;
  padding: 0px 10px;
}
.containerHeader {
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  height: 70px;
}
a {
  text-decoration: none;
  color: #fff;
}
.areaLogo {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
}
.areaMenu {
  flex: 1;
  height: inherit;
}
.areaMenu nav {
  height: inherit;
}
.areaMenu ul,
.areaMenu li {
  list-style: none;
}
.areaMenu ul {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  height: inherit;
}
.areaMenu a {
  padding: 10px;
  font-size: 17px;
  font-weight: 700;
  margin: 0px 10px;
}

.router-link-exact-active {
  color: #ffee00;
}
.areaLogo .router-link-exact-active {
  color: #fff;
}

@media (max-width: 440px) {
  .areaMenu a {
    margin: 0px;
  }
}
</style>
