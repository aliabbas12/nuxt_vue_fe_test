<script setup lang="ts">
import NextButton from "~/components/general/NextButton.vue";
const viewport = useViewport();
const isOpen = ref(false);
</script>

<template>
  <div>
    <UButton label="Open signup model" @click="isOpen = true" />

    <UModal v-model="isOpen" :ui="{ rounded: 'rounded-[2.5rem]' }">
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800 relative',
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
            @click="isOpen = false"
          />
        </div>
        <div class="w-full flex justify-center items-center flex-col py-3">
          <svg
            id="mixer"
            xmlns="http://www.w3.org/2000/svg"
            width="40.324"
            height="50.895"
            viewBox="0 0 40.324 50.895"
          >
            <path
              id="Path_606"
              data-name="Path 606"
              d="M580.825,1234.91a65.319,65.319,0,0,0-1.4-7.967,5.688,5.688,0,0,0-2.2-2.984c-1.179-.783-1.692-.911-3.916-.973l-1.719-.056-.033-.652a2.032,2.032,0,0,0-.936-1.871c-.4-.267-.438-.267-2.324-.288a19.493,19.493,0,0,0-2.175.042,2.386,2.386,0,0,0-1.247.919,2.242,2.242,0,0,0-.264,1.221l-.033.685h-6.984c-7.525,0-7.667,0-8.623.436-1.479.637-2.452,1.941-4.536,6.068a38.65,38.65,0,0,0-3.566,8.9,6.771,6.771,0,0,0,.1,2.984,5.519,5.519,0,0,0,3.4,3.566l.505.2,11.889.03h.724v8.94a4.644,4.644,0,0,0-4.638,4.641v7.615a4.646,4.646,0,0,0,4.639,4.641h1.96a4.647,4.647,0,0,0,4.641-4.641v-7.615a4.646,4.646,0,0,0-4.639-4.641v-8.939l10.14.008v8.931a4.645,4.645,0,0,0-4.638,4.641v7.615a4.646,4.646,0,0,0,4.639,4.641h1.96a4.647,4.647,0,0,0,4.641-4.641v-7.615a4.646,4.646,0,0,0-4.639-4.641v-8.93h2.931a5.811,5.811,0,0,0,3.2-.592,6.73,6.73,0,0,0,2.573-2.653C581.138,1240.2,581.273,1238.487,580.825,1234.91Zm-14.074-11.944v-.275c0-.19.014-.329.015-.386.175-.012.653-.027,1.307-.027l1.222.018.042.341.014.329Zm11.9,17.085a4.41,4.41,0,0,1-1.831,2.5l-.075.047c-.667.4-.812.418-13.121.418H560.8c-10.051,0-14.9-.051-15.157-.1h0a3.12,3.12,0,0,1-2.642-2.741c-.113-.8-.05-1.331.56-3.121a44.187,44.187,0,0,1,2.9-6.6c2.095-4.131,2.745-4.961,4.093-5.231.306-.051,5.179-.075,10.462-.075,6.313,0,13.208.035,13.576.1a3.343,3.343,0,0,1,2.75,2.6c.254.8.912,4.6,1.307,7.528A15.7,15.7,0,0,1,578.654,1240.052Zm-23.837,26.321v-7.615a2.68,2.68,0,0,1,2.674-2.679v12.971A2.679,2.679,0,0,1,554.816,1266.373Zm7.315-7.615v7.615a2.682,2.682,0,0,1-2.677,2.677v-12.971A2.682,2.682,0,0,1,562.131,1258.758Zm4.787,7.615v-7.615a2.681,2.681,0,0,1,2.676-2.679v12.971A2.68,2.68,0,0,1,566.918,1266.373Zm7.315-7.615v7.615a2.68,2.68,0,0,1-2.676,2.677v-12.971A2.681,2.681,0,0,1,574.233,1258.758Z"
              transform="translate(-540.751 -1220.119)"
            />
            <path
              id="Path_607"
              data-name="Path 607"
              d="M569.929,1225.1l-.1-.067c-.792-.5-.789-.505-9.133-.483l-9.782,0-.619.233a3.935,3.935,0,0,0-2.56,3.169,3.992,3.992,0,0,0,3.417,4.451c.409.065,4.526.1,8.638.1s8.216-.032,8.613-.1a4.212,4.212,0,0,0,2.895-1.911A4,4,0,0,0,569.929,1225.1Zm-.29,3.4a2,2,0,0,1-.488,1.153l-.086.1c-.43.506-.444.518-7.97.481l-10.04-.047-.323-.216a1.8,1.8,0,0,1-.8-1.734,1.686,1.686,0,0,1,1.124-1.39c.652-.169,16.643-.187,17.284-.018h0A1.916,1.916,0,0,1,569.639,1228.5Z"
              transform="translate(-537.216 -1217.867)"
            />
          </svg>
          <p class="py-5 px-10 lg:px-28 text-[15px] text-center">
            Create an account
          </p>
          <div
            class="my-4 w-full text-center flex justify-center flex-col items-center"
          >
            <u-input
              variant="outline"
              placeholder="ant.count@yahoo"
              size="3xl"
              class="my-4 w-full"
              input-class="rounded-2xl h-16 bg-secondary-bg"
            />
            <u-input
              variant="outline"
              placeholder="password"
              size="3xl"
              type="password"
              class="my-4 w-full"
              input-class="rounded-2xl h-16 bg-secondary-bg"
            >
            </u-input>
            <div class="my-5 w-full">
              <u-checkbox
                variant="outline"
                size="2xl"
                :ui="{
                  strategy: 'overide',
                }"
                checkbox-class=" my-5 w-full h-16 rounded-medium bg-secondary-bg px-3"
              >
                <template #label>
                  <span class="text-[15px] font-light"
                    >you agree to our
                    <label class="underline"> user agreement</label></span
                  >
                </template>
              </u-checkbox>
            </div>
            <NextButton class="w-2/6" />
          </div>
        </div>
        <template #footer>
          <div class="flex justify-center items-center flex-col my-5">
            <span class="text-gray-600 text-[15px]"> or continue with </span>
            <div class="flex justify-between items-center py-5 px-5">
              <UAvatar
                src="/icons/facebook.svg"
                class="rounded-none mx-3"
                :ui="{
                  strategy: 'override',
                  rounded: 'rounded-none',
                }"
                :size="viewport.isLessThan('tablet') ? 'lg' : '2xl'"
              />
              <UAvatar
                src="/icons/google.svg"
                class="rounded-none mx-3"
                :ui="{
                  strategy: 'override',
                  rounded: 'rounded-none',
                }"
                :size="viewport.isLessThan('tablet') ? 'lg' : '2xl'"
              />
              <UAvatar
                src="/icons/linkedin.svg"
                class="rounded-none mx-3"
                :ui="{
                  strategy: 'override',
                  rounded: 'rounded-none',
                }"
                :size="viewport.isLessThan('tablet') ? 'lg' : '2xl'"
              />
            </div>
            <div>got an account? sign in</div>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>
>

<style scoped lang="scss"></style>
