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

.primary.colorBlindMode {
  background: repeating-linear-gradient(
    45deg,
    #1e95ea,
    #1e95ea 10px,
    #1376bd 10px,
    #1376bd 20px
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
    #ea361e 10px,
    #b42411 10px,
    #b42411 20px
  );
}

.disabled {
  cursor: default !important;
  background-color: #d8d8d8;
  color: white;
}
</style>