<template>
  <main class="about-project container">
    <div class="about-project__description">
      <h1 class="about-project__description-title">
        О платформе
      </h1>
      <p class="about-project__description-text">
        Новый формат киберспортивной платформы. Игроки и тренеры, комментаторы и аналитики,
        команды и клубы, арены и организаторы — здесь каждый может раскрыть свой потенциал,
        зарабатывать в любимой игре и просто весело проводить время с друзьями.
      </p>
      <MyButton v-if="!user" @click="$emit('openSignInModel')" class="about-project__button">
        Вступить
      </MyButton>
    </div>
    <img class="about-project__background" src="/images/Enigma.png" alt="Enigma.png">
  </main>
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  components: {MyButton},
  inject: ['user'],
}
</script>

<style scoped>
.about-project {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.about-project__description {
  width: 425px;
}
.about-project__button {

}
.about-project__description-title {
  color: var(--white);
  font-weight: 600;
  font-size: 46px;
  line-height: 69px;
  margin-bottom: 15px;
}
.about-project__description-text {
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  color: var(--white);
  opacity: 0.75;
  margin-bottom: 35px;
}
.about-project__background {
  position: absolute;
  top: 163px;
  right: 580px;
  user-select: none;
  pointer-events: none;
  z-index: -1;
  width: 1299px;
}
</style>