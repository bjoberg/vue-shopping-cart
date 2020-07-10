<template>
  <button
    @click="handleOnClick"
    :class="{primary: isPrimary, secondary: isSecondary, disabled: isDisabled}"
    :disabled="isDisabled"
  >{{title}}</button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: {
      type: String,
      required: true
    },
    variant: {
      type: String,
      required: false,
      default() {
        return "primary";
      }
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default() {
        return false;
      }
    }
  },
  computed: {
    isPrimary() {
      return this.variant === "primary" && !this.isDisabled;
    },
    isSecondary() {
      return this.variant === "secondary" && !this.isDisabled;
    }
  },
  methods: {
    handleOnClick() {
      this.$emit("on-click");
    }
  }
};
</script>

<style>
button {
  min-width: 100px;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: none;
  padding: 10px 20px 10px 20px;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
}

.primary {
  background-color: #1e95ea;
  color: white;
}

.secondary {
  background-color: #ea361e;
  color: white;
}

.disabled {
  cursor: default !important;
  background-color: #d8d8d8;
  color: white;
}
</style>