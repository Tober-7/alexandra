<template>
	<div class="container baseDarkColor shadowBottom" style="z-index: 3;">
		<span class="container-child header">
			<div class="header-left">
				<img class="logo" src="@/assets/pictures/logo.png">
				<div class="header-buttons">
					<span class="text small button header-button" @click="scroll('Intro')">Intro</span>
					<span class="text small">|</span>
					<span class="text small button header-button" @click="scroll('Adjectives')">Vlastnosti</span>
					<span class="text small">|</span>
					<span class="text small button header-button" @click="scroll('Smile')">Ôsmy div sveta</span>
					<span class="text small">|</span>
					<span class="text small button header-button" @click="scroll('Builder')">Alexandra the builder</span>
					<span class="text small">|</span>
				</div>
			</div>
			<span class="text small dark button" @click="secret(0.5, $event)">najlepšia žena</span>
		</span>
	</div>
	<div class="container lightDarkColor shadowBottom" style="z-index: 2;" ref="Intro">
		<span class="container-child column">
			<hr>
			<span class="text title">~ Alexandra Jankovičová ~</span>
			<span class="text small dark">aka Anakin Skywalker</span>
			<hr class="margin2">
			<span class="text">
				Nie je žiadnym tajomstvom, že Alexandra Jankovičová je proste úžasná osoba.<br>
				Ale ak vám to ale ešte nedošlo, dovoľte mi, aby som vám vysvetlil prečo.
			</span>
			<hr class="borderBottom">
		</span>
	</div>
	<div class="container baseDarkColor shadowBottom" style="z-index: 1;" ref="Adjectives">
		<span class="container-child column">
			<hr>
			<span class="text title">je jednoducho...</span>
			<hr class="margin3">
			<div class="container-hearts">
				<img class="container-hearts-img" src="@/assets/pictures/heart.png">
				<img class="container-hearts-img" src="@/assets/pictures/heart.png">
				<img class="container-hearts-img" src="@/assets/pictures/heart.png">
			</div>
			<div class="container-section-1">
				<div class="container-section-1-column between">
					<img class="container-section-1-img" src="@/assets/pictures/1.jpg">
					<img class="container-section-1-img" src="@/assets/pictures/2.jpg">
					<img class="container-section-1-img" src="@/assets/pictures/3.jpg">
				</div>
				<div class="container-section-1-column text">
					<span class="text dark" v-for="adjective in adjectives" :key="adjective">{{ adjective }}</span>
				</div>
				<div class="container-section-1-column between">
					<img class="container-section-1-img" src="@/assets/pictures/4.jpg">
					<img class="container-section-1-img" src="@/assets/pictures/5.jpg">
					<img class="container-section-1-img" src="@/assets/pictures/6.jpg">
				</div>
			</div>
			<hr class="margin3">
		</span>
	</div>
	<div class="container lightDarkColor shadowBottom" ref="Smile">
		<span class="container-child column">
			<hr class="margin2">
			<span class="text title">~ Ôsmy div sveta ~</span>
			<hr class="borderBottom">
			<span class="text dark">
				Ak by divov sveta nebolo 7, ale 8, ten ôsmy by určite bol úsmev Alexandri Jankovičovej.<br>
				Tento úsmev je známy pre svoje liečivé účinky v oblasti psychológie a zdravotníctva.<br>
				Objektívne nádherný úsmev.
			</span>
			<hr class="margin3">
			<div class="container-section-2">
				<img class="container-section-2-img" src="@/assets/pictures/7.jpg">
				<img class="container-section-2-img" src="@/assets/pictures/8.jpg">
				<img class="container-section-2-img" src="@/assets/pictures/9.jpg">
				<img class="container-section-2-img" src="@/assets/pictures/10.jpg">
				<img class="container-section-2-img" src="@/assets/pictures/11.jpg">
				<img class="container-section-2-img" src="@/assets/pictures/12.jpg">
				<img class="container-section-2-img" src="@/assets/pictures/13.jpg">
			</div>
		</span>
		<hr class="margin3">
	</div>
	<div class="container baseDarkColor shadowBottom" ref="Builder">
		<span class="container-child between">
			<span class="container-section-3">
				<span class="text title">~ Alexandra the builder ~</span>
				<hr class="borderBottom">
				<span class="text dark">
					Mali ste už niekedy blbý deň? Zlú náladu? Pravdepodobne áno.<br>
					Našťastie je tu pre nás Alexandra the builder, ktorá opraví hocičo, vrátane vašej nálady. Stačí byť v jej blízkosti a vaša nálada sa rapídne	dne zlepší.
					Ak je váš problém hlbší ako zlá nálada, stačí sa ozvať Alexandre. Keďže vyštudovala vysokú školu života a empatie, určite vám dobre poradí a budete sa cítiť lepšie.<br>
					Odporúča 10/10 terapeutov.
				</span>
			</span>
			<img class="container-section-3-img" src="@/assets/pictures/14.jpg">
		</span>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				adjectives: [
					"rozumná",
					"krásna",
					"inteligentná",
					"humorná",
					"academic weapon",
					"slay",
					"trpezlivá",
					"prívetivá",
					"zlatučká",
					"spisovateľka",
					"nádherná",
					"fancy",
					"empatická",
					"baby girl",
					"kultúrne založená",
					"goofy",
					"pobožná",
					"validná",
					"skromná",
					"turistka",
					"sebavedomá",
					"stylish",
					"baletka",
					"verná",
					"cute as hell",
					"slušná",
					"sympatická",
					"silly",
					"vzdelaná",
					"vzorná",
					"quirky",
					"nenáročná",
					"samostatná",
					"smash",
					"oddaná",
					"lovely",
					"vychovaná",
					"fashionable",
					"gorgeous",
					"stunning",
					"pozorná",
					"úžasná",
					"pôvabná",
					"múdra",
					"ohľaduplná",
					"zodpovedná",
					"vyspelá",
					"cool",
					"small & petite",
					"zásadová",
					"epická",
					"vtipná",
					"škorpión",
					"spanilá",
					"sexy ;)",
					"ideálna",
					"skvelá",
					"cmuk",
					"dejepisný expert",
					"fešná",
					"úprimná",
					"zaujímavá",
					"dream girlfriend",
					"fantastická",
					"dreamy",
					"gamer girl",
					"magická",
					"krejzy",
					"atraktívna",
					"švárna dievčina",
					"mentally stable",
					"dobrá osoba",
					"slejózna",
					"čistá fantázia",
					"ohromujúca",
					"prekrásna",
					"veľkolepá",
					"spevácky nadaná",
					"prenádherná",
					"čarovná",
					"milujúca",
					"proste perfektná",
				],
			}
		},

		methods: {
			scroll(target) {	
				this.$refs[target].scrollIntoView({ behavior: 'smooth' });
			},
			secret(timeout, event) {
				event.target.textContent = "láskujem ťa <3"
				setTimeout(function () {
					event.target.textContent = "najlepšia žena"
				}, timeout * 1000);
			},
		}
	}
</script>