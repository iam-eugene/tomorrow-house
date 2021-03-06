const orderCta = document.querySelector('.order-cta')
const [orderCtaBookmarkBtn, orderCtaBuyBtn] = orderCta.children

const orderModal = document.querySelector('.order-form-modal')
const orderModalOverlay = document.querySelector('.overlay')

function openOrderModal() {
  orderModal.classList.add('is-open')
  orderModalOverlay.classList.add('is-active')
}
orderCtaBuyBtn.addEventListener('click', openOrderModal)

function closeOrderModal() {
  orderModal.classList.remove('is-open')
  orderModalOverlay.classList.remove('is-active')
}
orderModalOverlay.addEventListener('click', closeOrderModal)

function toggleOrderCtaBookmark() {
  const [icon, countSpan] = this.children
  const count = Number(countSpan.innerHTML.replace(',', ''))

  let newCount = count
  if (this.classList.contains('is-active')) {
    icon.setAttribute('class', 'ic-bookmark')
    newCount = newCount - 1
  } else {
    icon.setAttribute('class', 'ic-bookmark-filled')
    newCount = newCount + 1
  }

  countSpan.innerHTML = newCount.toLocaleString()
  countSpan.setAttribute('aria-label', `북마크 ${newCount.toLocaleString()}회`)
  this.classList.toggle('is-active')
}
orderCtaBookmarkBtn.addEventListener('click', toggleOrderCtaBookmark)
