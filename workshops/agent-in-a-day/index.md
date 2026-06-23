---
layout: workshop
title: Agent in a Day — 구·신 Copilot Studio 핸즈온
summary: M365 Copilot Agent Builder부터 구·신 Copilot Studio, Advanced 도구, Workflow까지 하루에 훑는 풀데이 워크샵.
level: 300
time: Full-day
author: 이영서
editions: ["Classic", "Public Preview"]
---

> 이 워크샵은 Copilot Studio의 **구(Classic) 버전과 신(New, Public Preview) 버전**을
> 한 흐름으로 다룹니다. 아래 목차는 초안이며, 각 섹션은 계속 보완될 예정입니다.

## 1. M365 Copilot Agent Builder vs Copilot Studio 비교

"무엇을 만드느냐"보다 **누가, 어느 수준의 코딩으로, 어떤 목적**으로 쓰느냐가 선택의 핵심입니다. 두 도구를 한눈에 비교합니다.

| 구분 | M365 Copilot Agent Builder | Copilot Studio |
|------|----------------------------|----------------|
| **한 줄 정의** | M365 Copilot 안에서 만드는 **간단한 선언형 에이전트** | 다양한 채널에 배포하는 **본격 에이전트 빌드 플랫폼** |
| **주 목적** | 온보딩·문서 Q&A 등 RAG 기반 응답 | 업무 자동화·고급 액션·오케스트레이션 |
| **코딩 레벨** | 노코드 | 로우코드 (드래그앤드롭 + 필요 시 코드/식) |
| **주 사용자** | 코드 경험 없는 업무 사용자 | 정보 담당자, 업무 자동화 담당, 메이커 |
| **확장 방법** | 지식 소스 연결, 시작 프롬프트 | 도구/액션, 커넥터, 플로우, MCP, 연결된 에이전트 |
| **데이터/실행 범위** | M365 Copilot 그래프/연결 지식 | Power Platform·외부 API·다양한 데이터 소스 |
| **배포 대상** | M365 Copilot · Teams 내 | Teams, 웹, 음성 등 다채널 |
| **라이선스(개략)** | M365 Copilot | Copilot Studio (웹 기반) |
| **대표 활용** | 사내 문서 도우미, FAQ 봇 | 승인 워크플로, 백오피스 자동화, 멀티에이전트 |

### Agent Builder 직접 해보기 — 선언형 에이전트 (3단계)

코드 없이 **자연어 지침 + 지식 소스**만으로 만드는 선언형 에이전트입니다. 아래 카드를 누르면 각 단계 핸즈온(치원님 Agent_Blog)으로 이동합니다.

<style>
.wsp-group{margin:18px 0 26px}
.wsp-glabel{display:flex;align-items:center;gap:8px;font-size:13.5px;font-weight:700;color:var(--accent,#0F6CBD);margin:0 0 4px}
.wsp-gdesc{font-size:13px;color:var(--muted,#605E5C);margin:0 0 14px}
.wsp-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(238px,1fr));gap:16px}
.wsp-card{display:flex;flex-direction:column;background:var(--bg-card,#fff);border:1px solid var(--line,#EDEBE9);border-radius:14px;overflow:hidden;text-decoration:none;color:inherit;box-shadow:var(--shadow-sm);transition:transform .12s ease,box-shadow .16s ease,border-color .16s ease}
.wsp-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg);border-color:var(--accent,#0F6CBD);text-decoration:none}
.wsp-thumb{width:100%;aspect-ratio:16/9;object-fit:cover;object-position:top left;background:var(--bg,#FAF9F8);border-bottom:1px solid var(--line,#EDEBE9);display:block}
.wsp-ic{font-size:28px;padding:16px 16px 0;line-height:1}
.wsp-body{padding:12px 16px 16px;display:flex;flex-direction:column;gap:5px}
.wsp-step{font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:var(--accent,#0F6CBD)}
.wsp-title{font-size:15px;font-weight:700;color:var(--ink,#201F1E);margin:0;line-height:1.35}
.wsp-desc{font-size:12.6px;color:var(--ink-2,#3B3A39);margin:0;line-height:1.5}
.wsp-meta{font-size:11.5px;color:var(--muted,#605E5C);font-weight:600;margin-top:2px}
.wsp-cta{font-size:12.6px;font-weight:700;color:var(--accent,#0F6CBD);margin-top:8px}
.wsp-ext::after{content:" ↗"}
</style>

<div class="wsp-group" style="--accent:#B11F4B;">
<div class="wsp-grid">
<a class="wsp-card" href="https://chichoi1991.github.io/Agent_Blog/chapters/ws4-1-create-agent/" target="_blank" rel="noopener">
<img class="wsp-thumb" src="{{ '/labs/agentbuilder-vs-studio-kr/images/ws4-1-create.png' | relative_url }}" alt="에이전트 생성 및 지침 작성" />
<span class="wsp-body"><span class="wsp-step">Step 1</span><span class="wsp-title">에이전트 생성 및 지침 작성</span><span class="wsp-desc">에이전트 만들기 진입, 대화형·수동으로 지침 작성</span><span class="wsp-cta wsp-ext">핸즈온 열기</span></span>
</a>
<a class="wsp-card" href="https://chichoi1991.github.io/Agent_Blog/chapters/ws4-2-ref-feature/" target="_blank" rel="noopener">
<img class="wsp-thumb" src="{{ '/labs/agentbuilder-vs-studio-kr/images/ws4-2-knowledge.png' | relative_url }}" alt="참조자료 기능 추가" />
<span class="wsp-body"><span class="wsp-step">Step 2</span><span class="wsp-title">참조자료 · 기능 추가</span><span class="wsp-desc">메일·채팅·SharePoint 지식, 웹검색, 코드 인터프리터 활성화</span><span class="wsp-cta wsp-ext">핸즈온 열기</span></span>
</a>
<a class="wsp-card" href="https://chichoi1991.github.io/Agent_Blog/chapters/ws4-3-test-share/" target="_blank" rel="noopener">
<img class="wsp-thumb" src="{{ '/labs/agentbuilder-vs-studio-kr/images/ws4-3-test.png' | relative_url }}" alt="테스트 및 공유" />
<span class="wsp-body"><span class="wsp-step">Step 3</span><span class="wsp-title">테스트 및 공유</span><span class="wsp-desc">테스트 패널로 검증하고 조직 구성원에게 공유</span><span class="wsp-cta wsp-ext">핸즈온 열기</span></span>
</a>
</div>
</div>

> 📖 **전체 상세 비교** — Agent Builder 규제 적용 예시와 Copilot Studio **구(Classic) vs 신(New)** 경험 차이(스크린샷 포함)는 별도 페이지에 정리했습니다. → **[Agent Builder vs Copilot Studio 상세 비교 (한국어)]({{ '/labs/agentbuilder-vs-studio-kr/' | relative_url }})**

## 2. 구(Classic) Copilot Studio — 기본 개념 & 핸즈온

기존(Classic) Copilot Studio의 핵심 작성 모델(에이전트·토픽·지식·도구·변수·채널)을 **개념부터 실습까지** 익힙니다. 아래 세 갈래로 나눠 추천하니, 원하는 출발점을 고르세요.

<div class="wsp-group" style="--accent:#0078D4;">
<div class="wsp-glabel">① 이 워크샵 핸즈온 — 모듈 1 · 모듈 2 · 랩 1</div>
<div class="wsp-gdesc">핵심 개념 → 도구 개념 → 도구 실습 순서로 따라가는 한국어 모듈입니다.</div>
<div class="wsp-grid">
<a class="wsp-card" href="{{ '/labs/module-core-concepts-kr/' | relative_url }}">
<span class="wsp-ic">🧩</span>
<span class="wsp-body"><span class="wsp-step">모듈 1</span><span class="wsp-title">Copilot Studio 핵심 개념</span><span class="wsp-desc">에이전트·토픽·지식·도구·변수·채널 개요</span><span class="wsp-meta">Level 200 · 30분</span><span class="wsp-cta">개념 열기 →</span></span>
</a>
<a class="wsp-card" href="{{ '/labs/module-tools-kr/' | relative_url }}">
<span class="wsp-ic">🛠️</span>
<span class="wsp-body"><span class="wsp-step">모듈 2</span><span class="wsp-title">도구(Tools) 개념</span><span class="wsp-desc">커넥터·MCP·에이전트 플로우·CUA</span><span class="wsp-meta">Level 300 · 30분</span><span class="wsp-cta">개념 열기 →</span></span>
</a>
<a class="wsp-card" href="{{ '/labs/mcs-tools-kr/' | relative_url }}">
<span class="wsp-ic">🧪</span>
<span class="wsp-body"><span class="wsp-step">랩 1</span><span class="wsp-title">도구(Tools) 실습</span><span class="wsp-desc">커스텀 커넥터·에이전트 플로우·Dataverse MCP·커스텀 프롬프트·CUA</span><span class="wsp-meta">Level 300 · 60분</span><span class="wsp-cta">실습 열기 →</span></span>
</a>
</div>
</div>

<div class="wsp-group" style="--accent:#C43E1C;">
<div class="wsp-glabel">② 치원님 블로그 — 커스텀 에이전트 만들기 기초</div>
<div class="wsp-gdesc">Agent_Blog(치원님)의 단계별 기초 실습으로 Copilot Studio를 처음부터 익힙니다.</div>
<div class="wsp-grid">
<a class="wsp-card" href="https://chichoi1991.github.io/Agent_Blog/chapters/ws1-0-overview/" target="_blank" rel="noopener">
<span class="wsp-ic">📘</span>
<span class="wsp-body"><span class="wsp-step">Agent_Blog</span><span class="wsp-title">커스텀 에이전트 만들기 기초편 #1</span><span class="wsp-desc">개요부터 시작하는 Copilot Studio 커스텀 에이전트 기초 시리즈</span><span class="wsp-cta wsp-ext">블로그에서 보기</span></span>
</a>
</div>
</div>

<div class="wsp-group" style="--accent:#107C10;">
<div class="wsp-glabel">③ 내 Classic 실습 시리즈</div>
<div class="wsp-gdesc">이 블로그에 정리된 정식(Classic) Copilot Studio 실습 모음입니다.</div>
<div class="wsp-grid">
<a class="wsp-card" href="{{ '/labs/agentacademy-a1/' | relative_url }}">
<span class="wsp-ic">🎓</span>
<span class="wsp-body"><span class="wsp-step">AgentAcademy</span><span class="wsp-title">커스텀 에이전트 초급 (A1–A4)</span><span class="wsp-desc">채용 에이전트로 배우는 핵심 기능·모델·멀티 에이전트·MCP</span><span class="wsp-cta">실습 열기 →</span></span>
</a>
<a class="wsp-card" href="{{ '/labs/agentthon-multi-agent/' | relative_url }}">
<span class="wsp-ic">🧭</span>
<span class="wsp-body"><span class="wsp-step">Agentthon</span><span class="wsp-title">멀티 에이전트 실습</span><span class="wsp-desc">출장 도우미 — 오케스트레이터 + 규정 + 현지 가이드 협업</span><span class="wsp-cta">실습 열기 →</span></span>
</a>
<a class="wsp-card" href="{{ '/labs/cps-vnet/' | relative_url }}">
<span class="wsp-ic">🔒</span>
<span class="wsp-body"><span class="wsp-step">VNet</span><span class="wsp-title">엔터프라이즈 보안 통합</span><span class="wsp-desc">Copilot Studio 에이전트를 Azure 프라이빗 네트워크와 안전 연결</span><span class="wsp-cta">실습 열기 →</span></span>
</a>
<a class="wsp-card" href="{{ '/labs/document-generation/' | relative_url }}">
<span class="wsp-ic">📄</span>
<span class="wsp-body"><span class="wsp-step">문서 자동화</span><span class="wsp-title">견적서 → 품의서 자동 생성</span><span class="wsp-desc">Vision(OCR) + 구조화 추출 + Word 템플릿 승인 플로우</span><span class="wsp-cta">실습 열기 →</span></span>
</a>
</div>
</div>

> 📌 **모듈 3 · 랩 2(오케스트레이션)** 는 구(Classic)·신(New) 기능이 함께 섞여 있어, 아래 [4. Classic & New 한번에 같이 실습](#4-classic--new-한번에-같이-실습) 섹션에서 다룹니다.

## 3. New Copilot Studio 기본 설명 (구조)

새로운 Copilot Studio의 생성형 오케스트레이션 구조와 아키텍처(에이전틱 하니스)를 소개합니다.

- Copilot Studio's New Agentic Harness & Python *(링크 추가 예정)*
- Microsoft Rebuilt Copilot Studio — Here's Everything New *(YouTube, 링크 추가 예정)*
- What's new in Copilot Studio: May 2026 update *(Microsoft, 링크 추가 예정)*

> 📝 *작성 예정: 신규 에이전틱 하니스(harness) 구조도, 변경점 요약.*

## 4. Classic & New 한번에 같이 실습

구(Classic)와 신(New) 기능이 **함께 섞이는** 오케스트레이션·워크플로우를 한 흐름으로 실습하는 섹션입니다.
생성형 오케스트레이션(모듈 3·랩 2)으로 라우팅·동적 체이닝을 익히고, 예약·이벤트 기반 **워크플로우(모듈 4·랩 3)** 로 에이전트가 스스로 동작하게 만듭니다.

> **출처 및 라이선스** — 원문 [microsoft/mcs-labs](https://github.com/microsoft/mcs-labs) (MIT © Microsoft)를 번역·재구성했습니다.
> 라이선스 전문: <https://github.com/microsoft/mcs-labs/blob/main/LICENSE>

### 4.1 모듈 3 · 랩 2 — 오케스트레이션과 동적 체이닝

> **레벨** 300 · **출처** [Orchestration](https://microsoft.github.io/mcs-labs/modules/orchestration/) · MIT © Microsoft

생성형 오케스트레이션 플래너가 매 턴 **어떤 도구·지식·자식/연결 에이전트로 라우팅할지** 결정하는 방식과,
이를 좌우하는 **Instructions(지침)·Descriptions(설명)**, 그리고 한 턴에 작업을 끝까지 완료하는 **New Orchestrator(에이전틱 추론 루프)** 를 다룹니다.
구(Classic)의 표준 오케스트레이션과 신(New)의 추론 루프가 함께 등장하는 **구·신을 잇는 핵심 주제**입니다.

| 콘텐츠 | 내용 | 소요 | 바로가기 |
|--------|------|:----:|----------|
| **모듈 3** (개념) | 오케스트레이션과 동적 체이닝 | 45분 | [개념 열기 →]({{ '/labs/module-orchestration-kr/' | relative_url }}) |
| **랩 2** (실습) | 샘플 연결 에이전트 · Instructions/Descriptions · New Orchestrator · Skill (이미지 포함 한국어 클론) | 60분 | [실습 열기 →]({{ '/labs/mcs-orchestration-kr/' | relative_url }}) |

> 📦 랩 2는 원문 [Orchestration 랩(mcs-labs)](https://microsoft.github.io/mcs-labs/labs/mcs-orchestration/?event=advanced-agent-in-a-day)의 4개 Use Case 전체를 **이미지까지 한국어로 클론**한 페이지입니다. (MIT © Microsoft, 출처 명시)

### 4.2 모듈 4 · 랩 3 — 워크플로우(Workflows)

> **레벨** 300 · **출처** [Workflows](https://microsoft.github.io/mcs-labs/modules/workflows/) · MIT © Microsoft

인라인 에이전트 연결과 **예약·이벤트 기반 트리거**로 에이전트가 스스로 동작하는 차세대 자율 에이전트 기능입니다.
Classic 자율 에이전트 트리거 모델을 넘어, 일정·이벤트에 따라 에이전트가 능동적으로 작업을 수행합니다.

원문 [랩 3: Workflows (mcs-labs)](https://microsoft.github.io/mcs-labs/labs/mcs-workflows/?event=advanced-agent-in-a-day)의
5개 Use Case 전체(작업 시간 블로킹, Order Management 설정, M365 Copilot 휴먼 인 더 루프, 재고 관리 인라인 에이전트, Price Quote 에이전트 호출)를
**한국어로 이미지까지 전부 클론한 별도 페이지**를 마련했습니다.

- ▶ **[Workflows — 이벤트 기반 자율 에이전트 (한국어 클론)]({{ '/labs/mcs-workflows-kr/' | relative_url }})**

### 4.3 Daily Brief 워크플로우 (직접 제작 오리지널)

위 모듈 개념(트리거 + 인라인/멀티 에이전트 + 구조화 출력)을 실제로 적용해 **직접 설계·제작한 오리지널 실습**입니다.
매일 특정 회사 뉴스 브리프를 자동 생성해 메일로 발송하는 워크플로우를 구축합니다.

- [Daily Brief Workflow (한국어)]({{ '/labs/daily-brief-kr/' | relative_url }}) — *이영서 제작*
- [Daily Brief Workflow (English)]({{ '/labs/daily-brief-en/' | relative_url }}) — *이영서 제작*

## 5. Advanced Tool

환경 구축·확장에 쓰는 고급 도구와 **개발자 도구용 Copilot Studio 플러그인(모듈 5)** 을 정리합니다.

- **PAC CLI** — 환경 구축을 위한 도구
- **Copilot Studio skill**로 구축 & extension
- 함께 활용 가능한 **MCP 도구** — MS Learn, Dataverse MCP, Power Apps 연결 등

> 📝 *작성 예정: PAC CLI 명령 예시, MCP 도구 연결 다이어그램.*

### 5.1 모듈 5 — 개발자 도구용 Copilot Studio 플러그인

> **레벨** 300 · **출처** [Copilot Studio Plugin](https://microsoft.github.io/mcs-labs/modules/copilot-studio-plugin/) · [슬라이드(PPT) 다운로드](https://github.com/microsoft/mcs-labs/raw/main/presentations/bootcamp/13.%20Skills%20for%20Copilot%20Studio_CB.pptx) · MIT © Microsoft

**Claude Code · GitHub Copilot CLI · VS Code**에서 **YAML 파일로 Copilot Studio 에이전트를 작성·테스트·문제 해결**하는 플러그인입니다. 터미널/에디터에서 바로 클라우드의 에이전트를 다룰 수 있습니다.

**무엇을 하나 (4가지 영역)**

| 영역 | 한국어 설명 |
|------|-------------|
| **Manage** | 로컬 파일 ↔ 클라우드 간 에이전트 콘텐츠 clone·push·pull·sync |
| **Author** | 토픽·액션·지식·트리거·변수 YAML 생성/편집 |
| **Test** | 게시된 에이전트 대상 포인트 테스트·배치 스위트·평가 분석 |
| **Troubleshoot** | 잘못된 토픽 라우팅·검증 오류·예기치 않은 동작 디버깅 |

**4개 전문 에이전트**

- `/copilot-studio-manage` — clone · pull · push
- `/copilot-studio-author` — new-topic · add-action · add-knowledge · edit-triggers
- `/copilot-studio-test` — chat-with-agent · run-tests · create-eval
- `/copilot-studio-troubleshoot` — validate · known-issues · best-practices

**빠른 시작 워크플로우**: ① Clone(브라우저 인증으로 다운로드) → ② Author(고유 ID로 유효한 YAML 생성) → ③ Validate(스키마·베스트프랙티스 점검) → ④ Push(드래프트로 업로드) → ⑤ Publish(Copilot Studio UI에서 게시) → ⑥ Test(게시된 에이전트 응답 검증).

**구성**: 로컬 YAML 파일(`agent.mcs.yml`, `topics/`, `actions/`, `knowledge/`, `templates/`) + 4개 에이전트 + 30+ 스킬 + 번들 Node.js 스크립트 + 평가 프레임워크. **설치**: Node.js 18+, VS Code Copilot Studio 확장(push/pull/clone용), Power Platform 환경 필요. 마켓플레이스 또는 `microsoft/skills-for-copilot-studio` 저장소에서 설치.

> 📝 *추가 사례(작성 예정):* Plan & handoff 하는 skill zip 기반 에이전트, MS Learn 플러그인을 활용하는 에이전트, NEW Copilot Studio Agents — Working with Skills(YouTube) 등.
