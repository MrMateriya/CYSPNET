<template>
  <Header></Header>
  <RouterView></RouterView>
  <Footer></Footer>
  <tooltip class="tooltip" title="Бета-версия" description-text="Во время открытого бета-тестирования будет доступна часть функций"></tooltip>
  <PageProgressBar/>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Tooltip from "@/components/Tooltip.vue";
import PageProgressBar from "@/components/PageProgressBar.vue";

export default {
  components: {PageProgressBar, Tooltip, Footer, Header}

}
</script>

<style scoped>
.tooltip {
  padding: 20px 35px;
  position: absolute;
  right: 30px;
  bottom: 20px;
}
</style>