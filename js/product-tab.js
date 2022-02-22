const productTab = document.querySelector('.product-tab')
const productTabBtnList = productTab.querySelectorAll('button')

let currentActiveTab = productTab.querySelector('.is-active')

function toggleActiveTab() {
  const tabItem = this.parentNode
  if (currentActiveTab != tabItem) {
    tabItem.classList.add('is-active')
    currentActiveTab.classList.remove('is-active')
    currentActiveTab = tabItem
  }
}
productTabBtnList.forEach((btn) => {
  btn.addEventListener('click', toggleActiveTab)
})
