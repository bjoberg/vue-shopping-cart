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
  border-radius: 30px;
  text-align: center;
  padding: 4px;
  width: 100px;
  background-color: #16c0b0;
  color: white;
}
</style>