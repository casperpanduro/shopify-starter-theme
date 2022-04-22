<template>
  <div>
    <div class="fixed inset-0 bg-black opacity-20"></div>
    <div class="fixed top-0 right-0 bottom-0 bg-white w-full sm:w-[450px] flex items-stretch">
      <div class="absolute top-8 right-8">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
    name: 'PanelSlide',
}
</script>
