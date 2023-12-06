<template>
    <div class="flex flex-col justify-center items-center h-full">
        <div class="flex flex-col justify-between items-center w-[350px] h-[240px] sm:w-[450px] sm:h-[280px] md:w-[550px] md:h-[320px] lg:w-[650px] lg:h-[360px] xl:w-[750px] xl:h-[400px] p-12 bg-transparent">
            <span class="text-font text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-light-500">{{ $t("auth.password") }}</span>
            <form @submit.prevent="submit()" class="flex flex-col items-center w-full">
                <input v-model="password" type="password" :placeholder="$t('auth.placeholder')" autocomplete="off" class="w-full px-4 pb-2 border-b border-grey-500 hover:border-light-500 bg-transparent text-font text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-light-500 placeholder:text-grey-500 focus:placeholder:text-transparent focus:outline-none transition">
                <hr class="my-3 sm:my-5 md:my-6 border-none">
                <button type="submit" class="w-16 sm:w-20 md:w-24 py-1 text-font text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl text-light-500 sm:hover:text-red-600 transition">{{ $t("auth.submit") }}</button>
            </form>
        </div>
    </div>
</template>

<script>
import Helpers from "@/plugins/uni@helpers/helpers"

export default {
    emits: ['setIsAuth'],

    mounted() {
        this.$emit('setIsAuth', false);
    },

    data() {
        return {
            password: '',
        }
    },

    methods: {
        submit() {
            if (!this.password) return;

            if (Helpers.checkPassword(this.password)) {
                localStorage.setItem("alexandra_auth_token", JSON.stringify({password: this.password, at: Date.now()}))

                this.$toast.success("Welcome!");
                
                return Helpers.goTo(this.$router, "Home");
            }
            
            this.$toast.error("Wrong Password");

            this.password = "";
        }
    },
}
</script>