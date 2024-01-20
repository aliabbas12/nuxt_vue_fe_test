<script setup lang="ts">
import { computed } from "vue";
import { useModelStore } from "~/store/models";
import { useTranslationStore } from "~/store/translation";

const modelStore = useModelStore();
const translationStore = useTranslationStore();
const isOpenLanguageModel = computed({
  get: () => modelStore.getSelectedLanguageModelState,
  set: (value) => {
    modelStore.setSelectLanguageModelValue(value);
  },
});

const selectedLanguageForTranslation = computed({
  get: () => translationStore.getTranslationLanguageState,
  set: (value) => {
    translationStore.setTranslationLanguageState(value);
  },
});

const languages = [
  { value: "en", label: "english" },
  { value: "it", label: "italian" },
  { value: "es", label: "spanish" },
];
watch(selectedLanguageForTranslation, () => {
  console.log("I am in Selected language:");
  const audio = new Audio("/sounds/loud/success-synth.mp3");
  audio.play();
});
</script>

<template>
  <div>
    <UModal v-model="isOpenLanguageModel" :ui="{ rounded: 'rounded-[2.5rem]' }">
      <UCard
        :ui="{
          ring: '',

          divide: 'divide-y divide-gray-100 dark:divide-gray-800 relative px-5',
        }"
      >
        <div
          class="absolute top-5 right-5 text-sm cursor-pointer text decoration-0"
        >
          <u-button
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isOpenLanguageModel = false"
          />
        </div>
        <div class="w-full flex justify-center items-center flex-col py-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="53.899"
            height="51.514"
            viewBox="0 0 53.899 51.514"
          >
            <g
              id="Group_752"
              data-name="Group 752"
              transform="translate(-147.788 -1171.638)"
            >
              <path
                id="Path_547"
                data-name="Path 547"
                d="M159.058,1178.894c-2.4,2.864-2.591,3.707-2.591,3.9a1.214,1.214,0,0,0,.1.5,31.78,31.78,0,0,0,3.752,2.989,13.37,13.37,0,0,0,3.278-.752l3.389-.982.994,1.081a6.472,6.472,0,0,0,1.036.951,12.383,12.383,0,0,0,2.5-.115l2.649-.256.973,1.2c.285.353.654.806,1,1.227l.2.249c1.072,1.326,1.071,1.324,3.85.563l.513-.141c3.532-.994,3.532-1.1,3.532-1.787a28.127,28.127,0,0,0-2.164-7.545c-1.988-4.359-4.96-7.242-8.37-8.115a11.645,11.645,0,0,0-4.35-.043C165.892,1172.564,162.237,1175.074,159.058,1178.894Zm7.964-4.008a8.458,8.458,0,0,1,4.686-1.091,5.089,5.089,0,0,1,2.916.622h0c3.219,1.549,6.147,6.194,7.291,11.558l.217.862-1.9.506a13.542,13.542,0,0,1-1.736.408c-.221,0-.342,0-1.865-1.8a14.488,14.488,0,0,0-1.6-1.726,11.313,11.313,0,0,0-2.525.094l-2.623.25-1.1-1.15a4.893,4.893,0,0,0-1.133-.991,13.444,13.444,0,0,0-3.285.76c-1.7.488-3.142.886-3.236.911-.076.026-.374.12-1.277-.676l-1.057-.925,1.472-1.809A21.745,21.745,0,0,1,167.022,1174.886Z"
                transform="translate(6.406 0)"
              />
              <path
                id="Path_548"
                data-name="Path 548"
                d="M153.632,1177.854c-1.573-1.55-2.962-2.828-3.128-2.951a.841.841,0,0,0-.867.078c-.337.177-.487.355-.487.939,0,.471.6,1.125,3.785,4.114,1.858,1.752,2.131,1.973,2.44,1.973a1.007,1.007,0,0,0,.982-1.05C156.358,1180.556,156.358,1180.532,153.632,1177.854Z"
                transform="translate(1.005 2.347)"
              />
              <path
                id="Path_549"
                data-name="Path 549"
                d="M175.531,1182.769c.429.13.959-.028,4.792-1.855a1.4,1.4,0,0,0,.876-.921.953.953,0,0,0-.323-.841.694.694,0,0,0-.547-.28,9.049,9.049,0,0,0-2.725,1h0a16.317,16.317,0,0,0-2.5,1.314,1.2,1.2,0,0,0-.083,1.263A1.08,1.08,0,0,0,175.531,1182.769Z"
                transform="translate(19.989 5.339)"
              />
              <path
                id="Path_550"
                data-name="Path 550"
                d="M155.8,1180.835l-.268-.269-3.466-.021a22.852,22.852,0,0,0-3.747.1l-.219-.375.214.379a1.049,1.049,0,0,0-.384,1.441c.233.436.412.53,4.116.53h3.337l.363-.327a1.038,1.038,0,0,0,.372-.732A.986.986,0,0,0,155.8,1180.835Z"
                transform="translate(0 6.372)"
              />
              <path
                id="Path_551"
                data-name="Path 551"
                d="M153.279,1187.292c1.715-1.311,3.09-2.458,3.247-2.642.226-.285.382-.65-.176-1.211a1.082,1.082,0,0,0-.718-.376.847.847,0,0,0-.473.174l0,0c-.17.115-1.4,1.053-3.294,2.512-1.929,1.512-2.849,2.256-2.934,2.558a.925.925,0,0,0,.388,1.145C149.773,1189.815,149.91,1189.928,153.279,1187.292Z"
                transform="translate(0.793 8.432)"
              />
              <path
                id="Path_552"
                data-name="Path 552"
                d="M178.828,1184.744c-2.087-1.23-2.856-1.6-3.269-1.6a.621.621,0,0,0-.417.17l-.012.01a.964.964,0,0,0-.3,1.175c.134.316.615.65,2.861,1.976a13.228,13.228,0,0,0,3.08,1.611,1.276,1.276,0,0,0,.982-.8C181.873,1186.679,181.9,1186.552,178.828,1184.744Z"
                transform="translate(19.896 8.494)"
              />
              <path
                id="Path_553"
                data-name="Path 553"
                d="M159.333,1185.536a5.592,5.592,0,0,0-1.95-.716.594.594,0,0,0-.224.036c-.264.106-.5.508-.827,1.389a37.024,37.024,0,0,0-1.971,9.441c-.565,8.218,2.16,14.066,7.882,16.918,4.406,2.2,11.619,2.39,16.423.427a14.3,14.3,0,0,0,5.915-4.609c3.674-5.14,3.938-13.614.709-22.668-.567-1.6-1.034-1.8-1.378-1.8a5.532,5.532,0,0,0-1.349.551l-.518.276c-.567.3-1.25.666-1.7.925l-1.382.719-2.006-1.59c-1.383-1.125-1.733-1.323-2.028-1.323a11.208,11.208,0,0,0-2.466.912l0,0c-2.346,1.043-2.616.967-2.758.925-.115-.012-.568-.162-1.564-.5l-.109-.036-1.194-.433-5.548,2.1Zm7.47,1.025,1.922.7c1.307.49,1.309.487,3.624-.577l2.193-.977.146.038c.132.033.2.051,2.065,1.519l0,0,.108.085c1.895,1.505,1.895,1.5,4.038.36,2.244-1.173,2.251-1.159,2.511-.9a28.236,28.236,0,0,1,1.272,4.364,25.045,25.045,0,0,1,.659,7.322,15.831,15.831,0,0,1-.478,4.157c-1.509,5.774-5.6,8.989-12.171,9.559q-1.03.1-2.025.1a16.739,16.739,0,0,1-7.534-1.674c-4.248-2.073-6.478-5.951-6.808-11.852a32.8,32.8,0,0,1,1.293-9.94l.5-1.641,1.623.845a6.224,6.224,0,0,0,1.385.532,24.275,24.275,0,0,0,2.9-.97Z"
                transform="translate(4.798 8.764)"
              />
            </g>
          </svg>
          <p class="py-5 px-24 text-center">
            Choose another language to translate from the drop down
          </p>
          <u-select
            v-model="selectedLanguageForTranslation"
            variant="outline"
            placeholder="Choose language"
            :options="languages"
            size="3xl"
            class="my-4 w-full"
            select-class="rounded-3xl h-16 text-gray-500 bg-secondary-bg px-3"
          >
            <template #trailing>
              <u-icon
                name="ph:caret-up-down-fill"
                dynamic
                class="text-gray-500 h-[2rem] text-[15px]"
                size="sm"
              />
            </template>
          </u-select>
          <u-checkbox
            variant="outline"
            size="2xl"
            :ui="{
              strategy: 'overide',
            }"
            class="mt-5"
            checkbox-class="h-16  rounded-medium bg-black px-3"
            @change="model.setSelectLanguageModelValue(false)"
          >
            <template #label>
              <span class="text-[15px] font-light">Don't show this again</span>
            </template>
          </u-checkbox>
        </div>
      </UCard>
    </UModal>
  </div>
</template>
>

<style scoped lang="scss"></style>
