<template>
  <header class="header container">
    <RouterLink to="/">
      <img class="header__logo" src="/images/Logo.svg" alt="Logo.svg">
    </RouterLink>
    <ul class="header__navigation">
      <RouterLink class="header__link" to="/">Главная</RouterLink>
      <RouterLink class="header__link" to="/about-project">О проекте</RouterLink>
      <RouterLink class="header__link" to="">Возможности</RouterLink>
      <RouterLink class="header__link" to="">Карточки</RouterLink>
      <RouterLink class="header__link" to="">Статистика</RouterLink>
      <RouterLink class="header__link" to="">FAQ</RouterLink>
    </ul>
    <div class="header__buttons">
      <Button typeButton="transparent" type="button" class="button_transparent">Войти</Button>
      <Button type="button">Регистрация</Button>
    </div>
  </header>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {Button}

}
</script>

<style scoped>
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

</style>