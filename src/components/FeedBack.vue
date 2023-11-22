<template>
  <form method="POST" action="send" enctype="multipart/form-data">
    <div
      class="body-font xl:text-4xl text-teal-950 px-5 lg:px-28 z-10 rounded-sm pb-10 py-5"
    >
      <div class="text-teal-950 2xl:mr-10 pr-4 z-10">
        <h1 class="text-teal-950 font-bold lg:mt-0 text-2xl">ОБРАТНАЯ СВЯЗЬ</h1>
        <p class="leading-relaxed mb-5 text-lg text-teal-950 text-justify py-2">
          Если у вас есть предложения или вопросы, пожалуйста,заполните
          следующую форму, чтобы связаться с нами.
        </p>

        <form>
          <div class="grid gap-6 mb-6 md:grid-cols-3">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >Имя</label
              >
              <input
                type="text"
                id="first_name"
                name="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="..."
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >Фамилия</label
              >
              <input
                type="text"
                id="last_name"
                name="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="..."
                required
              />
            </div>
            <div>
              <label
                for="company"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >Компания</label
              >
              <input
                type="text"
                id="company"
                name="company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="..."
                required
              />
            </div>
            <div>
              <label
                for="phone"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >Номер телефона</label
              >
              <input
                type="tel"
                id="phone"
                name="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="8-ХХХ-ХХХ-ХХ-ХХ"
                pattern="[8]{1}[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}"
                required
              />
            </div>
            <div class="">
              <label
                for="email"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >Email адресс</label
              >
              <input
                type="email"
                id="email"
                name="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="nurzholy@company.com"
                required
              />
            </div>
            <div class="">
              <label
                for="password"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >Пароль</label
              >
              <input
                type="password"
                id="password"
                name="password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="••••"
                required
              />
            </div>
            <div class="">
              <label
                for="confirm_password"
                class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                >Подтвердите пароль</label
              >
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="••••"
                required
              />
            </div>
            <div class="flex items-center">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  name="remember"
                  type="checkbox"
                  value=""
                  class="w-6 h-6 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                >Я согласен с условиями
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  условиями</a
                >.</label
              >
            </div>
          </div>

          <button
            value="submit"
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: "FeedBack",
};
</script>
