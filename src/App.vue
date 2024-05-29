<template>
  <div class="pages-wrapper" @wheel="handleWheel">
    <MyHeader @openSignInModel="showModal"></MyHeader>
    <RouterView @openSignInModel="showModal"></RouterView>
    <MyFooter></MyFooter>
    <tooltip class="tooltip" title="Бета-версия" description-text="Во время открытого бета-тестирования будет доступна часть функций"></tooltip>
    <PageProgressBar/>
    <ModalSignIn @userAuth="getUser" @closeModal="closeModal" :is-active="isActive" v-if="isActive"/>
  </div>
</template>

<script>
import Tooltip from "@/components/Tooltip.vue";
import PageProgressBar from "@/components/PageProgressBar.vue";
import MyHeader from "@/components/MyHeader.vue";
import MyFooter from "@/components/MyFooter.vue";
import ModalSignIn from "@/components/ModalSignIn.vue";
import {computed} from "vue";

export default {
  components: {ModalSignIn, MyFooter, MyHeader, PageProgressBar, Tooltip,},
  data() {
    return {
      scrollAmountToTop: 0,
      scrollAmountToBottom: 0,
      isActive: false,
      user: null,
    }
  },
  async mounted() {
    const res = await fetch('/json/users.json')
    const {users} = await res.json()

    const email = document.cookie
        .split("; ")
        .find((row) => row.startsWith("email="))
        ?.split("=")[1];
    const password = document.cookie
        .split("; ")
        .find((row) => row.startsWith("password="))
        ?.split("=")[1];

    for (const user of users) {
      if (user.email === email && user.password === password) {
        this.user = user
        document.cookie = `email=${email}`;
        document.cookie = `password=${password}`;
      }
    }
    document.addEventListener('keydown', this.handleEsc);
  },
  provide() {
    return {
      user: computed(() => this.user)
    }
  },
  methods: {
    handleWheel(e) {
      // console.log(e.wheelDeltaY)
      // console.log('wheeel ' + this.scrollAmountToTop)
      // console.log('wheeel ' + this.scrollAmountToBottom)


      if (e.wheelDeltaY < 0) {
        this.scrollAmountToBottom++
        if (this.scrollAmountToBottom > 5) {
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
          this.scrollAmountToBottom = 0
          this.scrollAmountToTop = 0
        }
      }
      else if (e.wheelDeltaY >= 0) {
        this.scrollAmountToTop++
        if (this.scrollAmountToTop > 5) {
          switch (this.$route.path) {
            case "/footer-site":
              this.$router.push("/advantages")
              break;
            case "/advantages":
              this.$router.push("/about-project")
              break;
            case "/about-project":
              this.$router.push("/")
              break;
          }
          this.scrollAmountToBottom = 0
          this.scrollAmountToTop = 0
        }
      }
    },
    showModal() {
      this.isActive = !this.isActive
    },
    closeModal() {
      this.isActive = false
    },
    getUser(e) {
      this.user = e
    },
    handleEsc(e) {
      if (e.key === 'Escape') {
        this.isActive = false;
      }
    }
  }
}
</script>

<style scoped>
.tooltip {
  padding: 20px 35px;
  position: absolute;
  right: 30px;
  bottom: 20px;
}
@media (max-width: 960px) {
  .tooltip {
    display: none;
  }
}
</style>