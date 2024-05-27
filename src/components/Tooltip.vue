<template>
  <div @mouseenter="() => {this.isShowToolTip = true}" @mouseleave="() => {this.isShowToolTip = false}" @pointerdown="handleShowToolTip" class="tooltip">
    <p class="tooltip__title">{{title}}</p>
    <img class="tooltip__image" src="/images/QuestionMark.svg" alt="QuestionMark.svg">
    <p v-show="isShowToolTip" class="tooltip__description-text">{{descriptionText}}</p>
  </div>
</template>

<script>
export default {
  props: ['title', 'descriptionText'],
  data() {
    return {
      isShowToolTip: false
    }
  },
  methods: {
    handleShowToolTip(e) {
      e.stopPropagation()
      this.isShowToolTip = !this.isShowToolTip
    }
  }
}
</script>

<style scoped>
.tooltip__description-text {
  position: absolute;
  bottom: 100%;
  right: 0;
  padding: 15px 35px;
  border-radius: 15px;
  border: 1px solid var(--white);
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  color: var(--white);
  min-width: 416px;
}
.tooltip {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  transition: all 0.5s ease;
  position: relative;
}
.tooltip__title {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  margin-right: 10px;
  color: var(--white);
  cursor: pointer;
  user-select: none;
}
.tooltip:active {
  opacity: 1;
}
@media (hover: hover) {
  .tooltip:hover {
    opacity: 1;
  }
}
.tooltip__image {
  width: 23px;
  height: 23px;
  cursor: pointer;
}
</style>