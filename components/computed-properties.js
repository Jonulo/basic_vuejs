Vue.component('computed-properties', {
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
  template: `
    <div>
      <h2>Computed properties</h2>
      <p> {{ fullName }}</p>
    </div>
  `
});
