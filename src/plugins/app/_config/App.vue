<template>
  <div></div>
  <router-view></router-view>
</template>

<script>

export default {
  
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
  --lightDarkColor: #282828;
  
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

    height: 24px;
  }
}

/*#endregion*/

/*#region Text*/

.text{
  cursor: default;

  padding: 0;
  margin: 0;

  color: var(--baseLightColor);

  font-family: "Croissant-One", sans-serif;
  font-size: 16px;
  letter-spacing: 1px;
  text-align: center;

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

  width: 100%;
  height: 100%;
}

.container-hearts-img{
  object-fit: contain;

  opacity: 0;

  z-index: -1;

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
  user-select: none;

  width: 25px;
  height: 25px;
}

.header-left{
  display: flex;
  align-items: center;

  padding: 0;
  margin: 0;
}

.header-buttons{
  display: flex;

  margin: 0 0 0 64px;
}

.header-button{
  margin: 0 16px;
}

/*#endregion*/

/*#region Section 1*/

.container-section-1{
  display: flex;
  justify-content: space-between;

  width: 100%;
}

.container-section-1-column{
  display: flex;

  &.between{
    flex-direction: column;
    justify-content: space-between;
  }
  &.text{
    justify-content: center;

    flex-wrap: wrap;

    margin: 0 64px;

    column-gap: 80px;
    row-gap: 16px;
  }
}

.container-section-1-img{
  pointer-events: none;

  object-fit: cover;
  
  width: 150px;
  height: 150px;

  border: solid 3px var(--baseDarkColor);

  border-radius: 25px;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.75);

  &:nth-child(1) {
    rotate: 5deg;
  }
  &:nth-child(2) {
    rotate: -7deg;
  }
  &:nth-child(3) {
    rotate: 4deg;
  }
}

/*#endregion*/

/*#region Section 2*/

.container-section-2{
  display: flex;
  justify-content: space-between;

  width: 100%;
}

.container-section-2-img{
  object-fit: cover;
  
  width: 150px;
  height: 150px;

  border: solid 3px var(--baseDarkColor);

  border-radius: 25px;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.75);

  &:nth-child(1) {
    rotate: 5deg;
  }
  &:nth-child(2) {
    rotate: -7deg;
  }
  &:nth-child(3) {
    rotate: 4deg;
  }
  &:nth-child(4) {
    rotate: -6deg;
  }
  &:nth-child(5) {
    rotate: 6deg;
  }
  &:nth-child(6) {
    rotate: -5deg;
  }
  &:nth-child(7) {
    rotate: 5deg;
  }
}

/*#endregion*/

/*#region Section 3*/

.container-section-3{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  flex-grow: 1;

  padding: 0 48px;
}

.container-section-3-img{
  object-fit: cover;
  
  width: 400px;
  height: 350px;

  margin: 50px 75px;

  border: solid 3px var(--baseDarkColor);

  border-radius: 25px;
  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.75);
}

/*#endregion*/

</style>
