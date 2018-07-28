<template>
  <transition name="fade">
    <div v-if="term">
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
      <svg
        ref="offTarget"
        @click="close"
        class="vocab__off-target"
        :viewBox="viewBox">
        <defs>
          <mask id="vocab-mask">
            <rect
              fill="#ffffff"
              :width="width"
              :height="height" />
            <rect
              fill="#000000"
              :x="termLeft"
              :y="termTop"
              :width="termWidth"
              :height="termHeight" />
          </mask>
        </defs>
        <rect
          class="vocab__off-target-rect"
          x="0"
          y="0"
          width="100%"
          height="100%" />
      </svg>
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
      default: () => ({ x: 0, y: 0, height: 0, width: 0 })
    },
    terms: {
      type: Object,
      default: () => {}
    },
    links: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    };
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
    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
    termWidth() {
      return `${this.position.width}px`;
    },
    termHeight() {
      return `${this.position.height + TERM_PADDING}px`;
    },
    termTop() {
      return `${this.position.y - TERM_PADDING / 2}px`;
    },
    termLeft() {
      return `${this.position.x}px`;
    },
    boxTop() {
      return `${this.position.y + TERM_PADDING}px`;
    },
    boxLeft() {
      return `${this.position.x + this.position.width / 2}px`;
    }
  },
  created() {
    window.addEventListener('resize', this.handelResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handelResize);
  },
  methods: {
    handelResize() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
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
  transform: translate(-50%, 1.5rem);
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
}

.vocab__off-target-rect {
  fill: rgba(0, 0, 0, 0.3);
  mask: url(#vocab-mask);
}
</style>

