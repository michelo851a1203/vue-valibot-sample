<script setup lang="ts">
  import { ref } from 'vue';
  import { useLogin } from '../composables/useLogin';
  const result = ref('');

  const {
    email,
    password,
    errors,
    loginSubmit,
  } = useLogin((values) => {
    console.log(values);
    result.value = JSON.stringify(values, null, 2);
  })

</script>

<template>
  <section flex="~ col" shadow-lg px-6 py-4>
    <div>
      <input v-model="email" type="text">
      {{ errors.email }}
    </div>
    <div>
      <input v-model="password" type="password">
      {{ errors.password }}
    </div>
    <button @click.prevent="loginSubmit">Submit</button>
    {{ result }}
  </section>
</template>
