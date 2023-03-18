<script setup>
import RadioButton from "~/components/elements/RadioButton.vue";

const props = defineProps({
  formData: {
    type: Object,
    default: () => {
    }
  },
});

const isLoading = ref(false);
const isSuccessful = ref(false);
const guestsNumber = ref(1);
const googleFormEndpoint = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScflw1DmNIo5jTST1cpX-HBBAJA3osntembDZu7f7P2DGNEAg/formResponse';

function submit() {
  document.getElementById('my-form').target = 'my-response-iframe';
  const iframe = document.getElementById('my-response-iframe');

  isLoading.value = true;
  isSuccessful.value = false;

  if (iframe) {
    iframe.onload = () => {
      isLoading.value = false;
      isSuccessful.value = true;
    }
  }
}

</script>

<template>

  <form
      id="my-form"
      target="my-response-iframe"
      :action="googleFormEndpoint"
      method="POST"
      :onsubmit="submit"
      class="form"
  >

    <div class="form__wrapper">

      <p class="form__heading">{{ formData.heading }}</p>

      <div class="form__element">

        <p class="form__text">

          {{ formData.name.question }}

          <span class="form__required">*</span>
        </p>

        <input
            type="text"
            :name="formData.name.formEntry"
            oninvalid="this.setCustomValidity('Ово поље је обавезно')"
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
            :form-entry="formData.coming.formEntry"
        />
      </div>

      <div class="form__element form__select">

        <p class="form__text">{{ formData.guestsNumber.question }}</p>

        <select
            :name="formData.guestsNumber.formEntry"
            v-model=guestsNumber
            class="form__input"
        >

          <option v-for="(option, index) in formData.guestsNumber.options" :value="option + 1">

            <template v-if="!index">Само ја</template>

            <template v-else>+{{ option }}</template>
          </option>
        </select>

        <p class="form__description">{{ formData.guestsNumber.description }}</p>
      </div>

      <div class="form__element">

        <p class="form__text">{{ formData.guestsNames.question }}</p>

        <textarea
            :name="formData.guestsNames.formEntry"
            :placeholder="formData.guestsNames.placeholder"
            rows="4"
            class="form__input form__text-area"
            oninvalid="this.setCustomValidity(`Ко још долази са вама?`)"
            oninput="this.setCustomValidity('')"
            :required="guestsNumber > 1"
            :disabled="guestsNumber === 1"
        />
      </div>

      <div class="form__element">

        <p class="form__text">{{ formData.message.question }}</p>

        <textarea
            :name="formData.message.formEntry"
            :placeholder="formData.message.placeholder"
            rows="4"
            class="form__input form__text-area"
        />
      </div>

      <button class="form__submit-button">{{ formData.submitButton }}</button>

      <p v-if="isLoading">Loading</p>

      <p v-if="isSuccessful">Успешно сте послали одговор</p>

      <iframe id="my-response-iframe" name="my-response-iframe"/>
    </div>
  </form>
</template>
