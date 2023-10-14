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

<style scoped>

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