<template>
  <input :name="name" :required="required" :type :placeholder="placeHolder" class="input">
</template>

<script>
export default {
  props: ['placeHolder', 'type', 'required', 'name'],
}
</script>

<style scoped>
input {
  outline: none;

  padding: 15px;
  font-weight: 400;
  background-color: transparent;
  border: 1px solid var(--white);
  color: var(--white);
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  line-height: 27px;
  border-radius: 15px;
}
input::placeholder {
  font-weight: 400;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  line-height: 27px;
}
</style>