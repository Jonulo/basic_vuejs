Vue.component('message', {
  data () {
    return {
      message: 'Hello world from a component'
    }
  },
  template: `
    <div>
      <h2>{{ message }}</h2>
    </div>
  `
});
