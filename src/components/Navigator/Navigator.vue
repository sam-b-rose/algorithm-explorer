<template>
  <div class="navigator has-text-white">
    <div class="navigator-container">
      <div class="progress-percent">{{ currentProgress }} complete</div>
      <div class="progress">
        <div
          class="current-progress"
          :style="{ width: currentProgress }" />
      </div>
    </div>
    <div class="controls">
      <font-awesome-icon
        class="control"
        :class="!hasBack && 'disabled'"
        icon="chevron-up"
        @click="back" />
      <font-awesome-icon
        class="control"
        :class="!hasNext && 'disabled'"
        icon="chevron-down"
        @click="next" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navigator',
  props: {
    step: {
      type: Number,
      default: 0
    },
    total: {
      type: Number,
      default: 1
    },
    canProgress: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentProgress() {
      return `${Math.round(this.step / this.total * 100)}%`;
    },
    hasBack() {
      return this.step !== 0;
    },
    hasNext() {
      return this.canProgress && this.step !== this.total;
    }
  },
  methods: {
    back() {
      if (this.hasBack) this.$emit('back');
    },
    next() {
      if (this.hasNext) this.$emit('next');
    }
  }
};
</script>

<style lang="scss" scoped>
.navigator {
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  height: $navigator-height;
  transform: translateY(100%);
  transition: all 0.45s;
  background-color: $dark;

  &.slide-up {
    transform: translateY(0);
  }
}

.navigator-container {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  max-width: 800px;
  height: 100%;
  margin: auto;
  padding: 0 2rem;
}

.progress {
  position: relative;
  width: 200px;
  height: 4px;
  overflow: hidden;
  border-radius: 12px;
  background-color: rgba($light, 0.2);
}

.current-progress {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  transition: width 0.25s ease;
  border-radius: 12px;
  background-color: $white;
}

.progress-percent {
  margin-bottom: 0.25rem;
  font-size: 0.5rem;
}

.controls {
  display: flex;
  position: absolute;
  top: 50%;
  right: 1rem;
  align-items: center;
  transform: translateY(-50%);
  border: 1px solid rgba($light, 0.3);
  border-radius: 4px;
}

.control {
  width: $navigator-height - 25;
  height: $navigator-height - 25;
  padding: 0.4rem;
  transition: all 0.25s ease;
  color: rgba($light, 0.6);
  cursor: pointer;

  &:not(:last-child) {
    border-right: 1px solid rgba($light, 0.3);
  }

  &:hover {
    color: rgba($light, 0.8);
  }

  &.disabled {
    color: rgba($light, 0.2);
    cursor: not-allowed;
  }
}
</style>
