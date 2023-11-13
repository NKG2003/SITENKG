<template>
  <div class="relative flex flex-col">
    <div
      class="body-font justify-center flex xl:text-3xl text-teal-950 px-1 lg:px-16 pb-10  bg-[url('@/assets/Astana.jpg')] bg-cover bg-no-repeat bg-center bg-local"
    >
      <div
        class="py-1 mx-auto flex xl:justify-center md:flex-nowrap flex-wrap z-10 pl-2 mt-20 bg-white rounded-sm "
      >
        <div class="text-teal-950 flex-col 2xl:mr-10 mb-6 pr-10 z-10 xl:p-10 p-4">
          <h1 class="lg:mb-6 mb-4 font-extrabold ">КОНТАКТЫ</h1>
          <p class="font-bold mb-6">Приемная</p>

          <div class="mb-6 lg:mb-8 lg:text-xl flex flex-col lg:flex-row">
            <p class="lg:text-xl mr-2">Телефон:</p>
            <p>+7-XXX-XXX-XX-XX</p>
          </div>

          <div class="mb-6 lg:mb-8 lg:text-xl flex flex-col lg:flex-row">
            <p class="mr-2">Эл. почта:</p>
            <p>info@nzhkeden.kz</p>
          </div>


          <p class="font-bold mb-4 lg:mb-8">Юридический адрес</p>
          <div class="flex flex-col">
            <p class="lg:text-xl">
              ТОО «Nur Zholy Customs Service» Жетысу область,
            </p>
            <p class="lg:text-xl">
              Панфиловский район, Пенжимский сельский округ,
            </p>
            <p class="lg:text-xl">село Пенжим, Учетный квартал 87, здание 27</p>
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full flex flex-col justify-start items-start  p-10  px-16"
    >
      <p
        class="z-10 text-teal-950  lg:text-4xl font-extrabold bg-white w-full  rounded-sm text-start flex justify-start items-start"
      >
        Наши адреса
      </p>
      <div class="hidden lg:flex flex-col justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10481.651764935008!2d80.3967903!3d44.1586367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x387f177232258c41%3A0x4bd9eec54c46002d!2z0J3SsdGAINC20L7Qu9GLIC0gTnVyIEpvbHk!5e1!3m2!1sru!2skz!4v1699017324260!5m2!1sru!2skz"
          width="650px"
          height="350px"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="mt-10"
        ></iframe>
      </div>
      <div class="flex lg:hidden w-full justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10481.651764935008!2d80.3967903!3d44.1586367!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x387f177232258c41%3A0x4bd9eec54c46002d!2z0J3SsdGAINC20L7Qu9GLIC0gTnVyIEpvbHk!5e1!3m2!1sru!2skz!4v1699017324260!5m2!1sru!2skz"
          width="100%"
          height="350px"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="mt-10"
        ></iframe>
      </div>
    </div>

    <div class="body-font xl:text-4xl text-teal-950 px-1 lg:px-16 z-10 pl-2 rounded-sm">
     
        <div
          class="text-teal-950 2xl:mr-10 pr-4 z-10 xl:p-10 p-4 lg:mx-20 "
        >
          <h1 class="text-teal-950 font-bold lg:mt-0">ОБРАТНАЯ СВЯЗЬ</h1>
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
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="••••"
                  required
                />
              </div>
              <div class="flex items-center">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
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
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-2.5 text-center"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  
</template>
