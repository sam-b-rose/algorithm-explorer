<template>
  <div>
    <p
      class="description"
      v-html="text" />
  </div>
</template>

<script>
export default {
  name: 'Description',
  props: {
    text: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss">
.description {
  margin-bottom: 1.5rem;
}
</style>
