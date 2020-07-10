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

<style>
.chip {
  border-radius: 3rem;
  text-align: center;
  padding: 0.4rem;
  width: 10rem;
  background-color: #16c0b0;
  color: white;
}
</style>