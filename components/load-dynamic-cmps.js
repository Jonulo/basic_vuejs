Vue.component('load-dynamic-cmps', {
  data() {
    return {
      components: ['dynamic-cmp1', 'dynamic-cmp2', 'dynamic-cmp3'],
      currentComponent: 'dynamic-cmp1'
    }
  },
  methods: {
    changeComponent (cmp) {
      this.currentComponent = cmp;
    }
  },
  template: `
    <div>
      <h2>Componentes Dinámicos</h2>
      <button
        v-for="cmp in components"
        :Key="cmp"
        @click="changeComponent(cmp)"
      >
        seleccionar {{ cmp }}
      </button>
      <component :is="currentComponent"/>
    </div>
  `
});
