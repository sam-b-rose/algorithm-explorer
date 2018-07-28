<template>
  <div id="app">
    <x-particles
      class="particles"
      :config="particlesConfig" />
    <section
      class="scroller"
      ref="scroller"
      @scroll="handleScroll">
      <div
        class="intro"
        tabindex="-1"
        @keyup.stop.prevent>
        <h1 class="title is-spaced">Algorithm Explorer</h1>
        <h2 class="subtitle">This framework explores machine learning techniques top down.</h2>
        <div class="content">
          <p>
            Rather than dive straight into algorithms, you begin with a question.
            <br>
            <strong>What are you trying to solve?</strong>
          </p>
          <p>It is designed to provide a clear overview on data science techniques and introduce the reader to a foundation of machine learning algorithms.</p>
        </div>
        <div class="start field is-grouped is-grouped-centered">
          <div class="control">
            <button
              class="button is-link"
              tabindex="0"
              @click="start">
              Start
            </button>
          </div>
          <div class="control">
            <div class="field-label is-small">
              <label class="label">or press Enter</label>
            </div>
          </div>
        </div>
      </div>
      <div class="steps-container">
        <Step
          v-for="(step, i) in steps"
          :key="i"
          :step="i + 1"
          :data-index="i"
          :title="step.title">
          <div slot="content">
            <Description
              v-if="step.description"
              :text="step.description" />
            <Cases
              v-if="step.cases"
              :cases="step.cases" />
            <p
              v-if="step.optionsTitle"
              class="title is-6">{{ step.optionsTitle }}</p>
            <List
              v-if="step.options"
              :index="i"
              :items="step.options"
              :details="step.optionDetails"
              :selected="treePath.length ? treePath[i] : null"
              :selectable="step.hasOwnProperty('children')"
              @onSelect="selectStep"/>
            <Columns
              v-if="step.columns"
              :columns="step.columns" />
            <Examples
              v-if="step.examples"
              :examples="step.examples" />
            <div
              v-if="i === treeDepth"
              class="again field is-grouped is-grouped-centered"
              :style="{opacity: (currentStep === treeDepth) ? '1' : '0'}">
              <div class="control">
                <button
                  class="button is-text"
                  tabindex="0"
                  @keyup.enter.stop.prevent="goToStep(currentStep - 1)"
                  @click="goToStep(currentStep - 1)">
                  Go back
                </button>
              </div>
              <p>or</p>
              <div class="control">
                <button
                  class="button is-text"
                  tabindex="0"
                  @keyup.enter="goToStep(0, true)"
                  @click="goToStep(0, true)">
                  explore more
                </button>
              </div>
            </div>
          </div>
        </Step>
      </div>
      <Vocab
        :term="term"
        :terms="terms"
        :links="termLinks"
        :position="vocabPos"
        @close="unsetTerm" />
    </section>
    <Navigator
      :class="{ 'slide-up': scrolled }"
      :step="currentStep"
      :total="treeDepth"
      :can-progress="canProgress"
      @back="goToStep(currentStep - 1)"
      @next="goToStep(currentStep + 1)" />
  </div>
</template>

<script>
import VueScrollTo from 'vue-scrollto';
import throttle from 'lodash/throttle';
import findAndReplaceDOMText from 'findandreplacedomtext';

import particlesConfig from './config/default.json';
import tree from './content/inital';
import terms from './content/terms.json';
import termLinks from './content/termLinks';

import Cases from './components/Cases';
import Columns from './components/Columns';
import Examples from './components/Examples';
import Description from './components/Description';
import List from './components/List';
import Navigator from './components/Navigator';
import Step from './components/Step';
import Vocab from './components/Vocab';

export default {
  name: 'App',
  components: {
    Cases,
    Columns,
    Description,
    Examples,
    List,
    Navigator,
    Step,
    Vocab
  },
  data() {
    return {
      terms,
      termLinks,
      tree,
      particlesConfig,
      treeDepth: 2,
      treePath: [],
      stepNodes: [],
      term: null,
      scrolled: false,
      currentStep: null,
      throttleHandleKeydown: null,
      vocabPos: { x: 0, y: 0, height: 0, width: 0 }
    };
  },
  computed: {
    steps() {
      return this.treePath.reduce(
        (steps, pathIdx) => {
          const prevStep = steps[steps.length - 1];
          const nextStep = prevStep.children[pathIdx];
          return steps.concat([nextStep]);
        },
        [this.tree]
      );
    },
    stepsMiddle() {
      return this.stepNodes.map(s => s.offsetTop + s.clientHeight / 2);
    },
    canReverse() {
      return this.currentStep !== null && this.currentStep !== 0;
    },
    canProgress() {
      return (
        this.currentStep === null || this.currentStep < this.treePath.length
      );
    }
  },
  watch: {
    steps: 'getStepNodes',
    currentStep: 'setFocus'
  },

  /* ♻️ Lifecycle Hooks */
  created() {
    this.throttleHandleKeydown = throttle(this.handleKeydown, 500);
    window.addEventListener('keydown', this.throttleHandleKeydown);
    window.addEventListener('resize', this.handelResize);
  },
  mounted() {
    this.getStepNodes();
  },
  destroyed() {
    window.removeEventListener('keydown', this.throttleHandleKeydown);
    window.removeEventListener('resize', this.handelResize);
  },

  methods: {
    /* 🌎 Global Handlers */
    handelResize() {
      if (!this.term) return;
      const activeTerm = document.querySelector('.vocab--active');
      const { left, top, width, height } = activeTerm.getClientRects()[0];
      this.vocabPos = { x: left, y: top, width, height };
    },
    handleScroll(e) {
      const { scrollTop, clientHeight } = this.$refs.scroller;
      const middle = scrollTop + clientHeight / 2;
      this.currentStep = this.closest(middle, this.stepsMiddle);
      this.scrolled = e.currentTarget.scrollTop > 70;
    },
    handleKeydown(e) {
      // Enter
      if (e.keyCode === 13 && this.currentStep === null)
        return this.goToStep(0);
      // Up
      if (e.keyCode === 38 && this.canReverse)
        return this.goToStep(this.currentStep - 1);
      // Down
      if (e.keyCode === 40 && this.canProgress)
        return this.goToStep(
          this.currentStep === null ? 0 : this.currentStep + 1
        );
      // Disallow arrow scrolling
      if ([38, 40].includes(e.keyCode)) e.preventDefault();
    },

    /* Step Navigators */
    selectStep({ parentIdx, selectedIdx }) {
      this.treePath = this.treePath.slice(0, parentIdx).concat([selectedIdx]);
      setTimeout(() => this.goToStep(this.treePath.length), 400);
    },
    goToStep(index, reset = false) {
      this.$nextTick(() => {
        const el = document.querySelector(`.step[data-index="${index}"]`);
        const onDone = reset ? this.start : null;
        VueScrollTo.scrollTo(el, { container: this.$refs.scroller, onDone });
        this.initVocab(el);
      });
    },
    getStepNodes() {
      this.$nextTick(() => {
        const nodes = document.querySelectorAll('.step');
        this.stepNodes = [].slice.call(nodes);
      });
    },

    /* Actions */
    start() {
      this.treePath = [];
      this.goToStep(0, true);
    },

    /* Terms & Vocab */
    initVocab(el) {
      if (el.querySelectorAll('.js-vocab').length) return;
      const $descriptions = el.querySelectorAll('.description');
      const $columns = el.querySelectorAll('.columns');
      const $vocabable = [...$descriptions, ...$columns];
      Object.keys(this.terms).forEach(term => {
        $vocabable.forEach(el =>
          findAndReplaceDOMText(el, {
            find: new RegExp(`(?:^|[^\\S-])(${term})(?:$|[^\\S-])`, 'i'),
            wrap: 'span',
            wrapClass: 'js-vocab'
          })
        );
        const $vocabTargets = document.querySelectorAll('.js-vocab');
        $vocabTargets.forEach($t => ($t.onclick = this.setTerm.bind(this)));
      });
    },
    setTerm({ target }) {
      target.classList.add('vocab--active');
      this.term = target.textContent.trim();
      const { left, top, width, height } = target.getClientRects()[0];
      this.vocabPos = { x: left, y: top, width, height };
    },
    unsetTerm() {
      const activeTerm = document.querySelector('.vocab--active');
      this.term = null;
      activeTerm.classList.remove('vocab--active');
    },
    setFocus() {
      const el = document.querySelector(
        `.step[data-index="${this.currentStep}"]`
      );
      el.focus();
    },

    /* Utilities */
    closest(target, values) {
      const closest = values.reduce(function(prev, curr) {
        return Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev;
      }, 0);
      const index = values.indexOf(closest);
      return index === -1 ? 0 : index;
    }
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-size: 20px !important;
}

::selection {
  background: rgba($purple, 0.15);
}

.particles {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
}

.scroller {
  position: relative;
  width: 100%;
  height: 100%;
  padding-bottom: $navigator-height;
  overflow: auto;
}

.intro,
.steps-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
  outline: none;
}

.intro {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  min-height: 100%;
}

.start {
  margin-top: 3rem;

  .field-label {
    padding-top: 0.5rem;
    line-height: 1.25rem;
    @include tablet() {
      line-height: 1.75rem;
    }
  }
}

.again {
  align-items: center;
  margin: 3rem 0;
  transition: opacity 0.5s ease 0.5s;

  .control {
    margin: 0 0.25rem !important;
  }

  @include touch() {
    flex-flow: row wrap;
    margin: 3rem 0;
  }
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.5s ease 0.5s;
}

.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
