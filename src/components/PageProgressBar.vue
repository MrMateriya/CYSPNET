<template>
  <ul class="progress-bar">
    <li class="progress-bar__item">
      <div :class="['progress-bar__item-circle', path === '/' ? 'progress-bar__item-circle_current' : '']"></div>
    </li>
    <li class="progress-bar__item">
      <div :class="['progress-bar__item-circle', path === '/about-project' ? 'progress-bar__item-circle_current' : '']"></div>
    </li>
    <li class="progress-bar__item">
      <div class="progress-bar__item-circle"></div>
    </li>
    <li class="progress-bar__item">
      <div class="progress-bar__item-circle"></div>
    </li>
    <li class="progress-bar__item">
      <div class="progress-bar__item-circle"></div>
    </li>
    <li class="progress-bar__item">
      <div class="progress-bar__item-circle"></div>
    </li>
    <li class="progress-bar__item">
      <div class="progress-bar__item-circle"></div>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    path() {
      return  this.$route.path
    }
  }
}
</script>

<style scoped>
.progress-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  row-gap: 5px;
  padding: 10px;
  list-style: none;
  margin-top: auto;
  margin-bottom: auto;
  top: calc(50% - 147px);
  left: 50px;
}
.progress-bar__item {
  padding: 10px;
}
.progress-bar__item-circle {
  background-color: var(--white);
  opacity: 0.2;
  border-radius: 50%;
  width: 15px;
  height: 15px;
}
.progress-bar__item-circle_current {
  opacity: 1;
}
</style>