source "https://rubygems.org"

# GitHub Pages 호환 빌드 (권장)
gem "github-pages", group: :jekyll_plugins

# 로컬에서 github-pages 없이 빌드하려면 위 줄을 주석 처리하고 아래 두 줄을 사용하세요.
# gem "jekyll", "~> 3.10"
# gem "jekyll-feed", "~> 0.17"

group :jekyll_plugins do
  gem "jekyll-feed"
end

# Windows / JRuby 호환
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", platforms: [:mingw, :x64_mingw, :mswin]
gem "webrick", "~> 1.8"
