<template>
  <footer :class="['footer', 'container', this.path === '/footer-site' ? 'footer_hidden' : '']">
    <ScrollDown class="footer__scroll-down"></ScrollDown>
  </footer>
</template>

<script>
import ScrollDown from "@/components/ScrollDown.vue";

export default {
  components: {ScrollDown},
  computed: {
    path() {
      return  this.$route.path
    }
  }
}
</script>

<style scoped>
.footer_hidden {
  visibility: collapse;
}
.footer {
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>