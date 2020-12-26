Vue.component('computed-getter-setter', {
  data () {
    return {
      amount: 0
    }
  },
  computed: {
    amountFormatted: {
      get () {
        return `${this.amount}`;
      },
      set (newValue) {
        this.amount = newValue; 
      }
    }
  },
  template: `
    <div>
      <h2>Computed properties con GETTERS y SETTERS</h2>
      <input type="text" v-model="amount">
      <p> {{ amountFormatted | currency_filter('$mxn') }}</p>
    </div>
  `
});
