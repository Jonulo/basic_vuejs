Vue.component('methods', { 
  data () {
    return {
      name: 'Jorge',
      surname: 'Nunez Lopez'
    }
  },
  computed: {
    fullName () {
      return `${this.name} ${this.surname}`;
    }
  },
  methods: {
    hello () {
      alert(this.fullName);
    }
  },
  template: `
    <div>
      <h2>Ejecutar métodos con Vue</h2>
      <p @click="hello"><strong>click</strong> para mostrar alerta</p>
    </div>
  `
});
