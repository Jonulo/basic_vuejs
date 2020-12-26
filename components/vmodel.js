Vue.component('vmodel', {
  data() {
    return {
      framework: 'vuejs 2',
      frameworks: []
    }
  },
  template: `
    <div>
      <h2>Trabajando con vmodel</h2>
      <input v-model="framework" type="text" v-focus>
      <p>El framework escogido es: {{ framework }}</p>
      <h2>Vmodel con array</h2>
      <input type="checkbox" id="vuejs2" value="Vuejs 2" v-model="frameworks">
      <label for="vuejs2">Vuejs 2</label>
      <input type="checkbox" id="reactjs" value="Reactjs" v-model="frameworks">
      <label for="reactjs">React js</label>
      <input type="checkbox" id="angular" value="Angular" v-model="frameworks">
      <label for="angular">Angular</label>
      <p>Frameworks seleccionados: {{ frameworks }}</p>
    </div>
  `
})
