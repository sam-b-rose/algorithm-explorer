<template>
  <div class="step">
    <header v-if="title">
      <span class="step-number">{{ step }}. </span>
      <span
        class="step-title"
        v-html="title" />
    </header>
    <div class="step-content">
      <slot name="content" />
    </div>
    <footer
      v-if="$slots.footer"
      class="step-footer">
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Step',
  props: {
    title: {
      type: String,
      default: ''
    },
    step: {
      type: Number,
      default: 1
    }
  }
};
</script>

<style lang="scss">
.step {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: calc(100vh - #{$navigator-height});
  outline: none;
}

.step-number {
  display: inline-block;
  margin-right: 1rem;
  font-family: $family-mono;
  font-weight: 600;
}

.step-title {
  display: inline-block;
  margin-bottom: 1rem;

  @include touch {
    padding: 2rem 0;
  }
}

.step-content {
  padding: 0 2rem;

  @include touch {
    padding: 2rem 0;
  }
}
</style>
