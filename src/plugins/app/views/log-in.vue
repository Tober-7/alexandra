<template>
	<div class="container-center">
		<div class="container-center card">
			<span class="text title">Si hoden vstúpiť?</span>
			<input class="input" type="password" placeholder="password" v-model="password" @keyup.enter="tryPassword">
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			password: ""
		}
	},

	methods: {
		tryPassword() {
			if (this.password == "petkojegod") this.goToRoute('Main');

			this.password = "";
		},

		goToRoute(s) {
      this.$router.push({ name: s})
    },
	}
}
</script>

<style scoped>

.container-center{
  display: flex;
	flex-direction: column;
  justify-content: center;
  align-items: center;	

	height: 100vh;

	&.card{
		justify-content: space-between;

		width: 400px;
		height: 150px;

		padding: 24px;

		background-color: var(--lightDarkColor);

		border: solid 3px var(--darkDarkColor);

		border-radius: 25px;
		box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.75);
	}
}

</style>