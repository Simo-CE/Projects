<template>
  <div style="height: 100vh;">
    <slot />
  </div>
</template>

<script>
export default {
  setup() {
    return {
      visibleLeft: true
    }
  },
  head: {
    bodyAttrs: {
      class: 'h-full'
    },
    htmlAttrs: {
      class: 'h-full bg-gray-50'
    }
  },
};
</script>