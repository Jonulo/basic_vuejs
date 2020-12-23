Vue.component('child-data', {
  data () {
    return {
      cmpName: 'Child component Data'
    }
  },
  template: `
    <div>
      <h2>Acceso a datos del comp Hijo desde el comp Padre</h2>
    </div>
  `
})
