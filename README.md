# Copilot Studio Hands-on Blog

Microsoft Copilot Studio 실습 가이드를 모은 개인 블로그입니다. [Jekyll](https://jekyllrb.com/) + GitHub Pages 로 빌드됩니다.

원본 콘텐츠 출처: [baby-crows/Copilot-Studio-Hands-on](https://github.com/baby-crows/Copilot-Studio-Hands-on)

## 구성

```
_config.yml          # 사이트 설정 (title, baseurl, markdown 엔진 등)
_data/modules.yml    # 홈 화면 모듈/랩 카드 정의 (콘텐츠 추가 시 여기에)
_layouts/            # default / home / lab 레이아웃
_includes/           # head / header / footer 파셜
assets/              # CSS, JS, favicon (Microsoft Fluent 테마)
index.html           # 홈 (모듈별 카드 그리드)
labs/<slug>/index.md # 각 실습 랩 (이미지/첨부는 같은 폴더에)
```

수록된 실습:

| 모듈 | 랩 |
|------|-----|
| Agent Academy | A1 채용 에이전트 · A2 모델 이해 · A3 멀티 에이전트 · A4 MCP 서버 연결 |
| Agentthon | 멀티 에이전트 가이드 · 트리거 구성 |
| Enterprise | Copilot Studio VNet 통합 |
| Document | 견적서 → 품의서 자동 생성 |
| Daily Brief | Workflow Hands-on (한국어 / English) |

## GitHub Pages 배포

1. GitHub에 `Copilot-Studio-Handson-Blog` 이름으로 **public** 저장소를 만듭니다.
   > 저장소 이름이 `_config.yml`의 `baseurl: "/Copilot-Studio-Handson-Blog"`와 일치해야 이미지/링크가 정상 동작합니다.

2. 이 폴더를 push 합니다.

   ```powershell
   cd "Copilot-Studio-Handson-Blog"
   git init
   git add .
   git commit -m "Initial blog migration"
   git branch -M main
   git remote add origin https://github.com/<your-username>/Copilot-Studio-Handson-Blog.git
   git push -u origin main
   ```

3. GitHub 저장소 → **Settings → Pages** 에서
   - Source: **Deploy from a branch**
   - Branch: **main** / `(root)` 선택 → Save

4. 1~2분 후 `https://<your-username>.github.io/Copilot-Studio-Handson-Blog/` 에서 확인합니다.

> 사용자 페이지(`<user>.github.io` 루트)로 배포하려면 `_config.yml`의 `baseurl`을 `""`(빈 문자열)로 바꾸세요.

## 로컬 미리보기 (선택)

Ruby가 설치되어 있어야 합니다.

```powershell
gem install bundler
bundle install
bundle exec jekyll serve --baseurl ""
# http://127.0.0.1:4000/
```

Ruby가 없어도 GitHub Pages가 서버에서 빌드하므로 배포에는 문제없습니다.

## 새 콘텐츠 추가 ("Copilot Studio New ver")

1. `labs/<새-slug>/index.md` 생성 (front matter: `title`, `summary`, `level`, `time`, `audience`, `tags`).
2. 이미지/첨부는 같은 `labs/<새-slug>/` 폴더에 두고 마크다운에서 상대경로(`![](image.png)`)로 참조.
3. `_data/modules.yml` 의 해당 모듈에 랩 항목을 추가하거나 새 모듈 블록을 만듭니다.
4. (선택) 홈의 `id="new-copilot-studio"` 섹션을 정식 모듈로 옮깁니다.
