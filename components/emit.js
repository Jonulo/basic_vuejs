Vue.component('emit', {
  data () {
    return {
      carName: 'spark'
    }
  },
  template: `
    <div>
      <h2>Emitir eventos en Vuejs 2 de Hijo a Padre</h2>
      <p @click="$emit('show_car_name', carName)">
        Click para emitir un evento a la instancia ROOT(el padre en este caso)
      </p>
    </div>
  `
});
