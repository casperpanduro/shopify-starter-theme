<template>
  <form method="post" action="/cart/add">
    <input type="hidden" name="id" :value="productId" />
    <input type="hidden" id="quantity" name="quantity" value="1"/>
    <button type="submit" class="px-6 py-2 text-[12px] md:px-10 md:py-2 sm:text-sm mx-auto text-white bg-black rounded-full inline-flex gap-2 items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
      <span>Buy</span>
    </button>
  </form>
</template>
<script>
export default {
  props: {
    productId: {
      type: Number,
      required: true
    }
  }
}
</script>
