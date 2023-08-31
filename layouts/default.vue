<template>
  <div class="font-sans">
    <header
      class="h-[121px] flex items-center justify-between px-[40px] max-w-[1440px] mx-auto"
    >
      <NuxtLink to="/">
        <img
          src="@/assets/icons/logo.svg"
          class="hover:scale-110 transition-all"
        />
      </NuxtLink>

      <div class="w-[445px] flex items-center gap-[91px]">
        <nav class="text-xl flex gap-[58px]">
          <NuxtLink class="hover:cursor-pointer">Works</NuxtLink>
          <NuxtLink class="hover:cursor-pointer">About</NuxtLink>
        </nav>
        <div class="flex items-center gap-4 min-w-[210px]">
          <button
            class="rounded-full border-whiteShade border-2 p-[10px] hover:scale-110 transition-all"
          >
            <img src="@/assets/icons/uk.svg" />
          </button>
          <button
            class="bg-black px-8 py-4 text-white rounded-full hover:scale-110 transition-all"
          >
            Let's work
          </button>
        </div>
      </div>
    </header>

    <slot />

    <footer
      class="bg-pink h-[900px] px-[112px] pt-[140px] w-full overflow-hidden"
    >
      <div class="max-w-[1217px] relative h-full mx-auto">
        <h2 class="text-base mb-14">Is there a project?</h2>
        <div class="flex justify-between flex-wrap max-w-[984px]">
          <p class="text-[112px] w-[506px] underline leading-[112px]">
            Let’s work together
          </p>
          <ul class="text-base flex flex-col gap-9 leading-5 w-[152px]">
            <li>
              <p class="mb-[12px]">For all questions</p>
              <a href="tel:+79202780068" class="block">+7 (920) 278-00-68</a>
              <a href="mailto:qtim@agency.com" class="block">qtim@agency.com</a>
            </li>
            <li>
              <p class="mb-[12px]">Office in Russia</p>
              <address class="not-italic mb-2">
                139 Ruben Station Lake Drew, NM 52678
              </address>
              <button class="rounded-full bg-black p-[10px]">
                <img src="@/assets/icons/location.svg" />
              </button>
            </li>
            <li>
              <p class="mb-[12px]">Office in Dubai</p>
              <address class="not-italic mb-2">
                139 Ruben Station Lake Drew, NM 52678
              </address>
              <button class="rounded-full bg-black p-[10px]">
                <img src="@/assets/icons/location.svg" />
              </button>
            </li>
          </ul>
        </div>
        <nav class="absolute bottom-0">
          <ul class="flex gap-8">
            <a href="#" class="underline">Facebook</a>
            <a href="#" class="underline">Instagram</a>
            <a href="#" class="underline">Telegram</a>
          </ul>
        </nav>
        <button
          class="bg-black text-[32px] rounded-full pb-[50px] text-white w-[358px] h-[358px] absolute bottom-0 left-1/2 -translate-x-2/3 translate-y-1/2 hover:scale-110 transition-all"
        >
          Go
        </button>
        <nav class="absolute bottom-0 right-[112px]">
          <ul class="flex gap-8">
            <a href="#" class="underline">Behance</a>
            <a href="#" class="underline">Linkedin</a>
            <a href="#" class="underline">Privacy Policy</a>
          </ul>
        </nav>
      </div>
    </footer>
  </div>
</template>
