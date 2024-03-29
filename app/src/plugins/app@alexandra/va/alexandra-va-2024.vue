<template>
    <div class="flex bg-dark-600">
        <div class="flex justify-start items-center relative w-full px-[24px] sm:px-[32px] md:px-[34px] lg:px-[36px] xl:px-[38px] bg-dark-500 shadow-bottom z-[99] rounded-b-2xl border-b border-dark-200">
            <span class="py-3 text-font text-light-500 text-xs sm:text-sm md:text-[12px] lg:text-[14px] xl:text-2xl">{{ $t("home.valentine") }} - 2024</span>
        </div>
    </div>
    <div class="flex flex-col justify-center items-center w-full h-full">
        <div ref="container" class="pointer-events-none absolute w-[80%] h-[60%]"></div>

        <template v-if="isSwitch">
            <span class="text-font text-center text-light-500 text-[14px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-4xl transition" :class="[isFinal ? 'opacity-100' : 'opacity-0']">{{ $t("va2024.final") }}</span>
        </template>

        <template v-else>
            <span ref="title" class="text-font text-center text-light-500 text-[16px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-4xl" :class="[clicked ? 'opacity-0' : 'opacity-100']">{{ $t("va2024.question") }}</span>

            <hr ref="line" class="my-4 sm:my-5 md:my-7 lg:my-9 xl:my-11 w-[280px] sm:w-[480px] md:w-[560px] lg:w-[640px] xl:w-[720px] border-l border-grey-1000" :class="[clicked ? 'opacity-0' : 'opacity-100']">

            <div class="flex justify-center items-center w-full">
                <button ref="yes_button" @click="finish()" class="px-[10px] sm:px-[14px] md:px-[16px] lg:px-[18px] xl:px-5 py-[6px] sm:py-[9px] md:py-[10px] lg:py-[11px] xl:py-3 bg-dark-400 rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[11px] xl:rounded-xl border border-grey-1000 text-font text-center text-light-500 text-[8px] sm:text-[12px] md:text-base lg:text-lg xl:text-xl sm:hover:text-red-600 transition" :class="[clicked ? 'opacity-0' : 'opacity-100']">{{ $t("va2024.yes") }}</button>
                <hr class="mx-2 sm:mx-3 md:mx-4 lg:mx-5 xl:mx-6">
                <button ref="hidden_button" class="px-[10px] sm:px-[14px] md:px-[16px] lg:px-[18px] xl:px-5 py-[6px] sm:py-[9px] md:py-[10px] lg:py-[11px] xl:py-3 bg-dark-400 rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[11px] xl:rounded-xl border border-grey-1000 text-font text-center text-light-500 text-[8px] sm:text-[12px] md:text-base lg:text-lg xl:text-xl opacity-0 pointer-events-none">{{ $t("va2024.no") }}</button>
            </div>

            <button ref="moving_button" @click="click" @mouseover="hover" class="absolute px-[10px] sm:px-[14px] md:px-[16px] lg:px-[18px] xl:px-5 py-[6px] sm:py-[9px] md:py-[10px] lg:py-[11px] xl:py-3 bg-dark-400 rounded-lg sm:rounded-[9px] md:rounded-[10px] lg:rounded-[11px] xl:rounded-xl border border-grey-1000 text-font text-center text-light-500 text-[8px] sm:text-[12px] md:text-base lg:text-lg xl:text-xl cursor-default opacity-0 transition">{{ $t("va2024.no") }}</button>
        </template>
    </div>
    <canvas ref="confettiCanvas" class="pointer-events-none absolute w-full h-full"></canvas>
</template>

<script>
import confetti from "canvas-confetti"    

export default {
    emits: ['setIsAuth'],

    created() {
        window.addEventListener("resize", this.onResize);

        this.checkScreenSize();
    },
    unmounted() {
        window.removeEventListener("resize", this.onResize);
    },
    
    mounted() {
        this.$emit('setIsAuth', true);
    
        this.confettiCanvas = this.$refs["confettiCanvas"];

        this.container = this.$refs['container'];

        this.title = this.$refs['title'];
        this.line = this.$refs['line'];
        this.yes_button = this.$refs['yes_button'];
    
        this.hidden_button = this.$refs['hidden_button'];
        this.moving_button = this.$refs['moving_button'];

        this.setUpMovingButton();
    },
    
    data() {
        return {
            isSmallScreen: false,

            clicked: false,
            isSwitch: false,
            isFinal: false,

            confettiCanvas: null,

            button_speed: 0.01,

            container: null,

            title: null,
            line: null,
            yes_button: null,

            hidden_button: null,
            moving_button: null,

            currentTimeout: null,
        }
    },

    methods: {
        onResize() {
            this.checkScreenSize();
            this.setUpMovingButton();
        },
        checkScreenSize() {
            this.isSmallScreen = window.innerWidth < 640;
        },

        finish() {
            if (this.clicked) return;

            this.clicked = true;

            this.moving_button.style.opacity = 0;

            const myConfetti = confetti.create(this.confettiCanvas, {
                resize: true,
                useWorker: true
            });

            setTimeout(function() {
                this.isSwitch = true;
            }.bind(this), 0.5 * 1000);
            
            setTimeout(function() {
                this.isFinal = true;
            }.bind(this), 0.75 * 1000);

            setTimeout(function() {
                myConfetti({
                    particleCount: 900,
                    startVelocity: 150,
                    spread: 100,
                    origin: {
                        y: 1.75
                    },
                    shapes: [confetti.shapeFromText({ text: "❤️", scalar: 2 })],
                    gravity: 0.5,
                    ticks: 500,
                });
            }.bind(this), 1 * 1000);
        },

        setUpMovingButton() {
            if (!this.equalPos(this.moving_button, this.hidden_button.getBoundingClientRect())) {
                this.moving_button.style.opacity = 0;
                
                this.place(this.moving_button, this.hidden_button.getBoundingClientRect());
                
                setTimeout(function() {
                    this.setUpMovingButton();
                }.bind(this), 100);
            } else {
                this.moving_button.style.opacity = 1;
            }
        },
        
        equalPos(el, target) {
            return el.getBoundingClientRect().x == target.x && el.getBoundingClientRect().y == target.y
        },

        getRandomPosInElement(el) {
            const pos = el.getBoundingClientRect();

            return {
                x: pos.left + (Math.random() * (pos.right - pos.left)),
                y: pos.top + (Math.random() * (pos.bottom - pos.top))
            };
        },

        isOverlapping(el, target) {
            const el_pos = el.getBoundingClientRect();
            const target_pos = target.getBoundingClientRect();

            return !(
                el_pos.top > target_pos.bottom ||
                el_pos.right < target_pos.left ||
                el_pos.bottom < target_pos.top ||
                el_pos.left > target_pos.right
            );
        },

        place(el, target) {
            el.style.left = target.x + 'px';
            el.style.top = target.y + 'px';
        },

        click(e) {
            if (this.isSmallScreen) this.move(e);
        },
        hover(e) {
            if (!this.isSmallScreen) this.move(e);
        },
        move(e) {
            if (this.currentTimeout) {
                clearTimeout(this.currentTimeout);
                this.currentTimeout = null;
            }

            e.target.style.opacity = 0;

            const oldPos = e.target.getBoundingClientRect();

            this.place(e.target, this.getRandomPosInElement(this.container));

            if (this.isOverlapping(e.target, this.title) || this.isOverlapping(e.target, this.line) || this.isOverlapping(e.target, this.yes_button || this.isOverlapping(e.target, oldPos))) {
                this.place(e.target, oldPos);

                this.move(e)
            } else {
                const newPos = e.target.getBoundingClientRect();
                
                this.place(e.target, oldPos);
                
                e.target.style.opacity = 1;

                this.moveTowards(e.target, newPos);
            }
        },

        moveTowards(el, target) {
            const left = parseInt(window.getComputedStyle(el, null).getPropertyValue('left'), 10);
            const top = parseInt(window.getComputedStyle(el, null).getPropertyValue('top'), 10);

            const config = {
                left: left,
                top: top,
                dx: left - target.x,
                dy: top - target.y,
                i: 1,
                count: 20,
                delay: 1
            };
            
            this.loop(el, target, config);
        },

        loop(el, target, config) {
            if (config.i >= config.count) return;

            config.i++;

            el.style.left = (config.left - (config.dx * config.i / config.count)).toFixed(0) + 'px';
            el.style.top = (config.top - (config.dy * config.i / config.count)).toFixed(0) + 'px';

            this.currentTimeout = setTimeout(function() {
                this.loop(el, target, config);
            }.bind(this), config.delay);
        }
    }
}
</script>