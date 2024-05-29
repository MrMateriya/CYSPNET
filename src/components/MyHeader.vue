<template>
  <header :class="['header', 'container', this.path === '/footer-site' ? 'header_hidden' : '']">
    <RouterLink to="/">
      <img class="header__logo" src="/images/Logo.svg" alt="Logo.svg">
    </RouterLink>
    <ul class="header__navigation">
      <li>
        <RouterLink class="header__link" to="/">Главная</RouterLink>
      </li>
      <li>
        <RouterLink class="header__link" to="/about-project">О проекте</RouterLink>
      </li>
      <li>
        <RouterLink class="header__link" to="/advantages">Возможности</RouterLink>
      </li>
    </ul>
    <div class="header__right-part">
      <div v-if="!user" class="header__buttons">
        <MyButton @click="$emit('openSignInModel')" typeButton="transparent" type="button" class="button_transparent">Войти</MyButton>
        <MyButton type="button">Регистрация</MyButton>
      </div>
      <div @click="showMenu" class="header__menu">
        <img class="header__menu-image" src="/images/menu.svg" alt="menu.svg">
      </div>
    </div>
  </header>
  <Menu @closeMenu="closeMenu" v-if="isActiveMenu"/>
</template>

<script>
import MyButton from "@/components/MyButton.vue";
import Menu from "@/components/Menu.vue";

export default {
  components: {Menu, MyButton},
  inject: ['user'],
  computed: {
    path() {
      return this.$route.path
    }
  },
  data() {
    return {
      isActiveMenu: false
    }
  },
  methods: {
    showMenu() {
      this.isActiveMenu = true
    },
    closeMenu() {
      this.isActiveMenu = false
    }
  }
}
</script>

<style scoped>
.header__menu {
  display: none;
  cursor: pointer;
}
.header_hidden {
  visibility: collapse;
}
.header {
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header__logo {

}
.header__navigation {
  list-style: none;
  display: flex;
}
.header__link {
  color: var(--white);
  padding: 20px;
  white-space: nowrap;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
}
.header__buttons {
  display: flex;
  justify-content: center;
  column-gap: 5px;
}
.header_button {

}
.header__right-part {
  display: flex;
  flex-direction: row;
}
@media (max-width: 1630px) {
  .header__navigation {
    display: none;
  }
  .header__menu {
    display: flex;
    margin-left: 90px;
  }
  .header__menu-image {
    width: 60px;
    height: 60px;
  }
}

@media (max-width: 960px) {
  
}
</style>