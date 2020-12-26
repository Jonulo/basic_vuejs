Vue.component('watchers', {
  data () {
    return {
      user: '',
      oldUser: ''
    }
  },
  methods: {
    async randomUser () {
      try {
        const data = await fetch('https://randomuser.me/api/');
        const json = await data.json();
        const user = json.results[0].name;
        this.user = `${user.title} ${user.first} ${user.last}`
        console.log(json.results[0].name)       
      }catch (e) {
        console.log(e)
      }
    }
  },
  watch: {
    user (newVal, oldVal) {
      this.user = newVal;
      this.oldUser = oldVal;
    }
  },
  template: `
    <div>
      <h2>Watchers en Vuejs</h2>
      <button @click="randomUser">Get Randoms User</button>
      <p>Nuevo usuario: {{ user }}</p>
      <p>Usuario anterior: {{ oldUser }}</p>
    </div>
  `
});
