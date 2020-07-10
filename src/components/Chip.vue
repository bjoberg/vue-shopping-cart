<template>
  <div class="chip">{{title}}</div>
</template>

<script>
export default {
  name: "Chip",
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss">
.chip {
  border-radius: pxToRem(30);
  text-align: center;
  padding: pxToRem(4);
  width: pxToRem(100);
  background-color: #16c0b0;
  color: white;
}
</style>