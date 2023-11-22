<template>
  <div
    class="body-font justify-center flex xl:text-3xl text-teal-950 px-1 lg:px-16 pb-10 bg-[url('@/assets/Astana.jpg')] bg-cover bg-no-repeat bg-center bg-local"
  >
    <div
      class="py-1 mx-auto flex xl:justify-center md:flex-nowrap flex-wrap z-10 pl-2 mt-20 bg-white rounded-sm"
    >
      <div class="text-teal-950 flex-col 2xl:mr-10 mb-6 pr-10 z-10 xl:p-10 p-4">
        <h1 class="lg:mb-6 mb-4 font-extrabold">КОНТАКТЫ</h1>
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
</template>

<script >
export default {
  name: "Contact",
};
</script>
