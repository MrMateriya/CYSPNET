<template>
  <div @click="handleClick" class="scroll-down">
    <p class="scroll-down__text">Скролль чтобы увидеть больше</p>
    <img class="scroll-down__arrow" src="/images/ScrollDownArrow.svg" alt="ScrollDownArrow.svg">
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      console.log(this.$route.path)
      switch (this.$route.path) {
        case "/":
          this.$router.push("/about-project")
          break;
        case "/about-project":
          this.$router.push("/advantages")
          break;
        case "/advantages":
          this.$router.push("/footer-site")
          break;
      }
    }
  }
}
</script>

<style scoped>
.scroll-down {
  opacity: 0.5;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
}
.scroll-down:active {
  opacity: 1;
}
@media (hover: hover) {
  .scroll-down:hover {
    opacity: 1;
  }
}
.scroll-down__text {
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: var(--white);
}
.scroll-down__arrow {
  width: 24px;
  height: 24px;
}
@media (max-width: 340px) {
  .scroll-down__text {
    font-size: 14px;
  }
}
</style>