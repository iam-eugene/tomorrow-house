const sectionHeaderIconBtn = document.querySelectorAll(
  '.product-section-header .icon-btn'
)

function showFullSection() {
  const section = this.parentNode.parentNode
  section.classList.add('is-open')
}

sectionHeaderIconBtn.forEach(function (btn) {
  btn.addEventListener('click', showFullSection)
})
