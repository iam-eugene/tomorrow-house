const drawerMenuBtnList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-btn'
)

function toggleDrawerMenu() {
  const drawerMenu = this.parentNode

  // drawerMenu.classList.toggle('is-active')
  drawerMenu.classList.toggle('is-open')
}

drawerMenuBtnList.forEach(function (btn) {
  btn.addEventListener('click', toggleDrawerMenu)
})
