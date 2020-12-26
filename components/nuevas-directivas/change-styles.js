Vue.directive('change-styles', (el, binding)  => {
  el.style.background = binding.value.backgroundColor;
  el.style.color = binding.value.color;
})
