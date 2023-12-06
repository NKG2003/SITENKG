<template>
  <div
    class="body-font xl:text-4xl text-teal-950 px-5 lg:px-28 z-10 rounded-sm pb-10 py-5"
  >
    <div class="text-teal-950 2xl:mr-10 pr-4 z-10">
      <h1 class="text-teal-950 font-bold lg:mt-0 text-2xl">ОБРАТНАЯ СВЯЗЬ</h1>
      <p class="leading-relaxed mb-5 text-lg text-teal-950 text-justify py-2">
        Если у вас есть предложения или вопросы, пожалуйста,заполните следующую
        форму, чтобы связаться с нами.
      </p>

      <form
        @submit.prevent="submitForm"
        method="POST"
        action="send"
        enctype="multipart/form-data"
      >
        <div class="gap-6 mb-6 md:grid-cols-3 flex flex-col md:flex-row">
          <div class="">
            <div>
              <label
                for="last_name"
                class="block mb-2 text-lg font-medium text-gray-900"
                >Фамилия
              </label>

              <input
                type="text"
                id="last_name"
                name="last_name"
                v-model="formData.last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="..."
              />

              <span
                v-if="errors.last_name"
                class="error absolute block mb-2 text-base font-medium text-gray-900"
                >{{ errors.last_name }}</span
              >
            </div>

            <div>
              <label
                for="first_name"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-6"
                >Имя
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                v-model="formData.first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="..."
              />
              <span
                v-if="errors.first_name"
                class="error absolute block mb-2 text-base font-medium text-gray-900"
                >{{ errors.first_name }}</span
              >
            </div>
            <div>
              <label
                for="middle_name"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-6"
                >Отчество</label
              >
              <input
                type="text"
                id="middle_name"
                name="middle_name"
                v-model="formData.middle_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="..."
              />
              <span
                v-if="errors.middle_name"
                class="error absolute block mb-2 text-base font-medium text-gray-900"
                >{{ errors.middle_name }}</span
              >
            </div>
          </div>

          <div class="">
            <div>
              <label
                for="iin_or_bin"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >ИИН/БИН
              </label>
              <input
                type="text"
                id="iin_or_bin"
                name="iin_or_bin"
                v-model="formData.iin_or_bin"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="..."
                pattern="[0-9]{12}"
                maxlength="12"
              />
              <span
                v-if="errors.iin_or_bin"
                class="error absolute block mb-2 text-base font-medium text-gray-900"
                >{{ errors.iin_or_bin }}</span
              >
            </div>
            <div>
              <label
                for="phone_number"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-6"
                >Контакты
              </label>
              <input
                type="tel"
                id="phone_number"
                name="phone_number"
                v-model="formData.phone_number"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="8-ХХХ-ХХХ-ХХ-ХХ"
                pattern="[8]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                maxlength="11"
              />
              <span
                v-if="errors.phone_number"
                class="error absolute block mb-2 text-base font-medium text-gray-900"
                >{{ errors.phone_number }}</span
              >
            </div>
            <div class="">
              <label
                for="email"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white mt-6"
                >Эл. адресс
              </label>
              <input
                type="email"
                id="email"
                name="email"
                v-model="formData.email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="..."
              />
              <span
                v-if="errors.email"
                class="error absolute block mb-2 text-base font-medium text-gray-900"
                >{{ errors.email }}</span
              >
            </div>
          </div>

          <div class="">
            <label
              for="mail_address"
              class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
              >Почтовый адресс
            </label>
            <input
              type="text"
              id="mail_address"
              name="mail_address"
              v-model="formData.mail_address"
              placeholder="..."
              class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <span
              v-if="errors.mail_address"
              class="error absolute block mb-2 text-base font-medium text-gray-900"
              >{{ errors.mail_address }}</span
            >
          </div>
        </div>
        <div class="mb-5">
          <label
            for="questions"
            class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
            >Вопросы
          </label>
          <textarea
            id="questions"
            v-model="formData.questions"
            class="contact-form-message w-3/4 bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="..."
            name="questions"
          ></textarea>
          <span
            v-if="errors.questions"
            class="error absolute block mb-2 text-base font-medium text-gray-900"
            >{{ errors.questions }}</span
          >
        </div>

        <button
          value="submit"
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 mt-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Отправить
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "FeedBack",
  data() {
    return {
      formData: {
        last_name:'',
        first_name:'',
        middle_name:'',
        iin_or_bin:'',
        email:'',
        phone_number:'',
        mail_address:'',
        questions:'',
      },
    };
  },
  // methods: {
  //   async submitForm() {
  //     try {
  //       const response = await fetch('/send-email', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify(this.formData)
  //       });

  //       if (!response.ok) {
  //         throw new Error('Ошибка при отправке данных');
  //       }

  //       const result = await response.json();
  //       console.log('Данные успешно отправлены', result);

  //       // Очистка формы после успешной отправки
  //       this.formData.last_name = '';
  //       this.formData.email = '';
  //       this.formData.questions = '';
  //     } catch (error) {
  //       console.error('Ошибка:', error);
  //       // Обработка ошибки при отправке данных
  //     } 
  //   }
  // },
  setup() {
    const formData = ref({
      last_name: "",
      first_name: "",
      middle_name: "",
      iin_or_bin: "",
      email: "",
      phone_number: "",
      mail_address: "",
      questions: "",
    });

    const errors = ref({});

    const submitForm = () => {
      errors.value = {};

      if (!formData.value.last_name) {
        errors.value.last_name = "Необходимо заполнить поле";
      }
      if (!formData.value.first_name) {
        errors.value.first_name = "Необходимо заполнить поле";
      }
      if (!formData.value.middle_name) {
        errors.value.middle_name = "Необходимо заполнить поле";
      }
      if (!formData.value.iin_or_bin) {
        errors.value.iin_or_bin = "Необходимо заполнить поле";
      }
      if (!formData.value.phone_number) {
        errors.value.phone_number = "Необходимо заполнить поле";
      }
      if (!formData.value.mail_address) {
        errors.value.mail_address = "Необходимо заполнить поле";
      }
      if (!formData.value.questions) {
        errors.value.questions = "Необходимо заполнить поле";
      }
      if (!formData.value.email) {
        errors.value.email = "Необходимо заполнить поле";
      } else if (!isValidEmail(formData.value.email)) {
        errors.value.email =
          "Пожалуйста, введите действительный адрес электронной почты";
      }

      if (Object.keys(errors.value).length === 0) {
        // Отправка данных, если форма прошла валидацию
        console.log("Form submitted successfully!", formData.value);
        // Добавьте здесь логику отправки данных (например, через AJAX)
      }
    };

    const isValidEmail = (email) => {
      // Простейшая проверка email на корректность
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    return {
      formData,
      errors,
      submitForm,
    };
  },
  
};
</script>

<style>
.error {
  color: red;
}
</style>



<script setup>



</script>