<template>
  <div class="columns is-variable is-5">
    <div
      class="column"
      v-for="(column, i) in columns"
      :key="i"
      :class="i % 2 ? 'cons' : 'pros'">
      <p class="title is-6">{{ column.title }}</p>
      <ul>
        <li
          v-for="(item, j) in column.options"
          :key="j"
          v-html="item" />
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Columns',
  props: {
    columns: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="scss" scoped>
.column {
  position: relative;

  ul {
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
      left: -0.95rem;
      transform: translateY(-50%);
      color: rgba(#8a90a0, 0.5);
      font-size: 1rem;
    }
  }

  &.pros {
    li::before {
      content: '+';
    }
  }

  &.cons {
    li::before {
      content: '-';
    }
  }
}
</style>
