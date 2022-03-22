const reviewLikeBtnList = document.querySelectorAll(
  '.review-card-footer button'
)

const HELPFUL = '도움 됨'
const NOT_HELPFUL = '도움이 돼요'

function toggleReviewLikeBtn() {
  const textElement = this.nextElementSibling
  const reviewCardFooter = this.parentNode
  const isLiked = this.classList.contains('btn-primary')

  // 2. button primary이면 도움 됨 , outline이면 도움이 돼요
  if (isLiked) {
    this.innerHTML = NOT_HELPFUL
  } else {
    this.innerHTML = HELPFUL

    const checkIcon = document.createElement('i')
    checkIcon.classList.add('ic-check')
    checkIcon.setAttribute('aria-hidden', true)
    this.prepend(checkIcon)
  }

  // 3. p태그 n명에게 도움이 되었습니다.
  if (textElement) {
    // 3-1. p태그가 있을 때
    const countSpan = textElement.querySelector('span')
    const count = Number(countSpan.innerHTML.replaceAll(',', ''))

    let newCount = count
    if (isLiked) {
      newCount = newCount - 1
      if (newCount == 0) {
        reviewCardFooter.removeChild(textElement)
      } else {
        countSpan.innerHTML = newCount.toLocaleString()
      }
    } else {
      newCount = newCount + 1
      countSpan.innerHTML = newCount.toLocaleString()
    }
  } else {
    // 3-2. p태그가 없을 때
    if (!isLiked) {
      const newTextElement = document.createElement('p')
      newTextElement.innerHTML =
        '<strong><span>1</span>명</strong>에게 도움이 되었습니다.'
      reviewCardFooter.append(newTextElement)
    }
  }

  // 1. button primary, outline toggle
  this.classList.toggle('btn-outline')
  this.classList.toggle('btn-primary')
}

reviewLikeBtnList.forEach((btn) => {
  btn.addEventListener('click', toggleReviewLikeBtn)
})
