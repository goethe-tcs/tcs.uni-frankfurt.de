import 'katex/dist/katex.css'
import 'academicons/css/academicons.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import renderMathInElement from 'katex/dist/contrib/auto-render.min.js'

window.onload = function () {
  renderMathInElement(document.body, {
    delimiters: [
      { left: '$$', right: '$$', display: true },
      { left: '$', right: '$', display: false }
    ],
    throwOnError: false
  })
}
