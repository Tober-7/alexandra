<template>
	<div class="container lightDarkColor shadowBottom">
		<span class="container-child column">
			<hr>
			<span class="text large">Domovská stránka</span>
			<hr>
		</span>
	</div>
    <div class="container baseDarkColor">
		<span class="container-child column">
			<hr class="margin3">
			<span class="text title2">~ Alexandra Jankovičová ~</span>
			<span class="text dark">aka Anakin Skywalker</span>
			<hr class="margin3">
			<span class="text large">
				Nie je žiadnym tajomstvom, že Alexandra Jankovičová je proste úžasná osoba.<br>
				Ale ak vám to ešte nedošlo, dovoľte mi, aby som vám vysvetlil prečo...
			</span>
      <hr class="margin2">
      <hr class="borderBottom">
			<hr class="margin3">
			<div class="bd-2023 img-frame" @click="$emit('setState', 'bd-2023')">
				<img class="bd-2023-img button" src="@/assets/pictures/4.jpg">
				<span class="text title cursor button margin2">Narodeniny 2023</span>
			</div>
			<hr class="margin3">
		</span>
	</div>
</template>

<script>
export default {
	emits: ["setState"],
}
</script>

<style>
/*#region Bd2023*/

.bd-2023{
	display: flex;
}

.bd-2023-img{
	min-width: 175px;
  max-width: 250px;
	min-height: 175px;
  max-height: 250px;
	width: 100%;
	height: 100%;

	border-radius: 25px;

	&.button{
    pointer-events: all;
    cursor: pointer;
  }
}

/*#endregion*/
</style>