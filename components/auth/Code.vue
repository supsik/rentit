<template>
	<form class="code-form">
		<h2>Войти</h2>
		<div class="code-form__content">
			<label class="code-input__label">Введите код отправленный <br> на номер {{phoneValue}}</label>
			<div class="code-inputs-wr">
				<input type="text">
				<input type="text">
				<input type="text">
				<input type="text">
			</div>
			<div @click="resendCode" class="code-form__resend-code">Отправить снова смс</div>
			<button class="code-form__button" @click.prevent="checkCode">Подтвердить</button>
			<span @click="$emit('chooseStep', -1)" class="code-form__return">Вернуться назад к вводу номера</span>
		</div>
	</form>
</template>

<script setup>
const phoneValue = defineModel('phone')

const resendCode = () => {
	console.log('test')
}

const checkCode = () => {
	console.log('test')
}
</script>

<style lang='scss'>
.code-form {
	h2 {
		font-family: "Golos-SemiBold";
		font-size: 32px;
		text-transform: uppercase;
	}

	&__content {
		position: relative;
		margin-top: 12px;
		display: flex;
		flex-direction: column;
	}

	&__button {
		margin-top: 12px;
		width: 100%;
		height: 55px;
		border-radius: 6px;
		background-color: $main-blue;
		border: none;
		color: #fff;
		font-size: 14px;
		font-family: "Golos-SemiBold";
	}
	
	&__resend-code {
		align-self: center;
		width: fit-content;
		cursor: pointer;
		margin-top: 6px;
		font-size: 14px;
		font-family: "Golos-SemiBold";
		color: $main-blue;

		&:hover { text-decoration: underline }
	}

	&__return {
		top: calc(100% + 12px);
		align-self: center;
		position: absolute;
		width: fit-content;
		font-size: 14px;
	}

	.code-input__label {
		font-size: 14px;
		line-height: 20px;
	}

	.code-inputs-wr {
		width: 100%;
		display: flex;
		gap: 4px;
		margin-top: 6px;

		input {
			width: 100%;
			height: 56px;
			display: block;
			text-align: center;
			border: 1px solid #30303054;
			border-radius: 6px;
			cursor: default;
			font-size: 24px;
		}
	}
}
</style>