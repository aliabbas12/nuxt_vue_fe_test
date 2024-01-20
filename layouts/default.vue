<script setup>
import LanguagePane from "~/components/layouts/LanguagePane.vue";
import SectionNavigation from "~/components/layouts/SectionNavigation.vue";
import ListeningAudio from "~/components/general/ListeningAudio.vue";
import LeftSideOver from "~/components/layouts/LeftSideOver.vue";
import SelectFontModel from "~/components/models/SelectFontModel.vue";
import SuccessModel from "~/components/models/SuccessModel.vue";
import IssueModel from "~/components/models/IssueModel.vue";
import PoorTranslationModel from "~/components/models/PoorTranslationModel.vue";
import SelectLanguageModel from "~/components/models/SelectLanguageModel.vue";
import AddWordTranslationModel from "~/components/models/AddWordTranslationModel.vue";
</script>
<template>
  <div class="default-layout bg-transparent light-mode font-sans">
    <head>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
    </head>
    <header class="w-full fixed top-0 bg-transparent flex justify-between z-50">
      <!-- Your header content goes here -->
      <div>
        <img
          src="/menulance-logo-beta.svg"
          alt="Icon"
          class="logo-icon w-[171px] h-[35] ml-[52px]"
        />
      </div>
      <LanguagePane />
    </header>

    <main>
      <LeftSideOver />
      <SectionNavigation />
      <slot />
    </main>
    <ListeningAudio />
    <UNotifications />
    <SelectFontModel />
    <SuccessModel />
    <IssueModel />
    <PoorTranslationModel />
    <SelectLanguageModel />
    <AddWordTranslationModel />
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  header {
    .logo-icon {
      padding: 6px;
    }
  }
}
</style>
