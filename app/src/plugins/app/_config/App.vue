<template>
    <alexandra-header v-if="isAuth"/>
    <router-view @set-is-auth="(value) => setIsAuth(value)"></router-view>
</template>

<script>
import AlexandraHeader from "@/plugins/app@alexandra/general/alexandra-header"

export default {
  components: {
    AlexandraHeader,
  },

  data() {
    return {
      isAuth: false,
    }
  },

  methods: {
    setIsAuth(value) {
      this.isAuth = value;
    },
  },
}
</script>

<style>

/*#region Fonts*/

@font-face{
  font-family: "Croissant-One";
  src: url(@/assets/fonts/Croissant_One/CroissantOne-Regular.ttf) format(truetype);
}

.text-font {
  font-family: "Croissant-One";
  text-shadow: 0 5px 5px rgba(0, 0, 0, 1);
}

/*#endregion*/

/*#region Variables*/

:root{
  --dark-200: #232323;
  --dark-300: #1F1F1F;
  --dark-400: #1B1B1B;
  --dark-500: #171717;
  --dark-600: #131313;
  --dark-700: #0F0F0F;
}

/*#endregion*/

/*#region Base*/

html {
  overflow-x: hidden;
  overflow-y: scroll;
}

html, body, #app{
  display: flex;
  flex-direction: column;

  max-width: 100%;
  height: 100%;

  transition: none;

  background-color: var(--dark-600);
}

header, body{
  margin: 0;
}

img, span {
  pointer-events: none; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

button {
  pointer-events: visible; 
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}

/*#endregion*/

/*#region Scrollbar*/

::-webkit-scrollbar {
  display: none;
}

@media (min-width: 640px) {
  ::-webkit-scrollbar {
    display: block;
  }
}

::-webkit-scrollbar {
  width: 14px;
  height: 0;
}

::-webkit-scrollbar-track {
  border-radius: 0;
  background: var(--dark-700);
}

::-webkit-scrollbar-thumb {
  border: 4px solid rgba(0, 0, 0, 0);  /* Transparent border together with `background-clip: padding-box` does the trick */
  border-radius: 15px;

  background: var(--dark-500) padding-box;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--dark-300) padding-box;
}

/*#endregion*/

/*#region Placeholder*/

::placeholder {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

:focus::placeholder {
  text-shadow: none;
}

/*#endregion*/

</style>
