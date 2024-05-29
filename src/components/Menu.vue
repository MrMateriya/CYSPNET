<template>
  <div class="menu">
    <img @click="handleCloseMenu" class="menu__image" src="/images/menu.svg" alt="menu.svg">
    <ul class="menu__navigation">
      <li class="menu__item">
        <RouterLink class="menu__link" to="/">Главная</RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink class="menu__link" to="/about-project">О проекте</RouterLink>
      </li>
      <li class="menu__item">
        <RouterLink class="menu__link" to="/advantages">Возможности</RouterLink>
      </li>
    </ul>
    <tooltip class="tooltip" title="Бета-версия" description-text="Во время открытого бета-тестирования будет доступна часть функций"></tooltip>
  </div>
  <div @click="handleCloseMenu" class="menu-background">
  </div>
</template>

<script>
import tooltip from "@/components/Tooltip.vue";

export default {
  components: {tooltip},
  methods: {
    handleCloseMenu(e) {
      e.stopPropagation()
      this.$emit('closeMenu')
    }
  }
}
</script>

<style scoped>
.menu {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 2;
  width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #4B4856;
  padding: 65px 20px 50px 35px;
}
.menu__image {
  margin-bottom: 16px;
  margin-left: auto;
  cursor: pointer;
}
.menu__navigation {
  list-style: none;
  margin-bottom: auto;
}
.menu__link {
  text-decoration: none;
  color: var(--white);
}
.menu__item {
  padding: 20px 25px;
}
.menu__item:not(.menu__item:last-child) {
  margin-bottom: 5px;
}
.menu-background {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: #000000BF;
}
.tooltip {

}
</style>