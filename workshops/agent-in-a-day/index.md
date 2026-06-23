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

기능·목적 관점에서 두 도구를 간단한 비교표로 정리합니다. (제품 PPT 장표의 비교표 형태)

- **Agent Builder 예시** — 간단한 hands-on 링크만 가볍게 소개 ("원하면 직접 보세요" 수준)
  - 참고: [에이전트 생성 및 지침 작성 | Microsoft Copilot Studio](/labs/agentacademy-a1/)
- **Copilot Studio 간단 소개** — 구(Classic) → 신(New)으로 바뀐 배경 소개

> 📝 *작성 예정: 비교표(기능/목적/대상 사용자), Agent Builder 스크린샷.*

## 2. 구(Classic) Copilot Studio — 기본 개념 & 핸즈온

기존(Classic) Copilot Studio의 핵심 작성 모델(에이전트·토픽·지식 소스·도구·변수·채널)을 개념부터 실습까지 한 흐름으로 정리합니다.
아래 **모듈 → 랩** 순서대로 따라가면 개념을 익히고 바로 손으로 만들어 볼 수 있습니다. 각 항목은 **개별 페이지**로 분리되어 있어 깔끔하게 바로 이동할 수 있습니다.

| 단계 | 콘텐츠 | 레벨 | 소요 | 바로가기 |
|:----:|--------|:----:|:----:|----------|
| **모듈 1** | Copilot Studio 핵심 개념 개요 (에이전트·토픽·지식·도구·변수·채널) | 200 | 30분 | [개념 열기 →]({{ '/labs/module-core-concepts-kr/' | relative_url }}) |
| **모듈 2** | Copilot Studio 도구(Tools) — 커넥터·MCP·에이전트 플로우·CUA | 300 | 30분 | [개념 열기 →]({{ '/labs/module-tools-kr/' | relative_url }}) |
| **랩 1** | 도구(Tools) 실습 — 커스텀 커넥터·에이전트 플로우·Dataverse MCP·커스텀 프롬프트·CUA | 300 | 60분 | [실습 열기 →]({{ '/labs/mcs-tools-kr/' | relative_url }}) |

> 💡 **추천 학습 순서:** 모듈 1 (핵심 개념) → 모듈 2 (도구 개념) → **랩 1 (도구 실습)**.
>
> 📌 **모듈 3(오케스트레이션)과 랩 2(오케스트레이션 실습)** 는 구(Classic)와 신(New) 기능이 함께 섞여 있어, 아래 [4. Advanced Agent in a Day](#4-advanced-agent-in-a-day--풀데이-핸즈온-일정) 섹션에서 모듈 4와 함께 다룹니다.
>
> 참고 실습: [반(半)개발형 Agent 만들기 | Microsoft Copilot Studio](/labs/agentthon-multi-agent/)

## 3. New Copilot Studio 기본 설명 (구조)

새로운 Copilot Studio의 생성형 오케스트레이션 구조와 아키텍처를 소개합니다.

- Copilot Studio's New Agentic Harness & Python *(링크 추가 예정)*
- Microsoft Rebuilt Copilot Studio — Here's Everything New *(YouTube, 링크 추가 예정)*
- What's new in Copilot Studio: May 2026 update *(Microsoft, 링크 추가 예정)*

> 📝 *작성 예정: 신규 에이전틱 하니스(harness) 구조도, 변경점 요약.*

## 4. Advanced Agent in a Day — 풀데이 핸즈온 일정

이 섹션은 Microsoft Copilot Agents Labs의 **Advanced Agent in a Day** 워크샵 **전체 일정**을 한 눈에 보여줍니다.
**모듈 1·2와 랩 1은 위 [2. 구(Classic) Copilot Studio](#2-구classic-copilot-studio--기본-개념--핸즈온) 섹션에 개별 페이지로 정리**되어 있으며,
이 섹션에서는 **오케스트레이션(모듈 3 / 랩 2)과 워크플로우(모듈 4 / 랩 3)** 를 다룹니다.
개발자 도구 플러그인(모듈 5)은 [5. Advanced Tool](#5-advanced-tool) 섹션으로 이동했습니다.

> **출처 및 라이선스 (Source & License)**
> 본 모듈의 원문은 Microsoft가 공개한 **[microsoft/mcs-labs](https://github.com/microsoft/mcs-labs)** 저장소이며,
> **MIT License — Copyright © Microsoft Corporation** 하에 배포됩니다.
> 본 한국어 자료는 MIT 라이선스가 허용하는 범위(저작권·라이선스 고지 유지) 안에서 원문을 **번역·요약·재구성**한 것입니다.
> 라이선스 전문: <https://github.com/microsoft/mcs-labs/blob/main/LICENSE>
> · 워크샵 원문: [Advanced Agent in a Day](https://microsoft.github.io/mcs-labs/workshops/advanced-agent-in-a-day/)

### 4.1 개요 & 진행 일정

빌더용 **300레벨 풀데이 워크샵**으로, 이미 Copilot Studio 기본기를 갖춘 사용자를 대상으로 합니다.
멀티 에이전트 핵심 개념, 도구(커넥터·에이전트 플로우·MCP 서버·커스텀 프롬프트·CUA),
생성형 오케스트레이션과 동적 체이닝, 신규 **Workflows** 자율 에이전트 기능, 그리고
터미널에서 Copilot Studio 스킬로 에이전트를 작성하는 방법까지 깊이 있게 다룹니다.

| 시간 | 세션 | 레벨 | 소요 |
|------|------|:----:|:----:|
| 09:00 | **환영 + 소개** — 강사 소개, 하루 일정 리뷰, 선행지식(에이전트 생성·토픽·지식 소스·변수) 확인 | — | 15분 |
| 09:15 | **[모듈 1 — 핵심 개념 개요]({{ '/labs/module-core-concepts-kr/' | relative_url }})** | 200 | 30분 |
| 09:45 | **[모듈 2 — 도구(Tools)]({{ '/labs/module-tools-kr/' | relative_url }})** | 300 | 30분 |
| 10:15 | 커피 브레이크 / Q&A | — | 15분 |
| 10:30 | **[랩 1 — 도구(Tools)]({{ '/labs/mcs-tools-kr/' | relative_url }})** | 300 | 60분 |
| 11:30 | **[모듈 3 — 오케스트레이션과 동적 체이닝]({{ '/labs/module-orchestration-kr/' | relative_url }})** | 300 | 45분 |
| 12:15 | 점심 | — | 60분 |
| 11:30 | **[모듈 3 — 오케스트레이션과 동적 체이닝](#42-모듈-3--오케스트레이션과-동적-체이닝)** | 300 | 45분 |
| 12:15 | 점심 | — | 60분 |
| 13:15 | **[랩 2 — 오케스트레이션 (한국어 클론)]({{ '/labs/mcs-orchestration-kr/' | relative_url }})** | 300 | 60분 |
| 14:15 | **[모듈 4 — 워크플로우(Workflows)](#43-모듈-4--워크플로우workflows)** | 300 | 30분 |
| 14:45 | 커피 브레이크 / Q&A | — | 15분 |
| 15:00 | **[랩 3 — 워크플로우(Workflows)]({{ '/labs/mcs-workflows-kr/' | relative_url }})** | 300 | 60분 |
| 16:00 | **[모듈 5 — 개발자 도구용 플러그인](#5-advanced-tool)** | 300 | 30분 |

> 📦 **모듈 1·2 / 랩 1** 의 한국어 상세 페이지는 [2. 구(Classic) Copilot Studio 섹션](#2-구classic-copilot-studio--기본-개념--핸즈온)의 표에서 바로 이동할 수 있습니다. **모듈 5** 는 [5. Advanced Tool](#5-advanced-tool) 섹션에 있습니다.

---

### 4.2 모듈 3 — 오케스트레이션과 동적 체이닝

> **레벨** 300 · **소요** 45분 · **출처** [Orchestration](https://microsoft.github.io/mcs-labs/modules/orchestration/) · MIT © Microsoft
> **연계 랩** → [오케스트레이션 한국어 클론 랩]({{ '/labs/mcs-orchestration-kr/' | relative_url }}) · [원문 랩(mcs-labs)](https://microsoft.github.io/mcs-labs/labs/mcs-orchestration/?event=advanced-agent-in-a-day)

생성형 오케스트레이션 플래너가 매 턴 **어떤 도구·지식·자식/연결 에이전트로 라우팅할지** 결정하는 방식과, 이를 좌우하는 **Instructions(지침)·Descriptions(설명)**, 그리고 한 턴에 작업을 끝까지 완료하는 **New Orchestrator(에이전틱 추론 루프)** 를 다룹니다. 구(Classic)의 표준 오케스트레이션과 신(New)의 추론 루프가 함께 등장하기 때문에 이 섹션에 배치했습니다.

- 📘 **개념 페이지** → [모듈 3 — 오케스트레이션과 동적 체이닝 (한국어)]({{ '/labs/module-orchestration-kr/' | relative_url }})

#### 📦 한국어로 클론한 실습 페이지 (랩 2 — 원문 랩 → 한국어 전체 번역)

원문 **[랩 2: Orchestration (mcs-labs)](https://microsoft.github.io/mcs-labs/labs/mcs-orchestration/?event=advanced-agent-in-a-day)** 의
4개 Use Case 전체(샘플 연결 에이전트, Instructions·Descriptions의 영향, New Orchestrator 추론 루프, Skill 활용)를
**한국어로 이미지까지 전부 클론 코딩한 별도 페이지**를 마련했습니다. (MIT © Microsoft, 출처 명시)

- ▶ **[오케스트레이션 — 동적 체이닝과 New Orchestrator (한국어 클론)]({{ '/labs/mcs-orchestration-kr/' | relative_url }})**

---

### 4.3 모듈 4 — 워크플로우(Workflows)

> **레벨** 300 · **소요** 30분 · **출처** [Workflows](https://microsoft.github.io/mcs-labs/modules/workflows/) · MIT © Microsoft
> **연계 랩** → [Workflows 한국어 클론 랩]({{ '/labs/mcs-workflows-kr/' | relative_url }}) · [원문 랩(mcs-labs)](https://microsoft.github.io/mcs-labs/labs/mcs-workflows/?event=advanced-agent-in-a-day)

인라인 에이전트 연결과 **예약·이벤트 기반 트리거**로 에이전트가 스스로 동작하는 차세대 자율 에이전트 기능을 다룹니다. Classic 자율 에이전트 트리거 모델을 넘어, 사람이 묻지 않아도 일정·이벤트에 따라 에이전트가 능동적으로 작업을 수행합니다.

#### 📦 한국어로 클론한 실습 페이지 (원문 랩 → 한국어 전체 번역)

원문 **[랩 3: Workflows (mcs-labs)](https://microsoft.github.io/mcs-labs/labs/mcs-workflows/?event=advanced-agent-in-a-day)** 의
5개 Use Case 전체(작업 시간 블로킹, Order Management 설정, M365 Copilot 휴먼 인 더 루프, 재고 관리 인라인 에이전트, Price Quote 에이전트 호출)를
**한국어로 싹 다 클론 코딩한 별도 페이지**를 마련했습니다. (MIT © Microsoft, 출처 명시)

- ▶ **[Workflows — 이벤트 기반 자율 에이전트 (한국어 클론)]({{ '/labs/mcs-workflows-kr/' | relative_url }})**

#### ✍️ 제가 직접 만든 Daily Brief 워크플로우 실습

아래 **Daily Brief Workflow** 핸즈온은 위 모듈 개념(트리거 + 인라인/멀티 에이전트 + 구조화 출력)을 실제로 적용해
**제가 직접 설계·제작한 오리지널 실습**입니다. 매일 특정 회사 뉴스 브리프를 자동 생성해 메일로 발송하는 워크플로우를 구축합니다.

- [Daily Brief Workflow (한국어)]({{ '/labs/daily-brief-kr/' | relative_url }}) — *이영서 제작*
- [Daily Brief Workflow (English)]({{ '/labs/daily-brief-en/' | relative_url }}) — *이영서 제작*

> 📝 원문 모듈 페이지에는 별도 슬라이드 덱이 연결되어 있지 않습니다. 위 한국어 클론 랩 또는 직접 제작한 Daily Brief 랩으로 이벤트 기반 워크플로우를 실습하세요.

## 5. Advanced Tool

환경 구축과 확장에 활용하는 고급 도구, 그리고 **개발자 도구용 Copilot Studio 플러그인(모듈 5)** 을 정리합니다.

- **PAC CLI** — 환경 구축을 위한 도구
- **Copilot Studio skill**로 구축 & extension
- 함께 활용 가능한 **MCP 도구** — MS Learn, Dataverse MCP, Power Apps 연결 등

> 📝 *작성 예정: PAC CLI 명령 예시, MCP 도구 연결 다이어그램.*

---

### 5.1 모듈 5 — 개발자 도구용 Copilot Studio 플러그인

> **레벨** 300 · **소요** 30분 · **출처** [Copilot Studio Plugin](https://microsoft.github.io/mcs-labs/modules/copilot-studio-plugin/) · [슬라이드(PPT) 다운로드](https://github.com/microsoft/mcs-labs/raw/main/presentations/bootcamp/13.%20Skills%20for%20Copilot%20Studio_CB.pptx) · MIT © Microsoft

**Claude Code · GitHub Copilot CLI · VS Code**에서 **YAML 파일로 Copilot Studio 에이전트를 작성·테스트·문제 해결**하는 플러그인입니다. 터미널/에디터에서 바로 클라우드의 에이전트를 다룰 수 있습니다. (원래 Advanced Agent in a Day의 모듈 5였으나, 개발자 도구/플러그인 성격이라 이 Advanced Tool 섹션으로 옮겼습니다.)

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

**테스트 역량**: 포인트 테스트(단일/멀티턴 발화), 배치 스위트(Power CAT Copilot Studio Kit 기반 기대값·합격/불합격), 평가 분석(Copilot Studio에서 CSV 내보내 실패 분석·수정 제안).

> 📝 *추가 사례(작성 예정):* Plan & handoff 하는 skill zip 기반 에이전트, MS Learn 플러그인을 활용하는 에이전트, NEW Copilot Studio Agents — Working with Skills(YouTube) 등.

## 6. New Copilot Studio — Workflow

신규 Workflow 기능 핸즈온은 별도 실습으로 연결됩니다.

- [Daily Brief Workflow (한국어)](/labs/daily-brief-kr/)
- [Daily Brief Workflow (English)](/labs/daily-brief-en/)

## 7. 언제 Cowork, 언제 New Copilot Studio? (Positioning)

New Copilot Studio와 다른 옵션(예: Cowork)의 포지셔닝과 선택 기준을 정리합니다.

> 📝 *작성 예정: 사용 시나리오별 의사결정 가이드.*
