<template>
    <div class="flex bg-dark-600">
        <div class="flex justify-start items-center relative w-full px-[24px] sm:px-[32px] md:px-[34px] lg:px-[36px] xl:px-[38px] bg-dark-500 shadow-bottom z-[99] rounded-b-2xl border-b border-dark-200">
            <span class="py-3 text-font text-light-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl">{{ $t("home.christmas") }} - 2023</span>
        </div>
    </div>
    <div class="flex h-full">
        <div class="flex w-full h-full justify-center items-center">
            <div class="flex justify-center items-center w-full h-full">
                <button @click="open()" class="gift flex" :class="[!opened ? 'swing' : '']">
                    <img src="@/assets/images/ch/general/gift/Gift_Top.png" class="gift-top absolute" :class="[opened ? 'moved' : '']">
                    <img src="@/assets/images/ch/general/gift/Gift_Base.png" class="gift-base absolute" :class="[opened ? 'moved' : '']">
                </button>
                <img src="@/assets/images/ch/2023/Ja.jpg" class="gift-content absolute rounded-[15px] sm:rounded-[20px] xl:rounded-[25px] object-cover shadow-around-sm xl:shadow-around-xl border sm:border-[3px] border-dark-200" :class="[opened ? 'open' : '']">
                <span class="message absolute text-font text-center text-light-500 text-[8px] sm:text-[10px] md:text-xs lg:text-[14px] xl:text-[16px]" :class="[opened ? 'open' : '']">{{ $t("ch2023.message") }}</span>
                <img src="@/assets/images/ch/2023/hands.png" class="giving hands absolute w-[50px] sm:w-[65px] md:w-[85px] lg:w-[105px] xl:w-[125px]" :class="[opened ? 'open' : '']">
                <img src="@/assets/images/ch/2023/heart.svg" class="giving heart absolute w-[30px] sm:w-[40px] md:w-[55px] lg:w-[70px] xl:w-[85px]" :class="[opened ? 'open' : '']">
            </div>
        </div>
        <canvas ref="confettiCanvas" class="pointer-events-none absolute w-full h-full"></canvas>
    </div>
</template>

<script>
import confetti from "canvas-confetti"    

export default {
    emits: ['setIsAuth'],

    mounted() {
        this.$emit('setIsAuth', true);

        this.confettiCanvas = this.$refs["confettiCanvas"];
    },

    data() {
        return {
            opened: false,

            confettiCanvas: null,
        }
    },

    methods: {
        open() {
            if (this.opened) return;

            this.opened = true;

            const myConfetti = confetti.create(this.confettiCanvas, {
                resize: true,
                useWorker: true
            });
            
            setTimeout(function() {
                myConfetti({
                    particleCount: 4000,
                    startVelocity: 275,
                    spread: 75,
                    origin: {
                        y: 3
                    },
                    gravity: 0.5,
                    ticks: 800,
                });
                myConfetti({
                    particleCount: 100,
                    startVelocity: 275,
                    spread: 75,
                    origin: {
                        y: 3
                    },
                    shapes: [confetti.shapeFromText({ text: "❤️", scalar: 2 })],
                    gravity: 0.5,
                    ticks: 800,
                    flat: true,
                });
            }, 3 * 1000)
        },
    },
}
</script>

<style>

/* #region Gift */

@media (max-width: 639px) {
    :root {
        --gift-size: 150px;
    }
}
@media (min-width: 640px) {
    :root {
        --gift-size: 195px;
    }
}
@media (min-width: 768px) {
    :root {
        --gift-size: 230px;
    }
}
@media (min-width: 1024px) {
    :root {
        --gift-size: 265px;
    }
}
@media (min-width: 1280px) {
    :root {
        --gift-size: 300px;
    }
}

.gift {
    pointer-events: none;

    width: calc(var(--gift-size) + 25px);
    height: calc(var(--gift-size) + 25px);
    
    transition: 200ms;

    animation-name: wiggle;
    animation-duration: 0.75s;
    animation-iteration-count: 1;

    &.swing {
        pointer-events: all;

        width: var(--gift-size);
        height: var(--gift-size);

        animation-name: swing;
        animation-duration: 2s;
        animation-iteration-count: infinite;
    }
}

@keyframes swing {
    0% {
        rotate: 5deg;
    }
    50% {
        rotate: -5deg;
    }
    100% {
        rotate: 5deg;
    }
}

@keyframes wiggle {
    0% {
        rotate: 3deg;
    }
    12% {
        rotate: -3deg;
    }
    24% {
        rotate: 3deg;
    }
    36% {
        rotate: -3deg;
    }
    48% {
        rotate: 3deg;
    }
    60% {
        rotate: -3deg;
    }
    72% {
        rotate: 3deg;
    }
    84% {
        rotate: -3deg;
    }
    100% {
        rotate: 3deg;
    }
}

.gift:hover {
    width: calc(var(--gift-size) + 25px);
    height: calc(var(--gift-size) + 25px);
    
    transition: 200ms;
}

.gift > img {
    width: var(--gift-size);
    height: var(--gift-size);

    transition-duration: 200ms;

    &.moved{
        width: calc(var(--gift-size) + 25px);
        height: calc(var(--gift-size) + 25px);
    }
}

.gift:hover > img {
    width: calc(var(--gift-size) + 25px);
    height: calc(var(--gift-size) + 25px);
    
    transition: 200ms;
}

/* #endregion */

/* #region Gift Top and Base */

.gift-top {
    transform: translateY(1px);
}

.moved {
    animation-duration: 0.25s;
    animation-delay: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    &.gift-top {
        animation-name: up;
    }
    &.gift-base {
        animation-name: down;
    }
}

@media (max-width: 639px) {
    :root {
        --gift-distance: 75px;
    }
}
@media (min-width: 640px) {
    :root {
        --gift-distance: 100px;
    }
}
@media (min-width: 768px) {
    :root {
        --gift-distance: 125px;
    }
}
@media (min-width: 1024px) {
    :root {
        --gift-distance: 150px;
    }
}
@media (min-width: 1280px) {
    :root {
        --gift-distance: 175px;
    }
}

@keyframes up {
    0% {
        transform: translateY(1px);
    }
    100% {
        transform: translateY(calc(-1 * var(--gift-distance)));
    }
}

@keyframes down {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(var(--gift-distance));
    }
}

/* #endregion */

/* #region Gift Content */

.gift-content {
    width: 0;
    height: 0;

    opacity: 0;

    animation-name: none;

    &.open {
        animation-name: appear;
        animation-duration: 1s;
        animation-delay: 2s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
}

@media (max-width: 639px) {
    :root {
        --content-size: 75px;
    }
}
@media (min-width: 640px) {
    :root {
        --content-size: 100px;
    }
}
@media (min-width: 768px) {
    :root {
        --content-size: 125px;
    }
}
@media (min-width: 1024px) {
    :root {
        --content-size: 150px;
    }
}
@media (min-width: 1280px) {
    :root {
        --content-size: 175px;
    }
}

@keyframes appear {
    0% {
        width: 0;
        height: 0;
        opacity: 0;
    }
    50% {
        opacity: 100%;
    }
    100% {
        opacity: 100%;

        width: var(--content-size);
        height: var(--content-size);
    }
}

/* #endregion */

/* #region Giving */

@media (max-width: 639px) {
    :root {
        --hands-distance: 65px;
        --heart-distance: 55px;
    }
}
@media (min-width: 640px) {
    :root {
        --hands-distance: 90px;
        --heart-distance: 75px;
    }
}
@media (min-width: 768px) {
    :root {
        --hands-distance: 110px;
        --heart-distance: 90px;
    }
}
@media (min-width: 1024px) {
    :root {
        --hands-distance: 135px;
        --heart-distance: 110px;
    }
}
@media (min-width: 1280px) {
    :root {
        --hands-distance: 160px;
        --heart-distance: 130px;
    }
}

.giving {
    opacity: 0;

    
    &.hands {
        transform: translateY(var(--hands-distance));
    }
    &.heart {
        transform: translateY(var(--heart-distance));
    }

    &.open {
        animation-name: reveal;
        animation-duration: 1s;
        animation-delay: 4s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
}

/* #endregion */

/* #region Message */

@media (max-width: 639px) {
    :root {
        --message-distance: -53px;
    }
}
@media (min-width: 640px) {
    :root {
        --message-distance: -71px;
    }
}
@media (min-width: 768px) {
    :root {
        --message-distance: -89px;
    }
}
@media (min-width: 1024px) {
    :root {
        --message-distance: -107px;
    }
}
@media (min-width: 1280px) {
    :root {
        --message-distance: -125px;
    }
}

.message {
    opacity: 0;

    transform: translateY(var(--message-distance));

    &.open {
        animation-name: reveal;
        animation-duration: 1s;
        animation-delay: 5s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
}

@keyframes reveal {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 100%;
    }
}

/* #endregion */

</style>