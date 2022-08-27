<script setup lang="ts">
import { addDays } from 'date-fns/esm'
const name = $ref('')

const router = useRouter()
const go = () => {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const value = ref(addDays(Date.now(), 1).valueOf())
</script>

<template>
  <div text-center>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <p>
      <em text-sm op75>Opinionated Vite Starter Template</em>
    </p>

    <div py-4 />

    <input
      id="input"
      v-model="name"
      placeholder="What's your name?"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        Go
      </button>
    </div>
    <NCalendar
      v-model:value="value"
      #="{ year, month, date }"
    >
      {{ year }}-{{ month }}-{{ date }}
    </NCalendar>

    <br>

    <NSpace justify="center">
      <NButton>Default</NButton>
      <NButton type="tertiary">
        Tertiary
      </NButton>
      <NButton type="primary">
        Primary
      </NButton>
      <NButton type="info">
        Info
      </NButton>
      <NButton type="success">
        Success
      </NButton>
      <NButton type="warning">
        Warning
      </NButton>
      <NButton type="error">
        Error
      </NButton>
    </NSpace>

    <br>

    <n-input type="text" />
  </div>
</template>
