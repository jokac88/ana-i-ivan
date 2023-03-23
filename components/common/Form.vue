<script setup>
import RadioButton from "~/components/elements/RadioButton";
import GuestName from "~/components/elements/GuestName";
import Countdown from "~/components/common/Countdown";

const props = defineProps({
  formData: {
    type: Object,
    default: () => {
    }
  },
  countdownData: {
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
const guestsObject = {
  1: 'једног госта',
  2: 'два госта',
  3: 'три госта',
  4: 'четири госта',
  5: 'пет гостију',
  6: 'шест гостију',
  7: 'седам гостију',
  8: 'осам гостију',
  9: 'девет гостију',
}
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

  if (coming.value === 'ДА' && guestsNumber.value - 1 !== guestsNames.value.length) {
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
          <div class="form__input">
            <input
                type="text"
                :name="formData.name.formEntry"
                v-model="name"
                :class="{'form__input-field--is-error': isSubmit && !name }"
                class="form__input-field"
            />
            <p v-if="isSubmit && !name" class="form__validation-message">{{ formData.name.validationMessage }}</p>
          </div>
        </div>
        <div class="form__element form__coming">
          <p class="form__text">
            {{ formData.coming.question }}
            <span class="form__required">*</span>
          </p>
          <div class="form__input">
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
        </div>
        <div v-if="coming === 'ДА'" class="form__additional-questions">
          <div class="form__element form__guests-number">
            <p class="form__text">
              {{ formData.guestsNumber.question }}
              <span class="form__description">{{ formData.guestsNumber.description }}</span>
            </p>
            <select
                :name="formData.guestsNumber.formEntry"
                v-model="guestsNumber"
                class="form__input-field"
            >
              <option v-for="(option, index) in formData.guestsNumber.options" :value="option + 1">
                <template v-if="!index">Само ја</template>
                <template v-else>+{{ option }}</template>
              </option>
            </select>
          </div>
          <div v-if="guestsNumber > 1" class="form__element form__guests-names">
            <p class="form__text">
              {{ formData.guestsNames.question }}
              <span class="form__required">*</span>
              <span class="form__description">{{ formData.guestsNames.description }}</span>
            </p>
            <div class="form__flex-container">
              <input
                  type="text"
                  @keyup.enter="addGuest"
                  v-model="guestName"
                  class="form__input-field"
                  :disabled="guestsNumber - 1 === guestsNames.length || guestsNumber - 1 < guestsNames.length"
              />
              <button
                  type="button"
                  @click="addGuest"
                  class="form__add-guest-button"
                  :disabled="!guestName || guestsNumber - 1 === guestsNames.length || guestsNumber - 1 < guestsNames.length"
              >
                <i class="icon-plus"/>
              </button>
            </div>
            <div
                :class="{'form__guests-names-list--is-error': isSubmit && guestsNames.length !== guestsNumber - 1 }"
                class="form__guests-names-list"
            >
              <GuestName
                  v-for="(guest, index) in guestsNames"
                  :guest-name="guest"
                  :index="index"
                  @deleteGuest="deleteGuest"
              />
              <p v-if="guestsNames.length !== guestsNumber - 1" class="form__description">
                <span v-if="guestsNames.length < guestsNumber - 1">
                  Додајте
                  {{ guestsNames.length ? 'још' : '' }}
                  {{ guestsObject[guestsNumber - 1 - guestsNames.length] }}
                </span>
                <span v-else>
                  Oдузмите још
                  {{ guestsObject[guestsNames.length + 1 - guestsNumber] }}
                </span>
              </p>
            </div>
            <input
                type="text"
                :name="formData.guestsNames.formEntry"
                :value="guestsNames.join(', ')"
                class="is-hidden"
            />
          </div>
          <div class="form__element">
            <p class="form__text">
              {{ formData.message.question }}
              <span class="form__description">
                {{ guestsNumber === 1 ? formData.message.placeholderSingle : formData.message.placeholderMultiple }}
              </span>
            </p>
            <textarea
                :name="formData.message.formEntry"
                v-model="message"
                rows="4"
                class="form__input-field form__text-area"
            />
          </div>
        </div>
        <button class="form__submit-button" :disabled="isLoading">
          <span>
            {{ formData.submitButton }}
            <img v-if="isLoading" src="~/assets/img/loader.gif" alt="~/assets/img/loader.gif"/>
          </span>
        </button>
        <iframe id="google-form-response-iframe" name="google-form-response-iframe"/>
      </form>
      <Transition>
        <div v-if="isSuccessful" class="form__successful-message">
          <div class="form__successful-message-wrapper">
            <p v-html="formData.successfulMessage"></p>
            <button @click="resetForm" type="button" class="form__close-form-button">
              <i class="icon-cancel"/>
            </button>
          </div>
        </div>
      </Transition>
    </div>
    <p class="form__info">{{ formData.info }}</p>
    <Countdown :countdown-data="countdownData"/>
  </section>
</template>
