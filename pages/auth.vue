<template>
	<div>
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
				@checkValidate="checkValidate"	
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

const checkValidate = () => {
	const phone = `7${phoneValue.value.replace(/[\s-]/g, '')}`

	phone.length < 11 ?
		$toast['error']('Введён некорректный номер телефона') :
		chooseStep(1)
}
</script>

<style lang="scss" scoped>
.auth__header {
	width: 100%;
	padding: 33px 48.5px 0 65px;
	display: flex;
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
		margin-top: -30px;

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
</style>