<template>
  <main class="advantages-page container">
    <h1 class="advantages-page__title">
      Наши преимущества
    </h1>
    <div class="advantages-page__advantages advantages">
      <img class="advantages__arrow-down" src="/images/Arrow.svg" alt="Arrow.svg">
      <div class="advantages__item advantages__item_mic">
        <img class="advantages__item-image" src="/images/Mic.svg" alt="Mic.svg">
        <h4 class="advantages__item-title">Получите признание комьюнити</h4>
        <p class="advantages__item-text"> Соберите фан-базу и делитесь своими достижениями! Расскажите о себе в постах и комментариях своего профиля.</p>
      </div>
      <img class="advantages__arrow-down" src="/images/Arrow.svg" alt="Arrow.svg">
      <div class="advantages__item advantages__item_lightning">
        <img class="advantages__item-image" src="/images/Lightning.svg" alt="Lightning.svg">
        <h4 class="advantages__item-title">Используйте возможности на максимум</h4>
        <p class="advantages__item-text">Попробуйте себя в роли тренера, аналитика и комментатора или организуйте свой собственный турнир!</p>
      </div>
      <img class="advantages__arrow-up" src="/images/Arrow.svg" alt="Arrow.svg">
      <div class="advantages__item advantages__item_medal">
        <img class="advantages__item-image" src="/images/Firefly.svg" alt="Firefly.svg">
        <h4 class="advantages__item-title">Попадите в топ-пользователей</h4>
        <p class="advantages__item-text">Развивайте свои навыки и получайте оценки и отзывы других пользователей! Вы ведь хотите стать лучшим в своей отрасли?</p>
      </div>
      <img class="advantages__arrow-up" src="/images/Arrow.svg" alt="Arrow.svg">
      <div class="advantages__item advantages__item_bag">
        <img class="advantages__item-image" src="/images/Bag.svg" alt="Bag.svg">
        <h4 class="advantages__item-title">Монетизируйте свои навыки</h4>
        <p class="advantages__item-text">Заработайте деньги за счёт своих навыков в разных отраслях киберспорта</p>
      </div>
    </div>
  </main>
</template>

<script>
import Button from "@/components/MyButton.vue";

export default {
  components: {Button}

}
</script>

<style scoped>
.advantages__arrow-down {
  margin: auto;
}
.advantages__arrow-up {
  margin: auto;
  transform: scaleY(-100%);
}
.advantages-page {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
}
.advantages-page__title {
  font-weight: 600;
  font-size: 46px;
  line-height: 69px;
  margin-bottom: 50px;
  color: var(--white)
}
.advantages {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 64px 35px;
}
.advantages__item {

}
.advantages__item-text {
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: var(--white);
  opacity: 0.75;
}
.advantages__item-image {
  width: 24px;
  height: 24px;
  margin-bottom: 10px;
}
.advantages__item-title {
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 10px;
  color: var(--white)
}
.advantages__item_mic {
  grid-column-start: 1;
  grid-row-start: 1;
}
.advantages__item_lightning {
  grid-column-start: 2;
  grid-row-start: 2;
}
.advantages__item_medal {
  grid-column-start: 3;
  grid-row-start: 1;
}
.advantages__item_bag {
  grid-column-start: 4;
  grid-row-start: 2;
}
</style>