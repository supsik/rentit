<template>
	<template>
		<form class="auth-form">
			<h2>Войти</h2>
			<div class="auth-form__content">
				<label for="number-input" class="number-input__label">Телефон</label>
				<div class="auth-form__input-box">
					<input type="text" class="country-code" value="+7" disabled />
					<input v-maska v-model="phoneValue" data-maska="### ###-##-##" type="text" class="number-input"
						id="number-input" ref="phone" />
					<IconsClose v-if="phoneValue" class="input-clear" @click="phoneValue = ''" />
				</div>
			</div>
			<button class="auth-form__button" @click.prevent="$emit('checkValidate')">Вход</button>
		</form>
	</template>
</template>

<script setup>
const phoneValue = defineModel('phone')
</script>

<style lang='scss'>
.auth-form {
	position: relative;
	right: 32px;
	top: -42px;
	width: 100%;
	max-width: 310px;

	h2 {
		font-family: "Golos-SemiBold";
		font-size: 32px;
		text-transform: uppercase;
	}

	&__content {
		margin-top: 12px;
	}

	&__input-box {
		position: relative;
		display: flex;
		gap: 5px;
		margin-top: 6px;

		input {
			width: 100%;
			font-size: 16px;
			border: 1px solid #30303054;
			border-radius: 6px;
			padding: 16px 24px;

			&.country-code {
				max-width: 70px
			}
		}
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

	.number-input__label {
		font-size: 14px;
	}

	.input-clear {
		cursor: pointer;
		position: absolute;
		top: 30%;
		right: 20px;
		width: 16px;
	}
}
</style>