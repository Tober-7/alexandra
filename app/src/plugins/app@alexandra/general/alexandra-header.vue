<template>
    <div class="flex bg-dark-500 z-[100]">
        <div class="flex justify-between items-center relative w-full h-[46px] sm:h-[60px] md:h-[63px] lg:h-[66px] xl:h-[69px] px-[24px] sm:px-[32px] md:px-[34px] lg:px-[36px] xl:px-[38px] bg-dark-600 shadow-bottom z-[100] rounded-b-2xl border-b border-dark-200">
            <div class="flex items-center h-full">
                <button @click="pushRoute('Home')">
                    <img src="@/assets/icons/logo.png" class="w-[24px] sm:w-[32px] md:w-[34px] lg:w-[36px] xl:w-[38px]">
                </button>

                <template v-if="!isSmallScreen">
                    <div class="mx-4"></div>
                    <div class="w-2 h-2 border border-grey-500 rounded-full"></div>
                    <div class="mx-4"></div>
    
                    <span id="header-category--1" class="header-category flex h-full items-center relative text-font text-light-500 sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px]">{{ $t("header.birthdays") }}
                        <div id="header-categories--1" class="header-categories-list flex flex-col justify-start items-center absolute left-[0] top-[100%] w-full h-auto px-5 py-4 opacity-0 hover:opacity-100 rounded-b-2xl border-b border-l border-r border-dark-200 bg-dark-600 transition">
                            <button @click="pushRoute('Bd2023')" class="text-font text-light-500 hover:text-red-600 sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px] transition">2023</button>
                        </div>
                    </span>

                    <div class="mx-4"></div>
                    <div class="w-2 h-2 border border-grey-500 rounded-full"></div>
                    <div class="mx-4"></div>
    
                    <span id="header-category--2" class="header-category flex h-full items-center relative text-font text-light-500 sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px]">{{ $t("header.christmas") }}
                        <div id="header-categories--2" class="header-categories-list flex flex-col justify-start items-center absolute left-[0] top-[100%] w-full h-auto px-5 py-4 opacity-0 hover:opacity-100 rounded-b-2xl border-b border-l border-r border-dark-200 bg-dark-600 transition">
                            <button @click="pushRoute('Ch2023')" class="text-font text-light-500 hover:text-red-600 sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px] transition">2023</button>
                        </div>
                    </span>

                    <div class="mx-4"></div>
                    <div class="w-2 h-2 border border-grey-500 rounded-full"></div>
                    <div class="mx-4"></div>
    
                    <span id="header-category--3" class="header-category flex h-full items-center relative text-font text-light-500 sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px]">{{ $t("header.valentines") }}
                        <div id="header-categories--3" class="header-categories-list flex flex-col justify-start items-center absolute left-[0] top-[100%] w-full h-auto px-5 py-4 opacity-0 hover:opacity-100 rounded-b-2xl border-b border-l border-r border-dark-200 bg-dark-600 transition">
                            <button @click="pushRoute('Va2024')" class="text-font text-light-500 hover:text-red-600 sm:text-xs md:text-[13px] lg:text-sm xl:text-[15px] transition">2024</button>
                        </div>
                    </span>
                </template>
            </div>
            <div class="flex items-center h-full">
                <button @click="secret(0.75, $t('header.secretHidden'), $event)" class="text-font text-light-500 sm:hover:text-red-600 text-[8px] sm:text-[10px] md:text-[11px] lg:text-[12px] xl:text-[13px] transition">{{ $t("header.secretHidden") }}</button>
            </div>
        </div>
    </div>
</template>

<script>
import Helpers from "@/plugins/uni@helpers/helpers"

export default {
    data() {
        return {
            isSmallScreen: false,
        }
    },

    created() {
        window.addEventListener("resize", this.onResize);

        this.checkScreenSize();
    },
    unmounted() {
        window.removeEventListener("resize", this.onResize);
    },

    methods: {
        onResize() {
            this.checkScreenSize();
        },
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth < 640;
        },

        secret(timeout, previousText, e) {
            e.target.textContent = this.$t("header.secretVisible");
			setTimeout(function () {
				e.target.textContent = previousText;
			}, timeout * 1000);
        },
        pushRoute(name) {
            Helpers.pushRoute(this.$router, name);
        },
    }
}
</script>

<style>

/*#region Header*/

.header-category{
  pointer-events: all;
}

.header-categories-list{
  pointer-events: none;
}

.header-categories-list > *{
  pointer-events: none;
}

.header-categories-list:hover{
  pointer-events: all;
}

.header-categories-list:hover > *{
  pointer-events: all;
}

#header-category--1:hover #header-categories--1{
  pointer-events: all;

  opacity: 1;
}

#header-category--2:hover #header-categories--2{
  pointer-events: all;

  opacity: 1;
}

#header-category--3:hover #header-categories--3{
  pointer-events: all;

  opacity: 1;
}

/*#endregion*/

</style>