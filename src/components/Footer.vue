<template>
  <footer
    class="text-white body-font bg-gray-500 absolute z-20 buttem-0 w-full"
  >
    <div
      class="flex flex-col items-center lg:items-start border-b-2 lg:justify-start justify-center border-gray-900 pb-3"
    >
      <div
        class="py-2 flex flex-wrap items-center justify-center lg:text-xl border-b-2 border-gray-900 px-16 w-full"
      >
        <div
          class="flex md:flex-nowrap flex-col sm:flex-row justify-center items-center text-center lg:text-start lg:text-xl md:text-base text-sm font-extrabold"
        >
          <div class="relative sm:w-64 w-40 sm:mr-4 mr-2">
            ТОО "NurZholy Customs Service"
          </div>

          <button class="text-white md:ml-6 md:mt-0 mt-2 text-center">
            <a v-on:click="linkAndScrollTop('/')" class="" data-lang="news"
              >О компания</a
            >
          </button>
          <button class="text-white md:ml-6 md:mt-0 mt-2 text-center">
            <a v-on:click="linkAndScrollTop('/Process')"  class="" data-lang="news"
              >Новости</a
            >
          </button>
          <button class="text-white md:ml-6 md:mt-0 mt-2 text-center">
            <a v-on:click="linkAndScrollTop('/Contacts')" data-lang="contacts">
              Контакты
            </a>
          </button>
        </div>
        <span
          class="inline-flex sm:ml-auto sm:mt-0 mt-6 w-full justify-center lg:justify-start md:justify-start md:w-auto"
        >
          <a class="text-white">info@nzhkeden.kz </a>
        </span>
      </div>

      <div
        class="flex pt-3 lg:pl-16 pl-4 px-4 lg:px-0 sm:justify-start justify-center"
      >
        <a
          href="https://www.google.com/maps/place/%D0%9D%D2%B1%D1%80+%D0%B6%D0%BE%D0%BB%D1%8B+-+Nur+Joly/@44.1586367,80.3967903,4382m/data=!3m1!1e3!4m6!3m5!1s0x387f177232258c41:0x4bd9eec54c46002d!8m2!3d44.157463!4d80.3953389!16s%2Fg%2F11j302j8rs?entry=ttu"
          ><svg
            class="w-8 h-8 text-white dark:text-white p-1 border-2 border-white rounded-md"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path
              d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"
            />
          </svg>
        </a>
        <div class="flex flex-col px-2 text-sm">
          <p>Юридический адрес: Жетысу область, Панфиловский район,</p>
          <p>
            Пенжимский сельский округ, село Пенжим, Учетный квартал 87, здание
            27
          </p>
        </div>
      </div>
    </div>
    <div class="bg-gray-500">
      <div
        class="mx-auto py-2 px-11 flex flex-wrap flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center"
      >
        <p class="text-white text-lg text-center sm:text-left ml-5">
          © 2023 ТОО "NurZholy Customs Service". Все права защищены
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    linkAndScrollTop(route) {
      window.scrollTo(0, 0);
      this.$router.push(route)
    },
  },
};
</script>
