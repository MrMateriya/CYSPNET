<template>
  <footer class="footer container">
    <ScrollDown class="footer__scroll-down"></ScrollDown>
  </footer>
</template>

<script>
import ScrollDown from "@/components/ScrollDown.vue";
import Tooltip from "@/components/Tooltip.vue";

export default {
  components: {Tooltip, ScrollDown}

}
</script>

<style scoped>
.footer {
  padding-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
</style>