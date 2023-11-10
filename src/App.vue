<template>
  <div class="h-screen relative" id="nav">
    <div
      class="absolute inset-0 bg-cover bg-center"
      style="background-color: rgb(244, 244, 244)"
    ></div>
    <div class="h-full flex justify-center">
      <nav
        class="rounded-b-lg bg-white fixed z-30 py-1 w-full h-14 flex flex-wrap items-center mx-auto p-0 shadow-lg"
      >
        <a
          href="/index.html"
          class="flex justify-start w-auto h-12 p-2 -ml-6 lg:-ml-3"
        >
          <img
            src="src/assets/logo(2).png"
            class="h-10 ml-9"
            alt="Flowbite Logo"
        /></a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          class="inline-flex bg-white items-end p-2 w-10 h-10 justify-end ml-auto text-xs md:text-xs text-teal-950 rounded-lg md:hidden"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span class="sr-only"></span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          class="hidden w-full pr-2 pl-2 md:block md:w-auto text-teal-950"
          id="navbar-dropdown"
        >
          <ul
            class="flex uppercase flex-col xl:text-base md:text-xs font-extrabold p-0 mt-5 border bg-white text-teal-950 rounded-lg md:flex-row md:space-x-0.5 lg:md:space-x-1 md:mt-0 md:border-0"
          >
            <button
              class="block uppercase text-start py-3 text-teal-950 hover:text-blue-600"
            >
              <router-link
                to="/"
                class="ml-3 xl:p-3 p-0 pr-96 sm:pr-0 2xl:p-5 py-4 lng-main"
                data-lang="main"
                >Главная</router-link
              >
            </button>

            <li>
              <button
                id="dropdownNavbarLink"
                data-dropdown-toggle="dropdownNavbar"
                data-lang="company"
                class="flex items-center uppercase justify-between w-full py-3 p-3 px-3 lng-company rounded md:hover:bg-transparent md:border-0 md:w-auto hover:text-blue-600"
              >
                О компания
                <svg
                  class="w-2.5 h-2.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <!-- Dropdown menu -->

              <div
                id="dropdownNavbar"
                class="z-10 hidden justify-center font-normal divide-yrounded-lg shadow"
              >
                <ul
                  class="py-6 bg-teal-950 fixed flex top-0 -left-16 flex-col text-white"
                  aria-labelledby="dropdownLargeButton"
                >
                  <li>
                    <a
                      href="/history.html"
                      class="block px-6 py-2 lng-history"
                      data-lang="history"
                      >История</a
                    >
                  </li>
                  <li>
                    <a
                      href="/org-strucutre.html"
                      class="block px-6 py-2 lng-organizational-structure"
                      data-lang="organizational-structure"
                      >Организационная структура</a
                    >
                  </li>
                  <li>
                    <a
                      href="/leadership.html"
                      class="block px-6 py-2 lng-leadership"
                      data-lang="leadership"
                      >Руководство</a
                    >
                  </li>
                  <li>
                    <a
                      href="/types-of-activities.html"
                      class="block px-6 py-2 lng-types-of-activities"
                      data-lang="types-of-activities"
                      >Виды деятельности</a
                    >
                  </li>
                  <li>
                    <a
                      href="/development-plans.html"
                      class="block px-6 py-2 lng-development-plans"
                      data-lang="development-plans"
                      >Планы развития</a
                    >
                  </li>
                  <li>
                    <a
                      href="/reporting.html"
                      class="block px-6 py-2 lng-reporting"
                      data-lang="reporting"
                      >Отчетность</a
                    >
                  </li>
                  <li>
                    <a
                      href="/regulations.html"
                      class="block px-6 py-2 lng-regulatory-documents"
                      data-lang="regulatory-documents"
                      >Нормативные документы</a
                    >
                  </li>
                  <li>
                    <a
                      href="/ads.html"
                      class="block px-6 py-2 lng-ads"
                      data-lang="ads"
                      >Объявления</a
                    >
                  </li>
                </ul>
              </div>
            </li>

            <!-- блоки -->

            <button
              class="block uppercase text-start py-3 text-teal-950 hover:text-blue-600"
            >
              <a
                href="/projects.html"
                class="ml-3 xl:p-3 p-0 pr-96 sm:pr-0 2xl:p-5 py-4 lng-projects"
                data-lang="projects"
                >Проекты</a
              >
            </button>
            <button
              class="block uppercase text-start py-3 text-teal-950 hover:text-blue-600"
            >
              <a
                href="/news.html"
                class="ml-3 xl:p-3 p-0 pr-96 sm:pr-0 2xl:p-5 py-4 lng-news"
                data-lang="news"
                >Новости</a
              >
            </button>
            <button
              class="block uppercase text-start py-3 text-teal-950 hover:text-blue-600"
            >
              <a
                href="https://goszakup.gov.kz/"
                class="ml-3 xl:p-3 p-0 pr-96 sm:pr-0 2xl:p-5 py-4 lng-purchases"
                data-lang="purchases"
                >Закупки</a
              >
            </button>
            <button
              class="block uppercase text-start py-3 text-teal-950 hover:text-blue-600"
            >
              <a
                href="/vacancy.html"
                class="ml-3 xl:p-3 p-0 pr-96 sm:pr-0 2xl:p-5 py-4 lng-vacancy"
                data-lang="vacancy"
                >Вакансия</a
              >
            </button>
            <button
              class="block uppercase text-start py-3 text-teal-950 hover:text-blue-600"
            >
              <router-link to="/contacts"
                href="/contacts.html"
                class="ml-3 xl:p-3 p-0 pr-96 sm:pr-0 2xl:p-5 py-4 lng-contacts"
                data-lang="contacts"
                >Контакты</router-link
              >
            </button>
            <!-- Language -->

            <div class="md:flex md:absolute md:right-0">
              <button
                id="dropdownDefaultButtoLanguage"
                data-dropdown-toggle="dropdow"
                data-lang="language"
                class="flex items-center lng-search justify-between lg:pl-6 w-full py-3 pb-4 pl-3 p-3 rounded md:hover:bg-transparent md:border-0 md:w-auto hover:text-blue-600 uppercase"
                type="button"
              >
                Язык<svg
                  class="w-2.5 h-2.5 ml-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>

              <div
                id="dropdow"
                class="z-10 hidden divide-y absolute shadow w-14 text-center md:bg-teal-950/95 bg-teal-950 font-medium"
              >
                <ul
                  class="py-0.5 uppercase text-white"
                  aria-labelledby="dropdownDefaultButtoLanguage"
                >
                  <button>
                    <a
                      href="#"
                      class="block px-4 py-2 mt-3 header__btn"
                      data-btn="ru"
                      data-lang="russian"
                      >rus</a
                    >
                  </button>
                  <button>
                    <a
                      href="#"
                      class="block px-4 py-2 mt-3 header__btn"
                      data-btn="kz"
                      data-lang="kazakh"
                      >kaz</a
                    >
                  </button>
                  <button>
                    <a
                      href="#"
                      class="block px-4 py-2 mt-3 header__btn"
                      data-btn="en"
                      data-lang="english"
                      >eng</a
                    >
                  </button>
                </ul>
              </div>

              <!-- Поиск -->

              <li class="ml-3 md:m-0">
                <a>
                  <div class="flex justify-start py-2 mr-2">
                    <input
                      type="text"
                      class="text-gray-600 border-2 border-teal-950 sm:w-full lg:w-auto md:w-12 h-7 font-normal px-2 py-2.5 rounded-l-lg"
                      name="SearchForm[keyword]"
                      placeholder="Поиск"
                      aria-required="true"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-search w-5 h-7 rounded-r-lg px-1 border-2 border-teal-950 fill-black"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
                      />
                    </svg>
                  </div>
                </a>
              </li>
            </div>
          </ul>
        </div>
        
      </nav>

      <router-view />
      
    </div>
  </div>

  <!-- <HelloWorld /> -->
</template>

<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<script>
// Здесь вы также можете импортировать другие необходимые зависимости и объявить логику компонента

export default {
  components: {
    HelloWorld,
    // И другие компоненты, если необходимо
  },
  // Любая другая логика компонента, например, состояние данных, методы и т.д.
};
</script>

<style></style>
