Vue.component('parent-data', {
  template: `
    <div>
      <h2>Acceso a datos del comp padre desde el comp hijo</h2>
      <p>{{ $parent.appName }}</p>
    </div>
  `
});
