<script setup lang="ts" generic="T extends string | number | boolean">

  defineOptions({ inheritAttrs: false });

  withDefaults(defineProps<{
    id?: string;
    label?: string;
    tabIndex?: number;
  }>(), {
    id: 'default',
    label: '',
    tabIndex: -1,
  });

  const modelValue = defineModel<T>()
</script>

<template>
  <section w-full flex relative>
    <input 
      v-bind="$attrs"
      :id="id"
      type="text"
      class="peer"
      block
      px-4 py-3
      rounded-md
      text="dark:gray-100"
      bg="dark:[#3F3F46]"
      border="solid 1 black dark:none"
      :tabindex="tabIndex"
      placeholder=" "
      v-model="modelValue"
    >
    <label 
      v-if="label !== ''" 
      :for="id"
      px="2"
      cursor-text
      absolute
      transform
      left="0 peer-placeholder-shown:peer-focus:0 peer-placeholder-shown:2"
      top="0 peer-placeholder-shown:peer-focus:0 peer-placeholder-shown:1/2"
      scale="75 peer-placeholder-shown:peer-focus:75 peer-placeholder-shown:100"
      translate-y="-1/2"
      duration-400
      bg="white dark:transparent dark:peer-focus:[#3F3F46]"
      text="gray-400 peer-focus:blue-800"
      z-10
    >{{ label }}</label>
  </section>
</template>
