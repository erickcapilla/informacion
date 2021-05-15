const fecha = document.getElementById('fecha')
const fecha_btn = document.getElementById('fecha_btn')
fecha_btn.addEventListener('click', () => {
  fecha.innerHTML = Date()
})

const css = document.getElementById('css')
const cambiar = document.getElementById('cambiar')
cambiar.addEventListener('click', () => {
  if (css.getAttribute('href') === '../css/style.css') {
    css.href = '../css/style2.css'
  } else {
    css.href = '../css/style.css'
  }
})