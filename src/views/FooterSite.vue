<template>
  <main class="footer-site container">
    <section class="footer-site__navigation navigation">
      <div class="navigation__logo">
        <RouterLink to="/">
          <img src="/images/Logo%20Vertical.svg" alt="LogoVertical.svg">
        </RouterLink>
      </div>
      <nav class="navigation__nav">
        <h4 class="navigation__nav-title">
          Навигация
        </h4>
        <ul class="navigation__nav-list">
          <li class="navigation__nav-list-item">
            <RouterLink class="navigation__nav-list-link" to="/">Главная</RouterLink>
          </li>
          <li class="navigation__nav-list-item">
            <RouterLink class="navigation__nav-list-link" to="/about-project">О проекте</RouterLink>
          </li>
          <li class="navigation__nav-list-item">
            <RouterLink class="navigation__nav-list-link" to="/advantages">Возможности</RouterLink>
          </li>
        </ul>
      </nav>
      <div class="navigation__social-media">
        <h4 class="navigation__social-media-title">
          Соц. сети
        </h4>
        <ul class="navigation__social-media-list">
          <li  class="navigation__social-media-item">
            <a href="#">
              <img src="/images/vk.svg" alt="vk.svg">
            </a>
          </li>
          <li  class="navigation__social-media-item">
            <a href="#">
              <img src="/images/youtube.svg" alt="youtube.svg">
            </a>
          </li>
          <li  class="navigation__social-media-item">
            <a href="#">
              <img src="/images/instagram.svg" alt="instagram.svg">
            </a>
          </li>
          <li  class="navigation__social-media-item">
            <a href="#">
              <img src="/images/discord.svg" alt="discord.svg">
            </a>
          </li>
          <li  class="navigation__social-media-item">
            <a href="#">
              <img src="/images/twitch.svg" alt="twitch.svg">
            </a>
          </li>
        </ul>
      </div>
    </section>
    <section class="footer-site__information">
      <p class="footer-site__information-text">
        © 2021 Все права защищены
      </p>
    </section>
  </main>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer-site {
  display: flex;
  flex-direction: column;
}
.navigation {
  display: flex;
  justify-content: space-around;
}
.navigation__nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.navigation__nav-title {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  padding: 10px 15px;
  color: var(--white);
  opacity: 0.5;
  margin-bottom: 25px;
}
.navigation__nav-list {
  list-style: none;
}
.navigation__nav-list-item {
  padding: 15px;
}
.navigation__nav-list-link {
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
  color: var(--white);
}
.navigation__social-media-title {
  opacity: 0.5;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  padding: 10px 15px;
  margin-bottom: 25px;
  color: var(--white);
}
.navigation__social-media-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-left: 15px;
}
.footer-site {
  display: flex;
  flex-direction: column;
}
.footer-site__navigation {
  flex: 1;
  border-bottom: 1px solid #FFFFFF40;
  margin-bottom: 40px;
}
.footer-site__information {
  padding: 10px 20px;
}
.footer-site__information-text {
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  opacity: 0.5;
  color: var(--white);
}
</style>