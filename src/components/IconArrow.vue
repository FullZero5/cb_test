<template>
  <b-icon icon="arrow-up" :rotate="rotate" :variant="variant"></b-icon>
</template>

<script>
export default {
  name:'iconArrow',
  props: {
    rotate: {
        type: Number,
        default: 0
    },
    variant: {
        type: String,
        default: ''
    }
  }
}
</script>

<style>

</style>