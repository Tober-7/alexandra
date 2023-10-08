<template>
  <div class="container baseDarkColor shadowBottom">
		<span class="container-child header">
			<div class="header-left">
				<img class="logo" src="@/assets/pictures/logo.png">
				<div class="header-buttons">
          <span class="text margin">|</span>
          <span class="text small header-button" id="header-button--categories">Kategórie</span>
          <div class="header-buttons hover">
            <span class="text small button" @click="scroll('Adjectives')">Vlastnosti</span>
            <hr>
            <span class="text small button" @click="scroll('Smile')">Ôsmy div sveta</span>
            <hr>
            <span class="text small button" @click="scroll('Builder')">Alexandra the builder</span>
            <hr>
            <span class="text small button" @click="scroll('Eyes')">Krásne očká</span>
            <hr>
            <span class="text small button" @click="scroll('Crazy')">Krejzy</span>
            <hr>
            <span class="text small button" @click="scroll('Stylish')">Stylish</span>
            <hr>
            <span class="text small button" @click="scroll('Birthday')">Všetko najlepšie!</span>
          </div>
				</div>
			</div>
			<span class="text small dark button" @click="secret(0.5, $event)">najlepšia žena</span>
		</span>
	</div>
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    scroll(target) {
      document.getElementById(target).scrollIntoView({ behavior: 'smooth' });
    },
    secret(timeout, event) {
      event.target.textContent = "láskujem ťa <3"
      setTimeout(function () {
        event.target.textContent = "najlepšia žena"
      }, timeout * 1000);
    },
  },
}

</script>

<style>

/*#region Fonts*/

@font-face{
  font-family: "Croissant-One";
  src: url(@/assets/Croissant_One/CroissantOne-Regular.ttf) format(truetype);
}

/*#endregion*/

/*#region Variables*/

:root{
  --baseDarkColor: #202020;
  --darkDarkColor: #181818;
  --lightDarkColor: #242424;
  
  --baseLightColor: #D0D0D0;
  --darkLightColor: #E0E0E0;

  --midColor: #808080;
  --darkMidColor: #606060;

  --baseRed: #FF0000;

  --transitionLength: 0.4s;

  --heartsAnimLength: 6s;
  --heartsAnimDelay: 2s;
}

/*#endregion*/

/*#region Type Selectors*/

html, body{
  max-width: 100%;
  overflow-x: hidden;
  overflow: visible;

  transition: none;

  background-color: var(--baseDarkColor);
}

header, body{
  margin: 0;
}

::-webkit-scrollbar {
  width: 14px;
  height: 0;
}

::-webkit-scrollbar-track {
  border-radius: 0;
  background: var(--darkDarkColor);
}

::-webkit-scrollbar-thumb {
  border: 4px solid rgba(0, 0, 0, 0);  /* Transparent border together with `background-clip: padding-box` does the trick */
  border-radius: 15px;

  background: var(--lightDarkColor) padding-box;
}

hr{
  display: flex;
  
  width: 100%;

  margin: 8px 0;

  border: none;

  &.margin2{
    margin: 16px 0;
  }
  &.margin3{
    margin: 24px 0;
  }

  &.borderBottom{
    margin: 32px 0;
    border-bottom: solid 1px var(--midColor);
  }
}

img, span {
  pointer-events: none; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

/*#endregion*/

/*#region General*/

.container{
  padding: 0;
  margin: 0;

  &.baseDarkColor{
    background-color: var(--baseDarkColor);
  }
  &.lightDarkColor{
    background-color: var(--lightDarkColor);
  }

  &.shadowBottom{
    position: relative;
  
    box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.75);
  }

  &:nth-child(1){
    z-index: 100;
  }
  &:nth-child(2){
    z-index: 99;
  }
  &:nth-child(3){
    z-index: 98;
  }
  &:nth-child(4){
    z-index: 97;
  }
  &:nth-child(5){
    z-index: 96;
  }
  &:nth-child(6){
    z-index: 95;
  }
  &:nth-child(7){
    z-index: 94;
  }
  &:nth-child(8){
    z-index: 93;
  }
}

.container-child{
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 474px;
  max-width: calc(100vw - 150px);

  padding: 16px 12px;
  margin: auto;

  &.column{
    flex-direction: column;
  }

  &.between{
    justify-content: space-between;
  }

  &.header{
    justify-content: space-between;

    height: 56px;

    padding: 0 12px;
  }
}

.container-section{
  display: flex;

  width: 100%;

  &.between{
    justify-content: space-between;
  }

  &.column{
    flex-direction: column;
  }

  &.padding{
    padding: 0 48px;
  }
}

.img-frame{
  object-fit: cover;

  border: solid 3px var(--baseDarkColor);

  border-radius: 25px;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.75);
}

/*#endregion*/

/*#region Text*/

.text{
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: default;

  padding: 0;
  margin: 0;

  color: var(--baseLightColor);

  font-family: "Croissant-One", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;

  text-shadow: 0 5px 5px rgba(0, 0, 0, 1);

  transition: var(--transitionLength);

  &.small{
    font-size: 12px;
  }
  &.title{
    font-size: 40px;
  }

  &.dark{
    color: var(--darkMidColor);
  }

  &.button{
    pointer-events: all;
    cursor: pointer;
  }

  &.margin{
    margin: 0 16px 0 32px;
  }
}

.text:hover{
  &.button{
    color: var(--baseRed);
  }
}

/*#endregion*/

/*#region Hearts*/

.container-hearts{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: absolute;

  width: 0;
  height: 100%;
}

.container-hearts-img{
  object-fit: contain;

  opacity: 0;

  animation: hearts infinite var(--heartsAnimLength);

  &:nth-child(1){
    width: 175px;
    height: 175px;

    margin: 128px 0 0 125px;

    rotate: 15deg;

    animation-delay: var(--heartsAnimDelay);
  }
  &:nth-child(2){
    width: 200px;
    height: 200px;

    margin: 0 225px 0 0;
    
    rotate: -10deg;

    animation-delay: 0s;
  }
  &:nth-child(3){
    width: 175px;
    height: 175px;

    margin: 0 0 0 175px;
    
    rotate: 25deg;

    animation-delay: calc(var(--heartsAnimDelay) * 2);
  }
}

@keyframes hearts{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.1;
  }
  100%{
    opacity: 0;
  }
}

/*#endregion*/

/*#region Header*/

.logo{
  width: 25px;
  height: 25px;
}

.header-left{
  display: flex;
  align-items: center;

  height: 100%;

  padding: 0;
  margin: 0;
}

.header-buttons{
  display: flex;
  align-items: center;

  height: 100%;

  &.hover{
    pointer-events: none;

    display: flex;
    flex-direction: column;
    align-items: start;
    
    position: absolute;

    left: 0;
    top: 100%;

    height: auto;

    padding: 16px;

    opacity: 0;

    border: solid 3px rgba(0, 0, 0, 0.125);
    border-top: 0;
    border-radius: 0 0 15px 15px;
    background-color: var(--baseDarkColor);

    transform: translate(145px, 0);

    transition: var(--transitionLength);
  }
}

.header-buttons.hover > *{
  pointer-events: none;
}

.header-buttons.hover:hover{
  pointer-events: all;

  opacity: 1;

  transition: var(--transitionLength);
}

.header-buttons.hover:hover > *{
  pointer-events: all;
}

.header-button{
  pointer-events: all;

  height: 100%;

  margin: 0 16px;
}

#header-button--categories:hover ~ .header-buttons.hover{
  pointer-events: all;

  opacity: 1;

  transition: var(--transitionLength);
}

/*#endregion*/

</style>
