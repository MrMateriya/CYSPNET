<template>
  <main class="home-view container">
    <div class="home-view__description-wrapper">
      <h5 class="home-view__sub-title">Cyber Sport Network</h5>
      <h1 class="home-view__title">Играй, развивайся и выигрывай вместе с нами</h1>
      <div class="home-view__features-wrapper">
        <ul class="home-view__features-list features-list">
          <li class="features-list__item">Ежедневные турниры</li>
          <li class="features-list__item">Денежные призы</li>
          <li class="features-list__item">Свой подход к читерству</li>
        </ul>
        <ul class="home-view__features-list features-list">
          <li class="features-list__item">Уникальная рейтинговая система</li>
          <li class="features-list__item">Развитие в любой отрасли киберспорта</li>
          <li class="features-list__item">Интересный матчмейкинг</li>
        </ul>
      </div>
      <div class="buttons">
        <Button class="buttons__join-button">Присоединиться</Button>
        <Button class="buttons__about-project" type-button="white">О проекте</Button>
      </div>
    </div>
    <img class="home-view__background" src="/images/BackGroundHome.png" alt="BackGroundHome.png">
  </main>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
  components: {Button}

}
</script>

<style scoped>
.home-view__background {
  position: absolute;
  top: 108px;
  right: 0;
  user-select: none;
  pointer-events: none;
  z-index: -1;
}
.home-view__description-wrapper {
  width: 722px;
  margin-top: 147px;
}
.home-view__sub-title {
  margin-bottom: 15px;
  opacity: 0.5;
  color: var(--white);
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
}
.home-view__sub-title:active {
  opacity: 1;
}
@media (hover: hover) {
  .home-view__sub-title:hover {
    opacity: 1;
  }
  .features-list__item:hover {
    opacity: 1;
  }
}
.home-view__title {
  font-weight: 600;
  font-size: 64px;
  line-height: 70px;
  color: var(--white);
  text-transform: uppercase;
  margin-bottom: 25px;
}
.home-view__features-wrapper {
  display: grid;
  column-gap: 25px;
  grid-template-columns: 232px auto;
}
.features-list {
  margin-bottom: 45px;
  list-style: none;
}
.features-list__item:not(.features-list__item:last-child) {
  margin-bottom: 10px;
}
.features-list__item {
  opacity: 0.7;
  list-style-position: inside;
  color: var(--white);
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  white-space: nowrap;
  display: flex;
  align-items: center;
}
.features-list__item:active {
  opacity: 1;
}
.features-list__item:before {
  content: '';

  display: flex;
  width: 10px;
  height: 10px;
  margin-right: 5px;
  border-radius: 50%;
  background: var(--red);
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.buttons__join-button {
  margin-right: 15px;
}
</style>