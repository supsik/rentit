<template>
  <div>
    <header class="auth__header">
      <a class="auth__header-logo" href="/">RENT <span>IT</span></a>
      <a class="auth__header-support" href="#">Служба поддержки</a>
    </header>
    <div class="auth__content">
      <div class="auth__description">
        <h1>Сервис для учета и <span>автоматизации проката</span></h1>
        <p>
          Наведите порядок в делах, экономьте время и зарабатывайте больше денег
        </p>
      </div>
      <form class="auth-form">
        <h2>Войти</h2>
        <div class="auth-form__content">
          <label for="number-input" class="number-input__label">Телефон</label>
          <div class="auth-form__input-box">
            <input type="text" class="country-code" value="+7" disabled />
            <input
              v-maska
              v-model="phoneValue"
              data-maska="### ###-##-##"
              type="text"
              class="number-input"
              id="number-input"
              ref="phone"
            />
            <IconsClose
              v-if="phoneValue"
              class="input-clear"
              @click="phoneValue = ''"
            />
          </div>
        </div>
        <button class="auth-form__button" @click.prevent>Вход</button>
      </form>
    </div>
  </div>
</template>

<script setup>
const phoneValue = ref("");
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

      &.country-code { max-width: 70px }
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
