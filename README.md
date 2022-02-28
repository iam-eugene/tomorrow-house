# 🏠내일의 집

### 1. GNB

- 로그인 안 했을 때

```html
<button
  class="gnb-icon-btn is-search lg-hidden"
  type="button"
  aria-label="검색창 열기 버튼"
>
  <i class="ic-search"></i>
</button>

<a class="gnb-icon-btn is-cart" href="/" aria-label="장바구니 페이지 이동">
  <i class="ic-cart"></i>
</a>

<div class="gnb-auth sm-hidden">
  <a href="/">로그인</a>
  <a href="/">로그아웃</a>
</div>
```

- 로그인 했을 때

```html
<div class="gnb-btn-group">
  <button
    class="gnb-icon-btn is-search lg-hidden"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="ic-search"></i>
  </button>

  <a class="gnb-icon-btn sm-hidden" href="/" aria-label="스크랩북 페이지 이동">
    <i class="ic-bookmark"></i>
  </a>

  <a class="gnb-icon-btn sm-hidden" href="/" aria-label="내소식 페이지 이동">
    <i class="ic-bell"></i>
  </a>

  <a class="gnb-icon-btn is-cart" href="/" aria-label="장바구니 페이지 이동">
    <i class="ic-cart"></i>
    <strong class="badge">5</strong>
  </a>

  <button
    class="gnb-avatar-btn sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" art="유저" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- 로그인 안 했을 때

```html
<div class="sidebar-auth">
  <a class="btn-outline btn-40" href="/">로그인</a>
  <a class="btn-primary btn-40" href="/">회원가입</a>
</div>
```

- 로그인 했을 때

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" art="유저" />
    </div>
    <strong class="username"> 사달라 </strong>
  </a>
</div>
```
