<template>
  <div class="cases">
    <p class="title is-6">Cases</p>
    <ul>
      <li
        v-for="(useCase, i) in cases"
        :key="i"
        v-html="useCase" />
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Cases',
  props: {
    cases: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.cases {
  ul {
    margin-bottom: 1.5rem;
    padding: 0.5rem 1.5rem;
    border-radius: 6px;
    background: rgba($light, 0.3);
    box-shadow: inset 0 0 2px rgba($black, 0.2);
    list-style: none;
  }

  li {
    position: relative;
    margin-bottom: 0.5rem;
    font-size: 0.85rem;

    &::before {
      content: '•';
      position: absolute;
      top: 11px;
      left: -0.85rem;
      transform: translateY(-50%);
      color: rgba(#8a90a0, 0.5);
    }
  }
}
</style>
