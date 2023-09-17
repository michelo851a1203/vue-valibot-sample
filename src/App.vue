<script setup lang="ts">
  import { ref } from 'vue';
  import BaseInputVue from './components/BaseInput.vue';

  const inputRef = ref('');

  // const inputFunction = useDebounceFn((val) => {
  //   console.log(val)
  // }, 1000)
  // watch(inputRef, inputFunction)

</script>

<template>
  <section mt-32>
    <BaseInputVue w-32 :id="12" label="test" v-model="inputRef" />
  </section>
  {{ inputRef }}
  {{ typeof inputRef }}

  <!-- <section w-full h-screen flex items-center justify-center box-border> -->
  <!--   <LoginForm /> -->
  <!-- </section> -->
</template>
<style>
  body {
    margin: 0;
  }
</style>
