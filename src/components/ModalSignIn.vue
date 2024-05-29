<template>
  <div @click="$emit('closeModal')" class="modal-wrapper">
    <div @click="(e) => {e.stopPropagation()}" :class="[isFailedSignIn ? 'modal_failed' : '', 'modal']">
      <button @click="$emit('closeModal')" class="modal__button-cross">
        <img class="modal__button-cross-image" src="/images/Cross.svg" alt="Cross.svg">
      </button>
      <form @submit.prevent="submitForm" class="modal__form">
        <MyInput name="email" required="required" place-holder="Почта" type="email"></MyInput>
        <MyInput name="password" required="required" place-holder="Пароль" type="password"></MyInput>
        <my-button type="submit">Войти</my-button>
      </form>
    </div>
  </div>
</template>

<script>
import MyInput from "@/components/MyInput.vue";
import MyButton from "@/components/MyButton.vue";

export default {
  components: {MyButton, MyInput},
  props: ['isActive'],
  data() {
    return {
      isFailedSignIn: false
    }
  },
  methods: {
    async submitForm(e) {
      const res = await fetch('/json/users.json')
      const {users} = await res.json()

      const formData = new FormData(e.target)

      const email = formData.get('email').toLowerCase()
      const password = formData.get('password')

      for (const user of users) {
        if (user.email === email && user.password === password) {
          document.cookie = `email=${email}`;
          document.cookie = `password=${password}`;

          this.isFailedSignIn = false
          this.$emit('userAuth', user)
          this.$emit('closeModal')
        }
      }
      this.isFailedSignIn = true
      this.$emit('failSignIn')
    }
  }
}
</script>

<style scoped>
.modal_failed {
  border: 1px solid var(--red) !important;
}
.modal-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #282937BF;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal__form {
  display: flex;
  flex-direction: column;
  row-gap: 25px;
}
.modal__button-cross {
  position: absolute;
  top: 50px;
  right: 50px;
  background: none;
  display: flex;
  border: none;
  outline: none;
  cursor: pointer;
}
.modal__button-cross-image {
  width: 19px;
  height: 19px;
}
.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  width: 920px;
  background-color: #272937;
  border-radius: 50px;
  padding: 50px 0;
  border: 1px solid #FFFFFF80;
}
</style>