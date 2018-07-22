<template>
  <transition name="fade">
    <div v-if="term">
      <div
        class="vocab__term"
        :style="termStyle">
        {{ term }}
      </div>
      <div
        class="vocab__box"
        :style="{ top: boxTop , left: boxLeft }">
        {{ description }}
        <div class="vocab__link">
          <a
            target="_blank"
            :href="link">
            Learn more
          </a>
        </div>
      </div>
      <div
        ref="offTarget"
        class="vocab__off-target"
        @click="close" />
    </div>
  </transition>
</template>

<script>
const TERM_PADDING = 5;

export default {
  name: 'Vocab',
  props: {
    term: {
      type: String,
      default: null
    },
    position: {
      type: Object,
      default: () => ({ x: 0, y: 0 })
    },
    terms: {
      type: Object,
      default: () => {}
    },
    links: {
      type: Object,
      default: () => {}
    },
    fontStyle: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    description() {
      if (!this.term) return '';
      return this.terms[this.term.toLowerCase()];
    },
    link() {
      if (!this.term) return '';
      const key = this.term.toLowerCase();
      return this.links.hasOwnProperty(key)
        ? this.links[key]
        : `https://en.wikipedia.org/wiki/${this.term}`;
    },
    termStyle() {
      return {
        ...this.fontStyle,
        top: this.termTop,
        left: this.termLeft,
        lineHeight: this.termLineHeight
      };
    },
    termLineHeight() {
      return `calc(${this.fontStyle.lineHeight} - ${TERM_PADDING}px + 1px)`;
    },
    termTop() {
      return `${this.position.y - TERM_PADDING + 1}px`;
    },
    termLeft() {
      return `${this.position.x - TERM_PADDING}px`;
    },
    boxTop() {
      return `${this.position.y + TERM_PADDING}px`;
    },
    boxLeft() {
      return `${this.position.x + TERM_PADDING}px`;
    }
  },
  methods: {
    close(e) {
      this.$emit('close', e);
    }
  }
};
</script>

<style lang="scss">
.js-vocab {
  color: $primary;
  white-space: nowrap;
  cursor: pointer;
}

.vocab__term {
  position: fixed;
  z-index: 99;
  padding: 5px;
  background-color: $white;
  color: $blue;
  cursor: pointer;
}

.vocab__box {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  max-width: 300px;
  padding: 1rem;
  transform: translate(-25%, 1.5rem);
  opacity: 1;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  font-size: 0.75rem;

  .js-vocab {
    color: $black;
    font-weight: 500;
    pointer-events: none;
  }
}

.vocab__link {
  margin: 0.5rem 0 0;
}

.vocab__off-target {
  position: fixed;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>

