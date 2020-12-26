Vue.component('slots-vue', {
  template:`
    <div>
      <h2>Ejemplo de SLOTS</h2>
      <div>
        <header>
          <slot name="header"></slot>
        </header>
        <main>
          <slot></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  `
});
