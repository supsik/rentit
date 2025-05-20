<template>
	<form class="code-form">
		<h2>Войти</h2>
		<div class="code-form__content">
			<label class="code-input__label">Введите код отправленный <br> на номер {{phoneValue}}</label>
			<div class="code-inputs-wr">
				<input type="text" value="*">
				<input type="text" value="*">
				<input type="text" value="*">
				<input type="text" value="*">
			</div>
		</div>
	</form>
</template>

<script setup>
const phoneValue = defineModel('phone')
</script>

<style lang='scss'>
.code-form {
	h2 {
		font-family: "Golos-SemiBold";
		font-size: 32px;
		text-transform: uppercase;
	}

	&__content { margin-top: 12px }

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

	.code-input__label { font-size: 14px }

	.code-inputs-wr {
		width: 100%;
		display: flex;
		gap: 4px;
		margin-top: 6px;

		input {
			width: 100%;
			display: block;
			cursor: default;
			text-align: center;
			height: 56px;
			border-radius: 6px;
			border: 1px solid #30303054;
		}
	}
}
</style>