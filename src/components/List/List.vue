<template>
  <ul :class="{list: true, selectable: selectable }">
    <li
      :class="['list-item', selected === i && 'selected']"
      v-for="(item, i) in items"
      :key="i"
      tabindex="0"
      @focus="activeInfo = null"
      @keyup.enter="select(i)"
      @click="select(i)">
      <div
        v-if="selectable"
        class="list-letter is-uppercase">
        {{ String.fromCharCode(65 + i) }}
      </div>
      <div class="item-content">
        <span v-html="isObject ? item[textKey] : item" />
      </div>
      <div
        v-if="details && details[i]"
        :class="['dropdown is-right', i === activeInfo && 'is-active']">
        <div
          class="dropdown-trigger"
          tabindex="-1"
          @click.stop.prevent="activeInfo = activeInfo === null ? i : null">
          <font-awesome-icon
            class="more-info"
            icon="info-circle"
            aria-haspopup="true"
            aria-controls="dropdown-menu" />
        </div>
        <div
          class="dropdown-menu"
          id="dropdown-menu"
          role="menu">
          <div class="dropdown-content">
            <div class="dropdown-item">
              <ul
                class="item-details">
                <li>For example</li>
                <li
                  class="item-detail"
                  v-for="(detail, i) in details[i]"
                  :key="i"
                  v-html="detail" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'List',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    details: {
      type: Array,
      default: () => []
    },
    textKey: {
      type: String,
      default: 'text'
    },
    index: {
      type: Number,
      default: 0
    },
    selected: {
      type: Number || null,
      default: null
    },
    selectable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      activeInfo: null
    };
  },
  computed: {
    isObject() {
      return this.items.length && typeof this.items[0] === 'object';
    }
  },
  mounted() {
    window.addEventListener('click', this.handleClick);
  },
  destroyed() {
    window.removeEventListener('click', this.handleClick);
  },
  methods: {
    select(selectedIdx) {
      if (!this.selectable) return;
      this.$emit('onSelect', { parentIdx: this.index, selectedIdx });
    },
    handleClick(e) {
      const iconElTags = ['svg', 'path'];
      if (iconElTags.includes(e.target.tagName)) return;
      this.activeInfo = null;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~bulma/sass/components/dropdown';

.list {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.list-letter {
  flex: 0 0 auto;
  width: 1rem;
  height: 1rem;
  margin-top: 0.1rem;
  margin-right: 0.75rem;
  transition: all 0.25s ease;
  border-radius: 3px;
  box-shadow: inset 0 0 2px rgba($black, 0.2);
  font-size: 0.5rem;
  line-height: 1rem;
  text-align: center;
}

.list-item {
  display: flex;
  position: relative;
  flex: 0 0 49%;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.5rem 0.5rem 0.75rem;
  transition: all 0.25s ease;
  font-size: 0.8rem;

  @include touch {
    flex: 0 0 100%;
  }
}

.item-content {
  flex: 1 1 auto;
}

.dropdown {
  flex: 0 0 auto;
  width: 1rem;
  height: 1.25rem;
  margin-left: 0.75rem;
}

.dropdown-trigger {
  outline: none;
}

.more-info {
  transition: color 0.25s;
  color: rgba($grey-dark, 0.2);

  &:hover {
    color: rgba($grey-dark, 0.4);
  }
}

.item-details {
  font-weight: 600;
}

.item-detail {
  padding: 0.5rem 0 0;
  color: rgba($grey-dark, 0.8);
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1rem;
}

.selectable {
  .list-item {
    border: 1px solid transparent;
    border-radius: 6px;
    outline: none;
    background-color: rgba($light, 0.3);
    box-shadow: inset 0 0 2px rgba($black, 0.2);

    &:hover,
    &:focus {
      background-color: rgba($light, 0.7);
      color: $black;
      cursor: pointer;
    }

    &:focus {
      border-color: $primary;
    }

    &.selected,
    &.selected:hover {
      background-color: rgba($primary, 0.1);
      color: $primary;

      .list-letter {
        background-color: $primary;
        color: $light;
      }
    }
  }
}
</style>
