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

<style>
button {
  min-width: 10rem;
  max-width: 25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border: none;
  padding: 1rem 2rem 1rem 2rem;
  border-radius: 2rem;
  cursor: pointer;
  outline: none;
}

.primary {
  background-color: #1e95ea;
  color: white;
}

.primary.colorBlindMode {
  background: repeating-linear-gradient(
    45deg,
    #1e95ea,
    #1e95ea 1rem,
    #1376bd 1rem,
    #1376bd 2rem
  );
}

.secondary {
  background-color: #ea361e;
  color: white;
}

.secondary.colorBlindMode {
  background: repeating-linear-gradient(
    90deg,
    #ea361e,
    #ea361e 1rem,
    #b42411 1rem,
    #b42411 2rem
  );
}

.disabled {
  cursor: default !important;
  background-color: #d8d8d8;
  color: white;
}
</style>