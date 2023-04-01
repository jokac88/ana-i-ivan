<script setup>
import RadioButton from "~/components/elements/RadioButton";
import GuestFullName from "~/components/elements/GuestFullName";

const props = defineProps({
  formData: {
    type: Object,
    default: () => {
    }
  },
});

const formEndpoint = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLScflw1DmNIo5jTST1cpX-HBBAJA3osntembDZu7f7P2DGNEAg/formResponse';
const devFormEndpoint = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfeK3FJrm37Bp4WNYmUR1pXE0UgH0-wKk23ujeXHD3dUmCvOA/formResponse';
const googleFormEndpoint = process.env.NODE_ENV === 'development' ? devFormEndpoint : formEndpoint;
const formEntry = process.env.NODE_ENV === 'development' ? 'devFormEntry' : 'formEntry';
const fullName = ref('');
const coming = ref('');
const guestsNumber = ref(1);
const guestsFullNames = ref([]);
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
};
const guestFirstName = ref('');
const guestLastName = ref('');
const note = ref('');
const isSubmitted = ref(false);
const isLoading = ref(false);
const submitError = ref(false);
const isSuccessful = ref(false);

const guestFullName = computed(() => {
  return `${guestFirstName.value} ${guestLastName.value}`;
});

const guestFullNameInputDisabled = computed(() => {
  return guestsNumber.value - 1 === guestsFullNames.value.length || guestsNumber.value - 1 < guestsFullNames.value.length;
});

const guestFullNameButtonDisabled = computed(() => {
  return !guestFirstName.value || !guestLastName.value || guestsNumber.value - 1 === guestsFullNames.value.length || guestsNumber.value - 1 < guestsFullNames.value.length;
});

const additionalQuestions = computed(() => {
  return coming.value === 'ДА';
});

const guestsFullNamesReversed = computed(() => {
  return [...guestsFullNames.value].reverse();
});

function addGuest() {
  if (guestFirstName.value && guestLastName.value) {
    guestsFullNames.value = [...guestsFullNames.value, guestFullName.value];

    guestFirstName.value = guestLastName.value = guestFullName.value = '';

    const inputField = document.querySelector(`.form__guestFirstName input.form__input-field`);

    inputField.focus();
  }
}

function removeGuest(index) {
  guestsFullNames.value.splice(index - 1, 1);
}

function clearGuestName(props) {
  const inputField = document.querySelector(`.form__${props} input.form__input-field`);

  inputField.focus();
  this[props] = '';
}

function scrollToElement(element) {
  element.scrollIntoView({behavior: 'smooth'});
}

// function formValidation() {
//   if (!isSubmitted.value) {
//     isSubmitted.value = true;
//   }
//
//   if (!name.value) {
//     const element = document.querySelector('.form__fullName');
//     scrollToElement(element);
//
//     return false;
//   }
//
//   if (!coming.value) {
//     const element = document.querySelector('.form__coming');
//     scrollToElement(element);
//
//     return false;
//   }
//
//   if (coming.value === 'ДА' && guestsNumber.value - 1 !== guestsFullNames.value.length) {
//     const element = document.querySelector('.form__guests-names');
//     scrollToElement(element);
//
//     return false;
//   }
//
//   return true;
// }

// const onSubmit = async () => {
//   if (formValidation()) {
//     const entryFields = document.querySelectorAll('[name^="entry"]');
//     const formData = new FormData();
//
//     entryFields.forEach(field => formData.append(field.name, field.value));
//
//     isLoading.value = true;
//
//     await useFetch(googleFormEndpoint, {
//       method: "POST",
//       body: formData,
//
//       onResponse({response}) {
//         console.log(response)
//         if (response.ok) {
//           isSuccessful.value = true;
//
//           if (submitError.value) {
//             submitError.value = false;
//           }
//         }
//       },
//       onResponseError({response}) {
//         console.log(response)
//         if (!response.ok) {
//           submitError.value = true;
//
//           const element = document.querySelector('.form__submit');
//           scrollToElement(element);
//         }
//       }
//     });
//     isLoading.value = false;
//   }
// };

function onSubmit() {
  if (!isSubmitted.value) {
    isSubmitted.value = true;
  }

  if (!fullName.value) {
    const element = document.querySelector('.form__fullName');
    scrollToElement(element);

    return false;
  }

  if (!coming.value) {
    const element = document.querySelector('.form__coming');
    scrollToElement(element);

    return false;
  }

  if (coming.value === 'ДА' && guestsNumber.value - 1 !== guestsFullNames.value.length) {
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
  fullName.value = coming.value = note.value = '';
  guestsNumber.value = 1;
  guestsFullNames.value = [];
  isSubmitted.value = isLoading.value = submitError.value = isSuccessful.value = false;
}

onMounted(() => {
  const googleForm = document.getElementById('google-form');

  googleForm.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      return false;
    }
  })
});

</script>

<template>
    <section class="form">
        <div class="form__wrapper">
            <p class="form__heading">{{ formData.heading }}</p>
            <!--            <form @submit.prevent>-->
            <form
                    id="google-form"
                    target="google-form-response-iframe"
                    :action="googleFormEndpoint"
                    method="POST"
                    :onsubmit="onSubmit"
            >
                <div class="form__element form__fullName">
                    <p class="form__text">
                        {{ formData.fullName.question }}
                        <span class="form__required">*</span>
                    </p>
                    <div class="form__input">
                        <input
                                type="text"
                                :name="formData.fullName[formEntry]"
                                v-model="fullName"
                                :class="{'form__input-field--is-error': isSubmitted && !fullName }"
                                class="form__input-field"
                        />
                        <p v-if="isSubmitted && !fullName" class="form__validation-message">
                            {{ formData.fullName.validationMessage }}</p>
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
                                :form-entry="formData.coming[formEntry]"
                                :class="{'radio-button--is-error': isSubmitted && !coming }"
                                :checked="coming === value"
                                @radio-button-clicked="event => coming = event"
                        />
                        <p v-if="isSubmitted && !coming" class="form__validation-message">
                            {{ formData.coming.validationMessage }}
                        </p>
                    </div>
                </div>
                <div v-if="additionalQuestions" class="form__additional-questions">
                    <div class="form__element form__guests-number">
                        <p class="form__text">
                            {{ formData.guestsNumber.question }}
                            <span class="form__description">{{ formData.guestsNumber.description }}</span>
                        </p>
                        <div class="form__select">
                            <select
                                    :name="formData.guestsNumber[formEntry]"
                                    v-model="guestsNumber"
                                    class="form__input-field"
                            >
                                <option v-for="(option, index) in formData.guestsNumber.options" :value="option + 1">
                                    <template v-if="!index">Само ја</template>
                                    <template v-else>+{{ option }}</template>
                                </option>
                            </select>
                            <i class="icon-dropdown"/>
                        </div>
                    </div>
                    <div v-if="guestsNumber > 1" class="form__element form__guests-names">
                        <p class="form__text">
                            {{ formData.guestsFullNames.question }}
                            <span class="form__required">*</span>
                            <span v-html="formData.guestsFullNames.description" class="form__description"/>
                        </p>
                        <div class="form__flex-container">
                            <div class="form__guestFirstName">
                                <input
                                        type="text"
                                        v-model="guestFirstName"
                                        @keyup.enter="addGuest"
                                        class="form__input-field"
                                        placeholder="Име"
                                        :disabled="guestFullNameInputDisabled"
                                />
                                <Transition>
                                    <i
                                            v-if="guestFirstName"
                                            class="icon-close"
                                            @click="clearGuestName('guestFirstName')"/>
                                </Transition>
                            </div>
                            <div class="form__guestLastName">
                                <input
                                        type="text"
                                        v-model="guestLastName"
                                        @keyup.enter="addGuest"
                                        class="form__input-field"
                                        placeholder="Презиме"
                                        :disabled="guestFullNameInputDisabled"
                                />
                                <Transition>
                                    <i
                                            v-if="guestLastName"
                                            class="icon-close"
                                            @click="clearGuestName('guestLastName')"/>
                                </Transition>
                            </div>
                            <button
                                    type="button"
                                    @click="addGuest"
                                    @keyup.enter="addGuest"
                                    class="form__add-guest-button"
                                    :disabled="guestFullNameButtonDisabled"
                            >
                                <i class="icon-user-add"/>
                            </button>
                        </div>
                        <div
                                :class="{'form__guests-names-list--is-error': isSubmitted && guestsFullNames.length !== guestsNumber - 1 }"
                                class="form__guests-names-list"
                        >
                            <p
                                    v-if="guestsFullNames.length !== guestsNumber - 1"
                                    :class="{'form__guests-number-info--is-error': isSubmitted && guestsFullNames.length !== guestsNumber - 1 }"
                                    class="form__guests-number-info"
                            >
                                <span v-if="guestsFullNames.length < guestsNumber - 1">
                                    Додајте
                                    {{ guestsFullNames.length ? 'још' : '' }}
                                    {{ guestsObject[guestsNumber - 1 - guestsFullNames.length] }}
                                </span>
                                <span v-else>
                                    Oдузмите joш
                                    {{ guestsObject[guestsFullNames.length + 1 - guestsNumber] }}
                                </span>
                            </p>
                            <GuestFullName
                                    v-for="(guestFullName, index) in guestsFullNamesReversed"
                                    :guest-fullName="guestFullName"
                                    :index="guestsFullNames.length - index"
                                    @removeGuest="removeGuest"
                            />
                            <p v-if="isSubmitted && guestsFullNames.length !== guestsNumber - 1"
                               class="form__validation-message">
                                {{ formData.guestsFullNames.validationMessage }}
                            </p>
                        </div>
                        <input
                                type="text"
                                :name="formData.guestsFullNames[formEntry]"
                                :value="guestsFullNames.join(', ')"
                                class="form__input-field--is-hidden"
                                readonly
                        />
                    </div>
                    <div class="form__element">
                        <p class="form__text">
                            {{ formData.note.question }}
                            <span class="form__description">
                            {{ formData.note.description }}
                        </span>
                        </p>
                        <textarea
                                :name="formData.note[formEntry]"
                                v-model="note"
                                rows="4"
                                class="form__input-field form__text-area"
                                tabindex="-1"
                        />
                    </div>
                </div>
                <div class="form__submit">
                    <button class="form__submit-button">
                        <span>
                            {{ formData.submitButton }}
                            <img
                                    v-if="isLoading"
                                    src="@/assets/img/loader.svg"
                                    alt="@/assets/img/loader.svg"
                            />
                        </span>
                    </button>
                    <!--                    <Transition>-->
                    <!--                        <p v-if="submitError" class="form__submit-error">{{ formData.formSubmitError }}</p>-->
                    <!--                    </Transition>-->
                </div>
                <iframe id="google-form-response-iframe" name="google-form-response-iframe"/>
                <Transition>
                    <div v-if="isLoading" class="form__overlay"/>
                </Transition>
            </form>
            <Transition>
                <div v-if="isSuccessful" class="form__successful-message">
                    <div class="form__successful-message-wrapper">
                        <p v-html="formData.successfulMessage"></p>
                        <button
                                type="button"
                                @click="resetForm"
                                class="form__close-form-button"
                        >
                            <i class="icon-close"/>
                        </button>
                    </div>
                </div>
            </Transition>
        </div>
        <p class="form__info">{{ formData.info }}</p>
    </section>
</template>
