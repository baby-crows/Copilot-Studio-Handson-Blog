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

## 2. 구(Classic) Copilot Studio 기본 설명

기존 Copilot Studio의 핵심 작성 모델(에이전트, 토픽, 지식 소스, 변수, 채널)을 정리합니다.

- 참고: [반(半)개발형 Agent 만들기 | Microsoft Copilot Studio](/labs/agentthon-multi-agent/)

> 📝 *작성 예정: Classic 작성 모델 개요, 토픽/지식 소스 기본.*

## 3. New Copilot Studio 기본 설명 (구조)

새로운 Copilot Studio의 생성형 오케스트레이션 구조와 아키텍처를 소개합니다.

- Copilot Studio's New Agentic Harness & Python *(링크 추가 예정)*
- Microsoft Rebuilt Copilot Studio — Here's Everything New *(YouTube, 링크 추가 예정)*
- What's new in Copilot Studio: May 2026 update *(Microsoft, 링크 추가 예정)*

> 📝 *작성 예정: 신규 에이전틱 하니스(harness) 구조도, 변경점 요약.*

## 4. 구·신 Copilot Studio 핸즈온

이 섹션은 Microsoft Copilot Agents Labs의 **Advanced Agent in a Day** 워크샵 구성을
거의 그대로 한국어로 옮긴 것입니다.

> **출처(Source):** [Advanced Agent in a Day — Microsoft Copilot Agents Labs](https://microsoft.github.io/mcs-labs/workshops/advanced-agent-in-a-day/)
> · © 2026 Microsoft Copilot Agents Labs. 본 내용은 위 공개 자료를 한국어로 번역·인용한 것이며,
> 모든 권리는 원저작자(Microsoft)에 있습니다. 각 모듈/랩 제목의 링크는 원문 페이지로 연결됩니다.

### 4.1 개요

빌더용 **300레벨 풀데이 워크샵**으로, 이미 Copilot Studio 기본기를 갖춘 사용자를 대상으로 합니다.
멀티 에이전트 핵심 개념, 도구(커넥터·에이전트 플로우·MCP 서버·커스텀 프롬프트·CUA),
생성형 오케스트레이션과 동적 체이닝, 신규 **Workflows** 자율 에이전트 기능, 그리고
터미널에서 Copilot Studio 스킬로 에이전트를 작성하는 방법까지 깊이 있게 다룹니다.
선택형 take-home 랩으로 멀티 에이전트(mcs-multi-agent), 거버넌스/DLP 존(mcs-governance),
재사용 컴포넌트 컬렉션(component-collections), ALM(mcs-alm)까지 확장할 수 있습니다.

| 모듈 | 랩 | 콘텐츠 | 레벨 |
|------|-----|--------|------|
| 5개 | 3개 | 약 5.8시간 | 300 |

### 4.2 진행 일정 (Agenda)

| 시간 | 세션 | 레벨 | 소요 |
|------|------|:----:|:----:|
| 09:00 | **환영 + 소개** — 강사 소개, 하루 일정 리뷰, 300레벨 선행지식(에이전트 생성, 토픽, 지식 소스, 변수) 확인 | — | 15분 |
| 09:15 | **모듈 1: [Copilot Studio 핵심 개념 개요](https://microsoft.github.io/mcs-labs/modules/copilot-studio-core-concepts-overview/?event=advanced-agent-in-a-day)** — 에이전트·토픽·지식 소스·도구·변수·채널 등 구성요소를 *Classic 작성 모델*과 *신규 생성형 오케스트레이션* 양쪽으로 다루는 200레벨 개요 | 200 | 30분 |
| 09:45 | **모듈 2: [Copilot Studio 도구(Tools)](https://microsoft.github.io/mcs-labs/modules/tools-overview/?event=advanced-agent-in-a-day)** — 커넥터, Power Automate 플로우, 커스텀 도구 | 300 | 30분 |
| 10:15 | 커피 브레이크 / Q&A | — | 15분 |
| 10:30 | **랩 1: [도구(Tools)](https://microsoft.github.io/mcs-labs/labs/mcs-tools/?event=advanced-agent-in-a-day)** — 커넥터, 에이전트 플로우, MCP 서버, 커스텀 프롬프트로 에이전트 확장 | 300 | 60분 |
| 11:30 | **모듈 3: [오케스트레이션과 동적 체이닝](https://microsoft.github.io/mcs-labs/modules/orchestration/?event=advanced-agent-in-a-day)** — 오케스트레이션 개념과 동적 체이닝 패턴 | 300 | 45분 |
| 12:15 | 점심 | — | 60분 |
| 13:15 | **랩 2: [Copilot Studio 오케스트레이션](https://microsoft.github.io/mcs-labs/labs/mcs-orchestration/?event=advanced-agent-in-a-day)** — 생성형 오케스트레이션 엔진의 요청 라우팅, Instruction의 영향 등을 실습 | 300 | 60분 |
| 14:15 | **모듈 4: [워크플로우(Workflows)](https://microsoft.github.io/mcs-labs/modules/workflows/?event=advanced-agent-in-a-day)** — 인라인 에이전트 연결 + 예약·이벤트 기반 트리거로 에이전트가 스스로 동작하는 차세대 자율 에이전트. Classic 자율 에이전트 트리거 모델을 넘어서는 신규 기능 소개 | 300 | 30분 |
| 14:45 | 커피 브레이크 / Q&A | — | 15분 |
| 15:00 | **랩 3: [워크플로우(Workflows)](https://microsoft.github.io/mcs-labs/labs/mcs-workflows/?event=advanced-agent-in-a-day)** — 이벤트 기반 트리거로 차세대 자율 에이전트 구축 | 300 | 60분 |
| 16:00 | **모듈 5: [개발자 도구용 Copilot Studio 플러그인](https://microsoft.github.io/mcs-labs/modules/copilot-studio-plugin/?event=advanced-agent-in-a-day)** — GitHub Copilot CLI 및 Claude Code와 함께 사용하는 Copilot Studio 플러그인 | 300 | 30분 |

### 4.3 Plugin 및 Skill 사례

- **Plan & handoff** 하는 skill zip 파일 기반 에이전트
- **MS Learn plugin**을 그대로 활용하는 에이전트 (이전에 만든 예제 활용)
- 다른 사례: Skill 등 — NEW Copilot Studio Agents: Working with Skills *(YouTube, 링크 추가 예정)*

> 📝 *작성 예정: 위 take-home 랩 링크(mcs-multi-agent, mcs-governance, component-collections, mcs-alm) 및 스킬 zip 예제.*

## 5. Advanced Tool

환경 구축과 확장에 활용하는 고급 도구를 정리합니다.

- **PAC CLI** — 환경 구축을 위한 도구
- **Copilot Studio skill**로 구축 & extension
- 함께 활용 가능한 **MCP 도구** — MS Learn, Dataverse MCP, Power Apps 연결 등

> 📝 *작성 예정: PAC CLI 명령 예시, MCP 도구 연결 다이어그램.*

## 6. New Copilot Studio — Workflow

신규 Workflow 기능 핸즈온은 별도 실습으로 연결됩니다.

- [Daily Brief Workflow (한국어)](/labs/daily-brief-kr/)
- [Daily Brief Workflow (English)](/labs/daily-brief-en/)

## 7. 언제 Cowork, 언제 New Copilot Studio? (Positioning)

New Copilot Studio와 다른 옵션(예: Cowork)의 포지셔닝과 선택 기준을 정리합니다.

> 📝 *작성 예정: 사용 시나리오별 의사결정 가이드.*
