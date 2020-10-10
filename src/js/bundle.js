import 'normalize.css'
import 'katex/dist/katex.css'
import 'academicons/css/academicons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../scss/main.scss'

import renderMathInElement from 'katex/dist/contrib/auto-render.min.js'
window.onload = function () {
  renderMathInElement(document.body)
}

// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'
// import '@fortawesome/fontawesome-free/js/regular'
// import '@fortawesome/fontawesome-free/js/brands'
