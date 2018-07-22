<template>
  <div class="examples">
    <p class="title is-6">Examples</p>
    <ul class="examples-list">
      <li
        class="example"
        v-for="({ href, text }, i) in examples"
        :key="i">
        <a
          :href="href"
          target="_blank">
          {{ text }}
          <font-awesome-icon
            class="example-icon"
            icon="link"
            size="xs" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Examples',
  props: {
    examples: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.examples-list {
  margin-top: 0.5rem;
}

.example {
  display: inline-block;

  &:not(:last-child) {
    margin-right: 2rem;
  }
}

.example-icon {
  margin-bottom: 0.1rem;
  margin-left: 0.25rem;
}
</style>
