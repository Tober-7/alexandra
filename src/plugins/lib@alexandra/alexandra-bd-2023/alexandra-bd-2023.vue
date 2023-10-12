<template>
	<div class="container lightDarkColor shadowBottom">
		<span class="container-child column">
			<hr>
			<span class="text title">~ Alexandra Jankovičová ~</span>
			<span class="text small dark">aka Anakin Skywalker</span>
			<hr class="margin2">
			<span class="text">
				Nie je žiadnym tajomstvom, že Alexandra Jankovičová je proste úžasná osoba.<br>
				Ale ak vám to ešte nedošlo, dovoľte mi, aby som vám vysvetlil prečo.
			</span>
			<hr class="borderBottom">
		</span>
	</div>
	<div class="container baseDarkColor shadowBottom" id="Adjectives">
		<span class="container-child column">
			<hr>
			<span class="text title">je jednoducho...</span>
			<hr class="margin3">
			<div class="container-hearts">
				<img class="container-hearts-img" src="@/assets/pictures/heart.png">
				<img class="container-hearts-img" src="@/assets/pictures/heart.png">
				<img class="container-hearts-img" src="@/assets/pictures/heart.png">
			</div>
			<div class="container-section between">
				<div class="container-section-1-column between">
					<img class="container-section-1-img img-frame" src="@/assets/pictures/1.jpg">
					<img class="container-section-1-img img-frame" src="@/assets/pictures/2.jpg">
					<img class="container-section-1-img img-frame" src="@/assets/pictures/3.jpg">
				</div>
				<div class="container-section-1-column text">
					<span class="text dark" v-for="adjective in adjectives" :key="adjective">{{ adjective }}</span>
				</div>
				<div class="container-section-1-column between">
					<img class="container-section-1-img img-frame" src="@/assets/pictures/4.jpg">
					<img class="container-section-1-img img-frame" src="@/assets/pictures/5.jpg">
					<img class="container-section-1-img img-frame" src="@/assets/pictures/6.jpg">
				</div>
			</div>
			<hr class="margin2">
		</span>
	</div>
	<div class="container lightDarkColor shadowBottom" id="Smile">
		<span class="container-child column">
			<hr>
			<span class="text title">~ Ôsmy div sveta ~</span>
			<hr class="borderBottom">
			<span class="text dark">
				Ak by divov sveta nebolo 7, ale 8, ten ôsmy by určite bol úsmev Alexandri Jankovičovej.<br>
				Tento úsmev je známy pre svoje liečivé účinky v oblasti psychológie a zdravotníctva. 
				Ak budete mať šťastie, tak niekedy možno uvidíte tento objektívne nádherný úsmev naživo.
			</span>
			<hr class="margin3">
			<div class="container-section between">
				<img class="container-section-2-img img-frame" src="@/assets/pictures/7.jpg">
				<img class="container-section-2-img img-frame" src="@/assets/pictures/8.jpg">
				<img class="container-section-2-img img-frame" src="@/assets/pictures/9.jpg">
				<img class="container-section-2-img img-frame" src="@/assets/pictures/10.jpg">
				<img class="container-section-2-img img-frame" src="@/assets/pictures/11.jpg">
				<img class="container-section-2-img img-frame" src="@/assets/pictures/12.jpg">
				<img class="container-section-2-img img-frame" src="@/assets/pictures/13.jpg">
			</div>
			<hr class="margin2">
		</span>
	</div>
	<div class="container baseDarkColor shadowBottom" id="Builder">
		<span class="container-child between">
			<span class="container-section column padding">
				<span class="text title">~ Alexandra the builder ~</span>
				<hr class="borderBottom">
				<span class="text dark">
					Mali ste už niekedy blbý deň? Zlú náladu? Pravdepodobne áno. 
					Našťastie je tu pre nás Alexandra the builder, ktorá opraví hocičo, vrátane vašej nálady. Stačí byť v jej blízkosti a vaša nálada sa rapídne zlepší.
					Aj ak je váš problém hlbší ako zlá nálada, stačí sa ozvať Alexandre. 
					Keďže vyštudovala vysokú školu života a empatie, určite vám dobre poradí a budete sa cítiť lepšie. 
					Odporúča 9/10 terapeutov.
				</span>
			</span>
			<img class="container-section-3-img img-frame" src="@/assets/pictures/14.jpg">
		</span>
	</div>
	<div class="container lightDarkColor shadowBottom" id="Eyes">
		<span class="container-child column">
			<hr>
			<span class="text title">~ Krásne očká ~</span>
			<hr class="borderBottom">
			<span class="text dark">
				Niektorí ľudia roky študujú na vysokých školách, aby sa naučili profesionálne fotiť. 
				Alexandra sa ale s touto zručnosťou narodila a od vtedy ju využíva, aby zachytila perfekciu svojich očí. Čo je ale hlavné pri jej tvorbe je určite uhol. 
				Ako môžete vidieť, pod správnym uhlom môže krása jej očí nádherne vyniknúť, Alexandra vám to určite sama potvrdí. 
				Ale myslím si, že obrázky hovoria sami za seba.
			</span>
			<hr class="margin3">
			<span class="container-section between">
				<img class="container-section-4-img img-frame" src="@/assets/pictures/15.jpg">
				<img class="container-section-4-img img-frame" src="@/assets/pictures/16.jpg">
				<img class="container-section-4-img img-frame" src="@/assets/pictures/17.jpg">
				<img class="container-section-4-img img-frame" src="@/assets/pictures/18.jpg">
				<img class="container-section-4-img img-frame" src="@/assets/pictures/19.jpeg">
				<img class="container-section-4-img img-frame" src="@/assets/pictures/20.jpg">
				<img class="container-section-4-img img-frame" src="@/assets/pictures/21.jpg">
				<img class="container-section-4-img img-frame" src="@/assets/pictures/22.jpg">
			</span>
			<hr class="margin2">
		</span>
	</div>
	<div class="container baseDarkColor shadowBottom" id="Crazy">
		<span class="container-child between">
			<img class="container-section-5-img img-frame" src="@/assets/pictures/24.jpg">
			<img class="container-section-5-img img-frame" src="@/assets/pictures/23.jpg">
			<img class="container-section-5-img img-frame" src="@/assets/pictures/25.jpg">
			<span class="container-section column padding">
				<span class="text title">~ Krejzy Alexandra~</span>
			</span>
		</span>
	</div>
	<div class="container lightDarkColor shadowBottom" id="Stylish">
		<span class="container-child column">
			<hr>
			<span class="text title">~ Stylish Alexandra ~</span>
			<hr class="borderBottom">
			<span class="text dark">
				Ako svetoznáma modelka, Alexandra vie ako sa správne obliecť. 
				Pomocou svojich módnych schopností sa dokáže pripraviť na hocijakú príležitosť. 
				Mnohí odborníci ju považujú za priekopníčku módy 21. storočia. 
				Ale presvedčte sa sami...
			</span>
			<hr class="margin3">
			<span class="container-section between">
				<span class="container-section-6-card">
					<img class="container-section-6-img img-frame" src="@/assets/pictures/26.jpg">
					<span class="text small">Alexandra v divadle</span>
				</span>
				<span class="container-section-6-card">
					<span class="text small">Bread</span>
					<img class="container-section-6-img img-frame" src="@/assets/pictures/27.jpg">
				</span>
				<span class="container-section-6-card">
					<img class="container-section-6-img img-frame" src="@/assets/pictures/28.jpg">
					<span class="text small">Alexandra v roku 1900</span>
				</span>
				<span class="container-section-6-card">
					<span class="text small">Alexandra na stanovačke</span>
					<img class="container-section-6-img img-frame" src="@/assets/pictures/29.jpg">
				</span>
				<span class="container-section-6-card">
					<img class="container-section-6-img img-frame" src="@/assets/pictures/30.jpg">
					<span class="text small">Alexandra ako Barbie</span>
				</span>
			</span>
			<hr class="margin2">
		</span>
	</div>
	<div class="container baseDarkColor shadowBottom" id="Birthday">
		<span class="container-child column">
			<hr>
			<span class="text title">Všetko najlepšie!</span>
			<hr class="borderBottom">
			<span class="text">
				Moja milá Saška,<br>
				prajem ti len to najlepšie v živote. Nech ostaneš taká skvelá akú ťa poznám a akú ťa mám rád.<br>
				Nech sa ti darí vo všetkom čomu sa venuješ a nech nikdy nezabudneš, ako moc stojíš za to a ako moc si ťa vážim.<br>
				Týmto darčekom som ti chcel ukázať, čo všetko na tebe ľúbim, aj keď to zďaleka nie je všetko.<br>
				Tak dúfam, že na to naozaj nikdy nezabudneš, všetko najlepšie ešte raz, cmuk.
			</span>
			<hr class="margin2">
			<span class="text">
				Ľúbim ťa!
			</span>
			<hr class="margin3">
			<span class="text small">
				A ak by ťa to náhodou zaujímalo, tak s touto stránkou som ešte určite neskončil ;)
			</span>
			<hr class="margin3">
			<img class="container-section-7-img" src="@/assets/pictures/heart.png">
			<hr>
		</span>
	</div>
	<hr>
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
					"akademická zbraň",
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
					"cute",
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
					"skvelá",
					"cmuk",
					"dejepisná expertka",
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
	}
</script>

<style scoped>

/*#region Section 1*/

.container-section-1-column{
  display: flex;

  &.between{
    flex-direction: column;
    justify-content: space-between;

		max-width: 150px;
		width: 100%;
  }
  &.text{
    justify-content: center;

    flex-wrap: wrap;

		padding: 0 64px;
    margin: 0 64px;

    column-gap: 80px;
    row-gap: 16px;
  }
}

.container-section-1-img{
	min-width: 75px;
  max-width: 150px;
	min-height: 50px;
  max-height: 150px;
	width: 100%;
	height: 100%;

	margin: 24px 0;

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

.container-section-2-img{
	min-width: 50px;
  max-width: 140px;
	min-height: 140px;
  max-height: 140px;
	width: 100%;
	height: 100%;

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
	&:nth-child(8) {
    rotate: -4deg;
  }
}

/*#endregion*/

/*#region Section 3*/

.container-section-3-img{
	min-width: 200px;
  max-width: 300px;
	min-height: 300px;

	width: 100%;
	height: 100%;

  margin: 50px 75px;
}

/*#endregion*/

/*#region Section 4*/

.container-section-4-img{
	min-width: 50px;
  max-width: 140px;
	min-height: 140px;
  max-height: 140px;
	width: 100%;
	height: 100%;

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

/*#region Section 5*/

.container-section-5-img{
	min-width: 300px;
  max-width: 300px;
	min-height: 300px;
	max-height: 300px;
	width: 100%;
	height: 100%;

  margin: 50px 75px;

	&:nth-child(2){
		position: absolute;

		min-width: 175px;
		max-width: 175px;
		min-height: 250px;
		max-height: 250px;
		width: 100%;
		height: 100%;

		margin: 0;

		transform: translate(325px, 50px);
	}
	&:nth-child(3){
		position: absolute;

		min-width: 100px;
		max-width: 100px;
		min-height: 150px;
		max-height: 150px;
		width: 100%;
		height: 100%;

		margin: 0;

		transform: translate(425px, -100px);
	}
}

/*#endregion*/

/*#region Section 6*/

.container-section-6-card{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	height: 450px;

	margin: 0 32px;
}

.container-section-6-img{
	min-width: 25px;
  max-width: 200px;
	min-height: 400px;
	max-height: 400px;
	width: 100%;
	height: 100%;

  margin: 0 24px;
}

/*#endregion*/

/*#region Section 7*/

.container-section-7-img{
	object-fit: contain;

	min-width: 200px;
	max-width: 300px;
	min-height: 200px;
	max-height: 300px;
	width: 100%;
	height: 100%;

	opacity: 0.25;

	filter: drop-shadow(0 0 7px rgba(0, 0, 0, 1));
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

</style>