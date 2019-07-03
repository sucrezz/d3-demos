<template>
  <div class="home">
    <header class="flex">
      <div class="img">
        <img alt="Vue logo" src="../assets/logo.png" />
      </div>
      <div class="word">
        D3-DEMOS
      </div>
    </header>
    <section class="flex content-box">
      <Nav></Nav>
      <section>
        <router-view></router-view>
      </section>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Nav from "../components/nav.vue";

@Component({
  components: {
    Nav
  }
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
}
header {
  height: 6rem;
  line-height: 6rem;
  box-shadow: 0 2px 3px #ccc;
  .img {
    width: 6.5rem;
    height: 6rem;
    position: relative;
    img {
      display: block;
      width: 3rem;
      height: 3rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .word {
    flex: 1;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }
}
.content-box {
  height: calc(100% - 6rem);
  overflow-y: auto;
  overflow-x: hidden;
  align-items: flex-start;
  & > section {
    flex: 1;
    height: 100%;
    box-sizing: border-box;
    padding-left: 3rem;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
