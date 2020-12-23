Vue.component('child-methods', {
  data () {
    return {
      compName: 'Child Methods component' 
    }
  },
  methods: {
    showCompName() {
      console.log("Called from child component... ",this.compName)
    }
  },
  template: `
    <div>
      <h2>Acceso a métodos del comp Hijo desde el Padre</h2>
    </div>
  `
})
