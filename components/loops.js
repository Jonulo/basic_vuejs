Vue.component('loops', {
  data () {
    return {
      frameworks: [
        {id: 1, name: 'Vue'},
        {id: 2, name: 'React'},
        {id: 3, name: 'Angular'},
        {id: 4, name: 'Laravel'},
        {id: 5, name: 'Ember'},
      ]
    }
  },
  template: `
    <div>
      <h2>Loops con v-for</h2>
      <ul v-if="frameworks.length">
        <li v-for="(framework, index) in frameworks" :key="framework.id">
          ({{ index }}) - {{ framework.name }}
        </li>
      </ul>
    </div>
  `
})
