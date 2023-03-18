<script setup>
import RadioButton from "~/components/elements/RadioButton.vue";

const props = defineProps({
  formData: {
    type: Object,
    default: () => {
    }
  },
});

const googleFormEndpoint = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScflw1DmNIo5jTST1cpX-HBBAJA3osntembDZu7f7P2DGNEAg/formResponse';
const name = ref('');
const coming = ref('ДА');
const guestsNumber = ref(1);
const guestsNames = ref('');
const message = ref('');
const isLoading = ref(false);
const isSuccessful = ref(false);

function radioButtonClicked(value) {
  coming.value = value;

  if (coming.value === 'НЕ') {
    guestsNumber.value = 1;
    guestsNames.value = '';
    message.value = '';
  }
}

function optionSelected(event) {
  if (event.target.value === '1') {
    guestsNames.value = '';
  }
}

function resetForm() {
  name.value = guestsNames.value = message.value = '';
  coming.value = 'ДА';
  guestsNumber.value = 1;
  isLoading.value = isSuccessful.value = false;
}

function submit() {
  document.getElementById('my-form').target = 'my-response-iframe';
  const iframe = document.getElementById('my-response-iframe');

  isLoading.value = true;

  if (iframe) {
    iframe.onload = () => {
      isLoading.value = false;
      isSuccessful.value = true;
    }
  }
}

</script>

<template>

  <section class="form">

    <div class="form__wrapper">

      <form
          id="my-form"
          target="my-response-iframe"
          :action="googleFormEndpoint"
          method="POST"
          :onsubmit="submit"
      >

        <p class="form__heading">{{ formData.heading }}</p>

        <div class="form__element">

          <p class="form__text">

            {{ formData.name.question }}

            <span class="form__required">*</span>
          </p>

          <input
              type="text"
              :name="formData.name.formEntry"
              v-model="name"
              oninvalid="this.setCustomValidity('Упишите Ваше име и презиме')"
              oninput="this.setCustomValidity('')"
              class="form__input"
              required
          />
        </div>

        <div class="form__element form__radio-buttons">

          <p class="form__text">

            {{ formData.coming.question }}

            <span class="form__required">*</span>
          </p>

          <RadioButton
              v-for="value in formData.coming.values"
              :value="value"
              :checked="coming"
              :form-entry="formData.coming.formEntry"
              @radio-button-clicked="radioButtonClicked"
          />
        </div>

        <div class="form__element form__select">

          <p class="form__text">{{ formData.guestsNumber.question }}</p>

          <select
              :name="formData.guestsNumber.formEntry"
              v-model="guestsNumber"
              class="form__input"
              @change="optionSelected"
              :disabled="coming === '' || coming === 'НЕ'"
          >

            <option v-for="(option, index) in formData.guestsNumber.options" :value="option + 1">

              <template v-if="!index">Само ја</template>

              <template v-else>+{{ option }}</template>
            </option>
          </select>

          <p class="form__description">{{ formData.guestsNumber.description }}</p>
        </div>

        <div class="form__element">

          <p class="form__text">
            {{ formData.guestsNames.question }}

            <span v-if="guestsNumber > 1" class="form__required">*</span>
          </p>

          <textarea
              :name="formData.guestsNames.formEntry"
              v-model="guestsNames"
              :placeholder="formData.guestsNames.placeholder"
              rows="4"
              class="form__input form__text-area"
              oninvalid="this.setCustomValidity(`Ко још долази са Вама?`)"
              oninput="this.setCustomValidity('')"
              :required="guestsNumber > 1"
              :disabled="guestsNumber === 1"
          />
        </div>

        <div class="form__element">

          <p class="form__text">{{ formData.message.question }}</p>

          <textarea
              :name="formData.message.formEntry"
              v-model="message"
              :placeholder="formData.message.placeholder"
              rows="4"
              class="form__input form__text-area"
              :disabled="coming === '' || coming === 'НЕ'"
          />
        </div>

        <button class="form__submit-button">{{ formData.submitButton }}</button>

        <p v-if="isLoading" class="form__loading">Loading</p>

        <p
            v-if="isSuccessful"
            @click="resetForm"
            class="form__successful-message"
        >
          Успешно сте послали одговор
        </p>

        <iframe id="my-response-iframe" name="my-response-iframe"/>
      </form>

      <h4 class="form__info">{{ formData.info }}</h4>
    </div>
  </section>
</template>
