// 모바일 네비 토글
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();

// 복사 대상은 코드 내용뿐이며, 동적 콘텐츠 토큰은 실습 편집기에서 별도로 연결합니다.
(function () {
  document.querySelectorAll('.lab-content pre').forEach(function (pre) {
    var code = pre.querySelector('code');
    if (!code || pre.parentElement.classList.contains('code-copy-block')) return;
    var wrapper = document.createElement('div');
    wrapper.className = 'code-copy-block';
    var toolbar = document.createElement('div');
    toolbar.className = 'code-copy-toolbar';
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'code-copy-button';
    button.textContent = '복사';
    button.setAttribute('aria-label', '코드 블록 복사');
    var status = document.createElement('span');
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    pre.parentNode.insertBefore(wrapper, pre);
    toolbar.appendChild(status);
    toolbar.appendChild(button);
    wrapper.appendChild(toolbar);
    wrapper.appendChild(pre);
    button.addEventListener('click', function () {
      function selectForManualCopy() {
        var selection = window.getSelection();
        var range = document.createRange();
        range.selectNodeContents(code);
        selection.removeAllRanges();
        selection.addRange(range);
        status.textContent = '복사 권한이 없어 내용을 선택했습니다. Ctrl+C 또는 ⌘C를 누르세요.';
      }
      if (!navigator.clipboard || !window.isSecureContext) {
        selectForManualCopy();
        return;
      }
      button.disabled = true;
      navigator.clipboard.writeText(code.textContent).then(function () {
        status.textContent = '복사했습니다.';
        button.textContent = '복사 완료';
        button.disabled = false;
        setTimeout(function () { button.textContent = '복사'; }, 2000);
      }, function () {
        button.disabled = false;
        selectForManualCopy();
      });
    });
  });
})();

// 실습 페이지 목차(TOC) 자동 생성 + 스크롤 하이라이트
(function () {
  var toc = document.getElementById('toc');
  var content = document.querySelector('.lab-content');
  if (!toc || !content) return;

  var headings = content.querySelectorAll('h2, h3');
  if (!headings.length) {
    var aside = document.querySelector('.lab-toc');
    if (aside) aside.style.display = 'none';
    return;
  }

  var used = {};
  function slugify(text) {
    var base = text.toLowerCase().trim()
      .replace(/[^\w\uAC00-\uD7A3\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-') || 'section';
    var slug = base, i = 1;
    while (used[slug]) { slug = base + '-' + (i++); }
    used[slug] = true;
    return slug;
  }

  var list = document.createElement('ul');
  var items = [];
  headings.forEach(function (h) {
    if (!h.id) h.id = slugify(h.textContent);
    var li = document.createElement('li');
    li.className = 'toc-' + h.tagName.toLowerCase();
    var a = document.createElement('a');
    a.href = '#' + h.id;
    a.textContent = h.textContent;
    li.appendChild(a);
    list.appendChild(li);
    items.push({ id: h.id, link: a, el: h });
  });
  toc.appendChild(list);

  // 스크롤 위치에 따른 현재 섹션 강조
  function onScroll() {
    var pos = window.scrollY + 120;
    var current = items[0];
    for (var i = 0; i < items.length; i++) {
      if (items[i].el.offsetTop <= pos) current = items[i];
    }
    items.forEach(function (it) { it.link.classList.remove('active'); });
    if (current) current.link.classList.add('active');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
