<template>
  <button
    @click="handleOnClick"
    :class="{
      primary: isPrimary, 
      secondary: isSecondary, 
      disabled: isDisabled, 
      colorBlindMode: enableColorBlindMode
    }"
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
    enableColorBlindMode: {
      type: Boolean,
      required: false,
      default() {
        false;
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

<style lang="scss">
button {
  min-width: pxToRem(100);
  max-width: pxToRem(250);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: none;
  padding: pxToRem(10) pxToRem(20) pxToRem(10) pxToRem(20);
  border-radius: pxToRem(20);
  cursor: pointer;
  outline: none;
}

.primary {
  background-color: map-get($primary, "main");
  color: map-get($primary, "contrastText");
}

.primary.colorBlindMode {
  background: repeating-linear-gradient(
    45deg,
    map-get($primary, "main"),
    map-get($primary, "main") pxToRem(10),
    map-get($primary, "dark") pxToRem(10),
    map-get($primary, "dark") pxToRem(20)
  );
}

.secondary {
  background-color: map-get($secondary, "main");
  color: map-get($secondary, "contrastText");
}

.secondary.colorBlindMode {
  background: repeating-linear-gradient(
    90deg,
    map-get($secondary, "main"),
    map-get($secondary, "main") pxToRem(10),
    map-get($secondary, "dark") pxToRem(10),
    map-get($secondary, "dark") pxToRem(20)
  );
}

.disabled {
  cursor: default !important;
  background-color: #d8d8d8;
  color: white;
}
</style>