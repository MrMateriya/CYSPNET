<template>
  <button :class="[typeButton === 'transparent' ? 'button_transparent' : '', typeButton === 'white' ? 'button_white' : '', 'button']">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['typeButton'],
}
</script>

<style scoped>
.button {
  outline: none;

  padding: 20px 35px;
  cursor: pointer;
  background-color: var(--red);
  font-family: "Raleway", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  border-radius: 15px;
  filter: drop-shadow(0 4px 25px var(--red));
  border: 1px solid var(--red);
  color: var(--white);
  transition: all 0.5s ease;
}
.button_white {
  color: var(--white);
  background: none;
  border: 1px solid var(--white);
}
.button_transparent {
  background: none;
  filter: none;
  border: 1px solid rgba(0, 0, 0, 0);
}
.button:active {
  background: none;
  border: 1px solid var(--white);
  filter: drop-shadow(0 4px 25px var(--white));
}
.button_white:active {
  background: none;
  border: 1px solid var(--white);
  filter: drop-shadow(0 4px 25px var(--white));
}
@media (hover: hover) {
  .button:hover {
    background: none;
    border: 1px solid var(--white);
    filter: drop-shadow(0 4px 25px var(--white));
  }
  .button_white:hover {
    background: none;
    border: 1px solid var(--white);
    filter: drop-shadow(0 4px 25px var(--white));
  }
}
</style>