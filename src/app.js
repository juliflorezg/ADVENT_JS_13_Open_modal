const $button = document.getElementById('elgato-keylight')
const $closeButton = document.getElementById('closeButton')
const $overlay = document.getElementById('overlay')

document.addEventListener('click', e => {
  if (e.target === $button) {
    e.preventDefault()
    $overlay.classList.add('show')
  }
  if (e.target === $closeButton || e.target === $closeButton.children[0]) {
    $overlay.classList.remove('show')
  }
})
