<template>
    <div class="flex bg-dark-600">
        <div class="flex justify-start items-center relative w-full px-[24px] sm:px-[32px] md:px-[34px] lg:px-[36px] xl:px-[38px] bg-dark-500 shadow-bottom z-[99] rounded-b-2xl border-b border-dark-200">
            <span class="py-3 text-font text-light-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl">{{ $t("home.home") }}</span>
        </div>
    </div>
    <div class="flex flex-col justify-start items-center w-full h-full px-[24px] sm:px-[32px] md:px-[34px] lg:px-[36px] xl:px-[38px] bg-dark-600">
        <hr class="my-4 sm:my-6 lg:my-8">
        <span class="text-font text-center text-light-500 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">{{ $t("home.name") }}</span>
        <hr class="my-[2px] sm:my-[2px] lg:my-[4px]">
        <span class="text-font text-center text-grey-500 text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl">{{ $t("home.title") }}</span>
        <hr class="my-3 sm:my-3 md:my-4 lg:my-5 xl:my-6">
        <span v-for="line in splitLines($t('home.text'))" :key="line" class="text-font text-center text-light-500 text-xs sm:text-base md:text-xl lg:text-2xl xl:text-3xl">
            {{ line }}<br/>
        </span>

        <hr class="w-full my-8 sm:my-12 md:my-14 lg:my-16 xl:my-[72px] border-l border-grey-1000">

        <div class="flex flex-col justify-start items-start w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 mb-8 sm:mb-11 md:mb-14 lg:mb-[68px] xl:mb-20">
            <div class="flex">
                <span class="px-[8px] py-[4px] sm:px-[10px] sm:py-[5px] md:px-[12px] md:py-[6px] lg:px-[14px] lg:py-[7px] xl:px-4 xl:py-3 bg-dark-500 rounded-lg sm:rounded-xl shadow-around-sm xl:shadow-around-xl border border-dark-200 text-font text-light-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">2023</span>
            </div>
            <hr class="my-[6px] sm:my-[10px] md:my-[12px] lg:my-[14px] xl:my-4">
            <div class="flex justify-start items-center flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full">
                <button @click="pushRoute('Bd2023')" class="p-2 sm:p-[10px] md:p-[12px] lg:p-[14px] xl:p-4 bg-dark-500 rounded-lg sm:rounded-xl shadow-around-sm xl:shadow-around-xl border border-dark-200 sm:hover:border-red-600 transition">
                    <img src="@/assets/images/bd/2023/thumbnail.jpg" class="w-[70px] h-[70px] sm:w-[115px] sm:h-[115px] md:w-[160px] md:h-[160px] lg:w-[205px] lg:h-[205px] xl:w-[250px] xl:h-[250px] rounded-xl object-cover shadow-around-sm xl:shadow-around-xl border-2 sm:border-4 border-dark-200">
                    <hr class="my-[1px] sm:my-[2px] md:my-[4px] lg:my-[6px] xl:my-[8px] border-none">
                    <span class="text-font text-light-500 text-[10px] sm:text-[12px] md:text-[15px] lg:text-[18px] xl:text-xl">{{ $t("home.birthday") }}</span>
                </button>
                <button @click="pushRoute('Ch2023')" class="p-2 sm:p-[10px] md:p-[12px] lg:p-[14px] xl:p-4 bg-dark-500 rounded-lg sm:rounded-xl shadow-around-sm xl:shadow-around-xl border border-dark-200 sm:hover:border-red-600 transition">
                    <img src="@/assets/images/ch/2023/thumbnail.png" class="w-[70px] h-[70px] sm:w-[115px] sm:h-[115px] md:w-[160px] md:h-[160px] lg:w-[205px] lg:h-[205px] xl:w-[250px] xl:h-[250px] rounded-xl object-cover shadow-around-sm xl:shadow-around-xl border-2 sm:border-4 border-dark-200">
                    <hr class="my-[1px] sm:my-[2px] md:my-[4px] lg:my-[6px] xl:my-[8px] border-none">
                    <span class="text-font text-light-500 text-[10px] sm:text-[12px] md:text-[15px] lg:text-[18px] xl:text-xl">{{ $t("home.christmas") }}</span>
                </button>
            </div>
            <hr class="my-[6px] sm:my-[10px] md:my-[12px] lg:my-[14px] xl:my-4">
            <div class="flex w-full justify-end">
                <span class="px-[8px] py-[4px] sm:px-[10px] sm:py-[5px] md:px-[12px] md:py-[6px] lg:px-[14px] lg:py-[7px] xl:px-4 xl:py-3 bg-dark-500 rounded-lg sm:rounded-xl shadow-around-sm xl:shadow-around-xl border border-dark-200 text-font text-light-500 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">2024</span>
            </div>
            <hr class="my-[6px] sm:my-[10px] md:my-[12px] lg:my-[14px] xl:my-4">
            <div class="flex justify-end items-center flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 w-full">
                <button @click="pushRoute('Va2024')" class="p-2 sm:p-[10px] md:p-[12px] lg:p-[14px] xl:p-4 bg-dark-500 rounded-lg sm:rounded-xl shadow-around-sm xl:shadow-around-xl border border-dark-200 sm:hover:border-red-600 transition">
                    <img src="@/assets/images/va/2024/thumbnail.png" class="w-[70px] h-[70px] sm:w-[115px] sm:h-[115px] md:w-[160px] md:h-[160px] lg:w-[205px] lg:h-[205px] xl:w-[250px] xl:h-[250px] rounded-xl object-cover shadow-around-sm xl:shadow-around-xl border-2 sm:border-4 border-dark-200">
                    <hr class="my-[1px] sm:my-[2px] md:my-[4px] lg:my-[6px] xl:my-[8px] border-none">
                    <span class="text-font text-light-500 text-[10px] sm:text-[12px] md:text-[15px] lg:text-[18px] xl:text-xl">{{ $t("home.valentine") }}</span>
                </button>
            </div>
            <hr class="my-[6px] sm:my-[10px] md:my-[12px] lg:my-[14px] xl:my-4">
        </div>
    </div>
</template>

<script>
import Helpers from "@/plugins/uni@helpers/helpers"

export default {
    emits: ['setIsAuth'],

    mounted() {
        this.$emit('setIsAuth', true);
    },

    methods: {
        pushRoute(name) {
            Helpers.pushRoute(this.$router, name);
        },
        splitLines(text) {
            return Helpers.splitLines(text);
        }
    },
}
</script>