Vue.component('props', {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      datab: this.user.name
    }
  },
  template: `
    <div>
      <h2>Props en Vuejs</h2>
      <p>{{ user.name }} {{ user.surname }}, edad: {{ user.age }}</p>
      <input type="text" v-model="datab" placeholder="name">
      <p>{{ datab }}</p>
    </div>
  `
});
