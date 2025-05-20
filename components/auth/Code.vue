<template>
	<form class="code-form">
		<h2>Войти</h2>
		<div class="code-form__content">
			<label class="code-input__label">Введите код отправленный <br> на номер {{phoneValue}}</label>
			<div class="code-inputs-wr">
				<input
					class="code-input"
					type="text"
					ref="inputField"
					v-for="(el, i) in inputCode"
					:key="i"
					:value="el"
					@focus="inputCode[i] = ''; currentInput = i"
					@input.prevent="changeInput($event)"
					@keydown.delete="currentInput > 0 ? currentInput-- : null"
				>
			</div>
			<div class="code-form__resend-code">Отправить снова смс</div>
			<button @click.prevent="checkCode" class="code-form__button">Подтвердить</button>
			<span @click="$emit('chooseStep', -1)" class="code-form__return">Вернуться назад к вводу номера</span>
		</div>
	</form>
</template>

<script setup>
const emit 					= defineEmits(['showError'])
const inputCode 		= ref(['', '', '', ''])
const phoneValue 		= defineModel('phone')
const inputField 		= ref([])
const currentInput 	= ref(0)
const testCode 			= '1234' // devTest

const changeInput = event => {
	currentInput.value = inputField.value.indexOf(event.target)

	if (event.inputType == 'insertText' && /[0-9]/.test(event.data))
	{
		inputCode.value[currentInput.value] = event.data
		currentInput.value++
	} else if (event.inputType == 'insertFromPaste' && /^\d{1,4}$/.test(event.data)) {
		const inputVal = event.data.split('')
		inputVal.forEach((element, i) => {
			inputCode.value[i] = element
			currentInput.value = i + 1
		});
	} else
		inputField.value[currentInput.value].value = ''
}

const checkCode = () => {
	if (inputCode.value.some(el => el == '') || inputCode.value.join('') != testCode)
		emit('showError', 'Введен некорректный код')
}

watch(currentInput, (newVal, oldVal) => {
	if (newVal <= inputField.value.length - 1)
		inputField.value[newVal]?.focus()
	else
		inputField.value.map(el => el.blur())	
})
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