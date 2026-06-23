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
