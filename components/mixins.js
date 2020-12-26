let myMixin = {
  data () {
    return {
      mixinData: 'Data desde un mixin'
    }
  },
  mounted () {
    console.log('Mixin Init');
    console.log(this.mixinData);
    this.test();
  },
  methods: {
    test() {
      console.log('test desde un método dentro de un mixin');
    }
  }
};

Vue.component('mixins-learn', {
  mixins: [myMixin],
  data () {
    return {
      componentData: 'data componente mixins'
    }
  },
  mounted() {
    console.log('Mounted desde el componente para probar mixins');
  },
  template: `
    <div>
      <h2>Uso de Mixins</h2>
      <p>{{ mixinData }}</p>
    </div>
  `
});
