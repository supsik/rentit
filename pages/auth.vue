<template>
	<div class="auth-section">
		<header class="auth__header">
			<a class="auth__header-logo" href="/">RENT <span>IT</span></a>
			<a class="auth__header-support" href="#">Служба поддержки</a>
		</header>
		<div class="auth__content">
			<div class="auth__description">
				<h1>Сервис для учета и <span>автоматизации проката</span></h1>
				<p>Наведите порядок в делах, экономьте время и зарабатывайте больше денег</p>
			</div>
			<component
				class="auth-form"
				v-model:phone="phoneValue"
				:is="authSteps[currentStep]"
				:key="currentStep"
				@showError="showError"	
				@chooseStep="chooseStep"
			/>
		</div>
	</div>
</template>

<script setup>
const { $toast } = useNuxtApp()

const currentStep		= ref(0);
const phoneValue		= ref("");
const authSteps			= ref([
	markRaw(resolveComponent('AuthNumberForm')),
	markRaw(resolveComponent('AuthCode')),
])

const chooseStep = val => currentStep.value += val

const showError = error => {
	$toast['error'](error)
}
</script>

<style lang="scss" scoped>
.auth-section { height: 100vh }

.auth__header {
	width: 100%;
	padding: 33px 48.5px 0 65px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.auth__header-logo {
		color: #000;

		&,
		span {
			font-family: "Benzin-SemiBold";
			font-size: 20px;
			font-weight: 400;
		}

		span {
			position: relative;
			color: #0575e6;

			&::before {
				position: absolute;
				display: inline-block;
				width: 5px;
				height: 5px;
				bottom: 5px;
				left: -9px;
				content: "";
				background-color: #0575e6;
			}
		}
	}

	.auth__header-support {
		padding: 8.5px 30px;
		border-radius: 6px;
		background-color: $main-blue;
		color: #fff;
		font-family: "Golos-SemiBold";
		font-size: 13px;
	}
}

.auth-form {
	position: relative;
	right: 32px;
	top: -42px;
	width: 100%;
	max-width: 310px;
}

.auth__content {
	margin: auto;
	display: flex;
	max-width: 1280px;
	justify-content: space-between;
	align-items: center;
	padding: 42px 65px 0;
}

.auth__description {
	width: 100%;
	height: 503px;
	max-width: 460px;
	padding-inline: 25px 35px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-image: url("/img/dotted_bg.png");
	background-repeat: repeat;

	h1 {
		font-family: "Benzin-Bold";
		font-size: 28px;
		text-transform: uppercase;
		line-height: 36px;

		span {
			font-family: inherit;
			color: $main-blue;
		}
	}

	p {
		max-width: 260px;
		margin-top: 12px;
		font-family: "Golos-Medium";
		font-size: 16px;
	}
}

@media (max-width: $laptop) {
	.auth__header { padding: 20px 25px 0 40px }

	.auth__content { padding: 42px 25px 0 40px }

	.auth-form { right: 25px }

	.auth__description {
		width: 50%;

		h1 { font-size: 22px }
	}
}

@media (max-width: $tablet) {
	.auth-section {
		display: flex;
		flex-direction: column;
	}
	
	.auth__content {
		height: 100%;
		margin-top: 20px;
		flex-direction: column;
		justify-content: center;
		align-items: flex-start;
		gap: 50px;
		background-image: url('img/dotted_bg_tablet.png');
	}

	.auth__description {
		width: 100%;
		max-width: unset;
		height: unset;
		padding: 0;
		background-image: none;
		margin-top: -20px;

		h1 {
			margin-top: 0;
			font-size: clamp(1.25rem, 0.8922rem + 1.5267vw, 1.625rem);
		}

		p { max-width: 400px }
	}

	.auth-form {
		right: 0;
		top: 0;
	}
}

@media (max-width: $mobile) {
	.auth__header { padding: 17px 12px 0 27.5px }

	.auth__content {
		padding: 30px 33.5px 0 34.5px;
		justify-content: flex-start;
		gap: 30px;
	}

	.auth__description {
		margin-top: unset;

		h1 { line-height: 24px }

		p { max-width: 260px }
	}

	.auth-form {
	}
}
</style>