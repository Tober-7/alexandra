<template>
	<div class="container baseDarkColor shadowBottom">
		<span class="container-child header">
			<div class="header-left">
				<img class="logo button" src="@/assets/pictures/logo.png" @click="setState('home')">
        <span class="text margin">|</span>
				<div class="header-categories">
          <span class="text small header-category" id="header-category--1">Narodeniny</span>
          <div class="header-categories-list" id="header-categories--1">
            <span class="text small cursor" @click="setState('bd-2023')">2023</span>
            <!--
            <hr>
            <span class="text small cursor">2024</span>
            -->
          </div>
          <!--
          <span class="text small header-category" id="header-category--2">Valentín</span>
          <div class="header-categories-list" id="header-categories--2">
            <span class="text small cursor">2023</span>
          </div>
          -->
				</div>
			</div>
			<span class="text small dark cursor button" @click="secret(0.5, $event)">najlepšia žena</span>
		</span>
	</div>

  <template v-if="state === 'bd-2023'">
    <bd-2023-screen/>
  </template>
  <template v-else>
    <home-screen @set-state="(state) => setState(state)"/>
  </template>
</template>

<script>
import HomeScreen from "@/plugins/lib@alexandra/alexandra-home/alexandra-home.vue";
import Bd2023Screen from "@/plugins/lib@alexandra/bd/alexandra-bd-2023/alexandra-bd-2023.vue";

export default {
  components: {
    HomeScreen,
    Bd2023Screen,
  },

  data() {
    return {
      state: "home",
    }
  },

	methods: {
    setState(state) {
      this.state = state;
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

/*#region Header*/

.logo{
  width: 25px;
  height: 25px;

  &.button{
    pointer-events: all;
    cursor: pointer;
  }
}

.header-left{
  display: flex;
  align-items: center;

  height: 100%;

  padding: 0;
  margin: 0;
}

.header-category{
  pointer-events: all;

  height: 100%;

  margin: 0 16px;
}

.header-categories{
  display: flex;
  align-items: center;

  height: 100%;
}

.header-categories-list{
  pointer-events: none;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  position: absolute;

  left: 0;
  top: 100%;

  width: 50px;
  height: auto;

  padding: 16px;

  opacity: 0;

  border: solid 3px rgba(0, 0, 0, 0.125);
  border-top: 0;
  border-radius: 0 0 15px 15px;
  background-color: var(--baseDarkColor);

  transition: var(--transitionLength);
}

.header-categories-list > *{
  pointer-events: none;
}

.header-categories-list:hover{
  pointer-events: all;

  opacity: 1;

  transition: var(--transitionLength);
}

.header-categories-list:hover > *{
  pointer-events: all;
}

#header-categories--1{
  transform: translate(162px, 0);
}

#header-categories--2{
  transform: translate(285px, 0);
}

#header-category--1:hover ~ #header-categories--1{
  pointer-events: all;

  opacity: 1;

  transition: var(--transitionLength);
}

#header-category--2:hover ~ #header-categories--2{
  pointer-events: all;

  opacity: 1;

  transition: var(--transitionLength);
}

/*#endregion*/

</style>