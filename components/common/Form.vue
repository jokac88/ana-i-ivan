<script setup>
import RadioButton from "~/components/elements/RadioButton.vue";
import GuestName from "~/components/elements/GuestName.vue";

const props = defineProps({
  formData: {
    type: Object,
    default: () => {
    }
  },
});

onMounted(() => {
  const googleForm = document.getElementById('google-form');

  googleForm.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      return false;
    }
  })
});

const googleFormEndpoint = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScflw1DmNIo5jTST1cpX-HBBAJA3osntembDZu7f7P2DGNEAg/formResponse';
const name = ref('');
const coming = ref('');
const guestsNumber = ref(1);
const guestsNames = ref([]);
const guestName = ref('');
const message = ref('');
const isSubmit = ref(false);
const isLoading = ref(false);
const isSuccessful = ref(false);

function addGuest() {
  if (guestName.value) {
    guestsNames.value = [...guestsNames.value, guestName.value];
    guestName.value = '';
  }
}

function deleteGuest(index) {
  guestsNames.value.splice(index, 1);
}

function scrollToElement(element) {
  element.scrollIntoView({behavior: 'smooth'});
}

function onSubmit() {
  if (!isSubmit.value) {
    isSubmit.value = true;
  }

  if (!name.value) {
    const element = document.querySelector('.form__name');
    scrollToElement(element);

    return false;
  }

  if (!coming.value) {
    const element = document.querySelector('.form__coming');
    scrollToElement(element);

    return false;
  }

  if (guestsNumber.value - 1 !== guestsNames.value.length) {
    const element = document.querySelector('.form__guests-names');
    scrollToElement(element);

    return false;
  }

  document.getElementById('google-form').target = 'google-form-response-iframe';
  const googleIframe = document.getElementById('google-form-response-iframe');

  isLoading.value = true;

  if (googleIframe) {
    googleIframe.onload = () => {
      isLoading.value = false;
      isSuccessful.value = true;
    }
  }
}

function resetForm() {
  name.value = coming.value = message.value = '';
  guestsNumber.value = 1;
  guestsNames.value = [];
  isSubmit.value = isLoading.value = isSuccessful.value = false;
}

</script>

<template>

  <section class="form">

    <div class="form__wrapper">

      <form
          id="google-form"
          target="google-form-response-iframe"
          :action="googleFormEndpoint"
          method="POST"
          :onsubmit="onSubmit"
      >

        <p class="form__heading">{{ formData.heading }}</p>

        <div class="form__element form__name">

          <p class="form__text">

            {{ formData.name.question }}

            <span class="form__required">*</span>
          </p>

          <input
              type="text"
              :name="formData.name.formEntry"
              v-model="name"
              :class="{'form__input--is-error': isSubmit && !name }"
              class="form__input"
          />

          <p v-if="isSubmit && !name" class="form__validation-message">{{ formData.name.validationMessage }}</p>
        </div>

        <div class="form__element form__coming">

          <p class="form__text">

            {{ formData.coming.question }}

            <span class="form__required">*</span>
          </p>

          <RadioButton
              v-for="value in formData.coming.values"
              :value="value"
              :checked="coming"
              :form-entry="formData.coming.formEntry"
              :class="{'radio-button--is-error': isSubmit && !coming }"
              @radio-button-clicked="event => coming = event"
          />

          <p v-if="isSubmit && !coming" class="form__validation-message">{{ formData.coming.validationMessage }}</p>
        </div>

        <div v-if="coming === 'ДА'" class="form__element form__guests-number">

          <p class="form__text">{{ formData.guestsNumber.question }}</p>

          <select
              :name="formData.guestsNumber.formEntry"
              v-model="guestsNumber"
              class="form__input"
          >

            <option v-for="(option, index) in formData.guestsNumber.options" :value="option + 1">

              <template v-if="!index">Само ја</template>

              <template v-else>+{{ option }}</template>
            </option>
          </select>

          <p class="form__description">{{ formData.guestsNumber.description }}</p>
        </div>

        <div v-if="coming === 'ДА' && guestsNumber > 1" class="form__element form__guests-names">

          <p class="form__text">
            {{ formData.guestsNames.question }}

            <span v-if="guestsNumber.value > 1" class="form__required">*</span>
          </p>

          <div class="form__flex-container">

            <input
                type="search"
                @keyup.enter="addGuest"
                v-model="guestName"
                class="form__input"
                :disabled="guestsNumber - 1 === guestsNames.length || guestsNumber - 1 < guestsNames.length"
            />

            <button
                type="button"
                @click="addGuest"
                class="form__add-guest-button"
                :disabled="guestsNumber - 1 === guestsNames.length || guestsNumber - 1 < guestsNames.length"
            >
              {{ formData.guestsNames.addGuestButton }}
            </button>
          </div>

          <p class="form__description">{{ formData.guestsNames.description }}</p>

          <div
              v-if="guestsNames.length"
              :class="{'form__guests-names-list--is-error': isSubmit && guestsNames.length !== guestsNumber - 1 }"
              class="form__guests-names-list"
          >

            <GuestName
                v-for="(guest, index) in guestsNames"
                :guest-name="guest"
                :index="index"
                @deleteGuest="deleteGuest"
            />
          </div>

          <p
              v-if="isSubmit && guestsNames.length !== guestsNumber - 1"
              class="form__validation-message"
          >
            <span v-if="guestsNames.length < guestsNumber - 1">
              Додајте још

              {{ guestsNumber - 1 - guestsNames.length }}

              {{ guestsNumber - 1 - guestsNames.length < 5 ? `госта` : `гостију` }}
            </span>

            <span v-else>
              Oдузмите још

              {{ guestsNames.length + 1 - guestsNumber }}

              {{ guestsNames.length - guestsNumber + 1 < 5 ? `госта` : `гостију` }}
            </span>
          </p>

          <input
              type="text"
              :name="formData.guestsNames.formEntry"
              :value="guestsNames.join(', ')"
              class="is-hidden"
          />
        </div>

        <div v-if="coming === 'ДА'" class="form__element">

          <p class="form__text">{{ formData.message.question }}</p>

          <textarea
              :name="formData.message.formEntry"
              v-model="message"
              :placeholder="guestsNumber === 1 ? formData.message.placeholderSingle : formData.message.placeholderMultiple"
              rows="4"
              class="form__input form__text-area"
          />
        </div>

        <button class="form__submit-button" :disabled="isLoading">
          <span>
            {{ formData.submitButton }}

            <img v-if="isLoading" src="~/assets/img/loader.gif" alt="assets/img/loader.gif"/>
          </span>
        </button>

        <p v-if="isLoading" class="form__loading">Loading</p>

        <div
            v-if="isSuccessful"
            class="form__successful-message"
        >

          <div class="form__successful-message-wrapper">

            <p v-html="formData.successfulMessage"></p>

            <button @click="resetForm" type="button" class="form__reset-form-button">x</button>
          </div>
        </div>

        <iframe id="google-form-response-iframe" name="google-form-response-iframe"/>
      </form>

      <h4 class="form__info">{{ formData.info }}</h4>
    </div>
  </section>
</template>
