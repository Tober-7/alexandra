<template>
    <div class="container">
        <div class="container-child center column">
            <span class="text title">Len pre vyvolených</span>
            <hr class="margin3">
            <form @submit.prevent>
                <input v-model="input" type="password" autocomplete="off" placeholder="vložte tajné heslo" @keyup.enter="tryPassword" class="input">
            </form>
            <hr class="margin3">
        </div>
    </div>
</template>

<script>
import app from "@/plugins/app/_config/main.js"
import CryptoJS from "crypto-js"

export default {
  data() {
		return {
			input: "",
      password: "7065746b6f6a65676f64",
      passcode: "123#$%",
		}
	},

  methods: {
    tryPassword() {
      if (!this.input.length) return;

      const encrypted = CryptoJS.AES.encrypt(this.input, this.passcode).toString();
      const decrypted = CryptoJS.AES.decrypt(encrypted, this.passcode).toString();

      if (decrypted === this.password) {
        app.config.globalProperties.$isAuthenticated = true;

        this.pushToRoute("Main");
      }
      
			this.input = "";
    },

    pushToRoute(s) {
        this.$router.push({ name: s});
    },
  },
}
</script>